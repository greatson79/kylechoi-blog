import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';

import type {
  PublishAdapter,
  PublishInput,
  PublishResult,
  ValidationResult,
} from './PublishAdapter';
import { flagInvestment } from '../transform/disclaimer';

/**
 * StaticAdapter — Astro 콘텐츠 컬렉션에 markdown 파일을 기록하는 기본 어댑터.
 *
 * 발행(deploy)은 주인님 승인 게이트(denylist) — 이 어댑터는 콘텐츠 파일
 * 기록까지만. (astro build / 배포는 별도의 주인님 승인 단계다. 어댑터는
 * 절대 빌드·배포·서버 기동을 수행하지 않는다.)
 *
 * ★Codex FIX(2026-06-24): ①publish()는 반드시 validate() 통과 후 기록(면책 우회 차단)
 *   ②slug 경로주입 방지(화이트리스트+content root 봉쇄) ③투자 키워드=flagInvestment 재사용(일관).
 */

const REQUIRED_FRONTMATTER = ['title', 'description', 'pubDate'] as const;
const VALID_CHANNELS = ['ministry', 'insight'] as const;

/** 콘텐츠 컬렉션 루트 — content.config.ts 의 base 경로와 일치. */
const CONTENT_ROOT = resolve(process.cwd(), 'src', 'content');

/** slug 화이트리스트: 유니코드 글자/숫자/하이픈만(경로 메타문자·'../' 차단). */
const SLUG_RE = /^[\p{L}\p{N}-]+$/u;

/** frontmatter 객체를 YAML 블록 문자열로 직렬화(불변, 단순 스칼라/배열). */
function serializeFrontmatter(frontmatter: Record<string, unknown>): string {
  const lines = Object.entries(frontmatter).map(
    ([key, value]) => `${key}: ${serializeValue(value)}`,
  );
  return ['---', ...lines, '---'].join('\n');
}

function serializeValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) {
    return `[${value.map((v) => serializeScalar(v)).join(', ')}]`;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return serializeScalar(value);
}

function serializeScalar(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'string') return JSON.stringify(value);
  return String(value);
}

/**
 * 안전한 콘텐츠 파일 경로 해석. slug 화이트리스트 + content root 봉쇄.
 * 경로 탈출('../' 등) 시 null 반환.
 */
function safeContentPath(channel: string, slug: string): string | null {
  if (!(VALID_CHANNELS as readonly string[]).includes(channel)) return null;
  if (!SLUG_RE.test(slug)) return null;
  const channelRoot = resolve(CONTENT_ROOT, channel);
  const filePath = resolve(channelRoot, `${slug}.md`);
  // 반드시 채널 루트 내부여야 함(심볼릭/상대경로 탈출 방지).
  if (!filePath.startsWith(channelRoot + sep)) return null;
  return filePath;
}

export class StaticAdapter implements PublishAdapter {
  readonly name = 'static';
  readonly enabled = true;

  async validate(input: PublishInput): Promise<ValidationResult> {
    const issues: string[] = [];

    // 채널·slug 안전성(경로주입 방지)
    if (!(VALID_CHANNELS as readonly string[]).includes(input.channel)) {
      issues.push(`invalid channel: ${String(input.channel)}`);
    }
    if (!SLUG_RE.test(input.slug)) {
      issues.push(`invalid slug (글자/숫자/하이픈만 허용): ${String(input.slug)}`);
    }

    for (const key of REQUIRED_FRONTMATTER) {
      const value = input.frontmatter[key];
      if (value === undefined || value === null || value === '') {
        issues.push(`required frontmatter missing: ${key}`);
      }
    }

    // ★조건부 면책: insight 채널 + 투자 키워드 감지(flagInvestment 재사용) → disclaimerRequired 강제.
    if (input.channel === 'insight') {
      const scan = flagInvestment(`${input.markdown} ${JSON.stringify(input.frontmatter)}`);
      if (scan.disclaimerRequired && input.frontmatter.disclaimerRequired !== true) {
        issues.push(
          `투자/시장 키워드 감지(${scan.matched.slice(0, 5).join(', ')}) — disclaimerRequired=true 필요(투자자문법 면책)`,
        );
      }
    }

    return { ok: issues.length === 0, issues };
  }

  async publish(input: PublishInput): Promise<PublishResult> {
    // ★FIX①: 반드시 검증 통과 후 기록(면책·경로 우회 차단).
    const v = await this.validate(input);
    if (!v.ok) {
      return { ok: false, target: this.name, error: v.issues.join('; ') };
    }

    // ★FIX②: 안전 경로 해석(경로주입 차단).
    const filePath = safeContentPath(input.channel, input.slug);
    if (!filePath) {
      return { ok: false, target: this.name, error: 'unsafe channel/slug — 경로 거부' };
    }

    try {
      const body = `${serializeFrontmatter(input.frontmatter)}\n\n${input.markdown}\n`;
      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, body, 'utf-8');
      // 콘텐츠 기록까지만 — 빌드/배포는 주인님 승인 게이트(denylist).
      return { ok: true, target: this.name, url: `/${input.channel}/${input.slug}` };
    } catch (error: unknown) {
      return {
        ok: false,
        target: this.name,
        error: error instanceof Error ? error.message : 'unknown write error',
      };
    }
  }
}
