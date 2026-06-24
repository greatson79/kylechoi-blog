/**
 * ingest.ts — output/ 마크다운을 content-collection 마크다운으로 변환한다.
 *
 * 파이프라인: 읽기 → frontmatter 파싱 → normalizeFrontmatter + deriveSeo
 *   + (insight 한정) flagInvestment → 완성 마크다운 문자열 + 대상 경로 반환.
 *
 * ★변환 결과를 RETURN 만 한다 — 파일 쓰기는 StaticAdapter, 배포는 주인님 승인 게이트.
 *   (의존성 무첨가: gray-matter 없이 최소 frontmatter 파서를 직접 구현.
 *    필요 시 gray-matter 를 선택적으로 교체 가능 — 본 파서는 단일 YAML 펜스 가정.)
 */

import { readFileSync } from 'node:fs';

import type {
  Category,
  Channel,
  IngestResult,
  NormalizedFrontmatter,
} from './types.js';
import { normalizeFrontmatter } from '../transform/frontmatter.js';
import { deriveSeo } from '../transform/seo.js';
import { flagInvestment } from '../transform/disclaimer.js';

export interface IngestOptions {
  readonly sourcePath: string;
  readonly channel: Channel;
  readonly category: Category;
  /** 명시 없을 때 사용할 발행일(결정성용). */
  readonly now?: Date;
  /** 파일을 직접 읽지 않고 원문을 주입(테스트·미리읽은 콘텐츠용). */
  readonly rawContent?: string;
}

interface ParsedSource {
  readonly data: Record<string, unknown>;
  readonly body: string;
}

/** 단순 스칼라 YAML 값 파싱(따옴표·배열·boolean·숫자). */
function parseScalar(raw: string): unknown {
  const value = raw.trim();
  if (value.length === 0) return '';
  // 인라인 배열: [a, b, c]
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((s) => unquote(s.trim()))
      .filter((s) => s.length > 0);
  }
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return unquote(value);
}

/** 양쪽 따옴표 제거. */
function unquote(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

/**
 * 최소 frontmatter 파서 — 첫 두 '---' 펜스 사이를 YAML(평면 key: value + 배열)로 파싱.
 * 펜스가 없으면 전체를 본문으로 취급.
 */
export function parseFrontmatter(content: string): ParsedSource {
  const normalized = content.replace(/^﻿/, ''); // BOM 제거
  const fence = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
  const match = normalized.match(fence);
  if (!match) return { data: {}, body: normalized.trim() };

  const data: Record<string, unknown> = {};
  const lines = match[1].split(/\r?\n/);
  let currentKey: string | null = null;
  const listBuffer: string[] = [];

  const flushList = (): void => {
    if (currentKey) {
      // 항목이 모이면 배열, 없으면(빈 값 키) 빈 문자열로 해소한다.
      data[currentKey] = listBuffer.length > 0 ? [...listBuffer] : '';
    }
    listBuffer.length = 0;
    currentKey = null;
  };

  for (const line of lines) {
    if (line.trim().length === 0) continue;
    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && currentKey) {
      listBuffer.push(unquote(listItem[1].trim()));
      continue;
    }
    flushList();
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, rawValue] = kv;
    if (rawValue.trim().length === 0) {
      currentKey = key; // 다음 줄들이 '- ' 리스트일 수 있음
    } else {
      data[key] = parseScalar(rawValue);
    }
  }
  flushList();

  const body = normalized.slice(match[0].length).trim();
  return { data, body };
}

/** 문자열을 URL-safe slug 로(한글 보존, 공백→하이픈). */
export function slugify(input: string): string {
  const base = input
    .normalize('NFC')
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
  return base.length > 0 ? base : 'untitled';
}

/** YAML 스칼라 직렬화(따옴표·이스케이프). */
function serializeScalar(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

/** NormalizedFrontmatter 를 YAML frontmatter 블록으로 직렬화. */
function serializeFrontmatter(fm: NormalizedFrontmatter): string {
  const lines: string[] = ['---'];
  lines.push(`title: ${serializeScalar(fm.title)}`);
  lines.push(`description: ${serializeScalar(fm.description)}`);
  lines.push(`pubDate: ${fm.pubDate}`);
  if (fm.updatedDate) lines.push(`updatedDate: ${fm.updatedDate}`);
  lines.push(`author: ${serializeScalar(fm.author)}`);
  lines.push(`category: ${serializeScalar(fm.category)}`);
  lines.push('tags:');
  for (const tag of fm.tags) lines.push(`  - ${serializeScalar(tag)}`);
  if (fm.heroImage) {
    lines.push('heroImage:');
    lines.push(`  src: ${serializeScalar(fm.heroImage.src)}`);
    lines.push(`  alt: ${serializeScalar(fm.heroImage.alt)}`);
  }
  lines.push(`draft: ${fm.draft}`);
  lines.push(`sourcePath: ${serializeScalar(fm.sourcePath)}`);
  if (fm.disclaimerRequired !== undefined) {
    lines.push(`disclaimerRequired: ${fm.disclaimerRequired}`);
    lines.push(`notInvestmentAdvice: ${fm.notInvestmentAdvice ?? false}`);
    lines.push(`factChecked: ${fm.factChecked ?? false}`);
  }
  lines.push('---');
  return lines.join('\n');
}

/**
 * source 마크다운을 content-collection 마크다운으로 변환한다.
 * ★결과를 반환만 한다(파일 쓰기·배포 없음).
 */
export function ingestMarkdown(opts: IngestOptions): IngestResult {
  const rawContent = opts.rawContent ?? readFileSync(opts.sourcePath, 'utf8');
  const { data, body } = parseFrontmatter(rawContent);

  // insight 채널만 투자/시장 플래깅(조건부 면책).
  const disclaimer =
    opts.channel === 'insight'
      ? flagInvestment(`${(data.title as string) ?? ''}\n${body}`)
      : undefined;

  const frontmatter = normalizeFrontmatter(data, {
    channel: opts.channel,
    category: opts.category,
    sourcePath: opts.sourcePath,
    now: opts.now,
    disclaimerRequired: disclaimer?.disclaimerRequired,
  });

  const seo = deriveSeo({
    title: frontmatter.title,
    description: frontmatter.description,
    body,
  });

  // SEO 파생 description 으로 frontmatter description 보정(본문에서 더 나은 요약이 나온 경우).
  const finalFrontmatter: NormalizedFrontmatter =
    frontmatter.description === seo.description
      ? frontmatter
      : Object.freeze({ ...frontmatter, description: seo.description });

  const slug = slugify(frontmatter.title);
  const targetPath = `src/content/${opts.channel}/${slug}.md`;
  const content = `${serializeFrontmatter(finalFrontmatter)}\n\n${body}\n`;

  return Object.freeze({
    channel: opts.channel,
    slug,
    targetPath,
    content,
    frontmatter: finalFrontmatter,
    seo,
    ...(disclaimer ? { disclaimer } : {}),
  });
}
