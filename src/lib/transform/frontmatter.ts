/**
 * frontmatter.ts — frontmatter 정규화(순수 함수, 불변).
 *
 * content.config.ts base 스키마의 필수 필드를 보장한다:
 * title, description(<=160), pubDate, author(default '디딤'),
 * tags[], draft(default true), sourcePath, category.
 */

import type { Category, Channel, NormalizedFrontmatter } from '../ingest/types.js';
import { MAX_DESCRIPTION_LENGTH, truncate } from './seo.js';

/** 기본 저자. */
export const DEFAULT_AUTHOR = '디딤';

/** title 최대 길이(content.config.ts 와 일치). */
export const MAX_TITLE_LENGTH = 80;

/** normalizeFrontmatter 옵션. */
export interface NormalizeOptions {
  readonly channel: Channel;
  readonly category: Category;
  readonly sourcePath: string;
  /** 명시 없을 때 사용할 발행일(테스트 결정성용). 기본 = 현재 시각. */
  readonly now?: Date;
  /** insight 조건부 면책 — disclaimer.flagInvestment 결과 주입(선택). */
  readonly disclaimerRequired?: boolean;
}

/** 임의 값을 안전하게 문자열로. */
function asString(value: unknown): string | undefined {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return undefined;
}

/** 임의 값을 ISO 날짜 문자열로(파싱 실패 시 undefined). */
function asIsoDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString();
  const str = asString(value);
  if (!str) return undefined;
  const parsed = new Date(str);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

/** 임의 값을 문자열 배열로(쉼표 구분 문자열도 허용). */
function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((v) => asString(v)).filter((v): v is string => !!v && v.length > 0);
  }
  const str = asString(value);
  if (!str) return [];
  return str
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/** 임의 값을 boolean 으로(미지정 시 fallback). */
function asBoolean(value: unknown, fallback: boolean): boolean {
  if (typeof value === 'boolean') return value;
  const str = asString(value)?.toLowerCase();
  if (str === 'true') return true;
  if (str === 'false') return false;
  return fallback;
}

/** heroImage 객체 정규화(불완전하면 undefined). */
function asHeroImage(value: unknown): { src: string; alt: string } | undefined {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const obj = value as Record<string, unknown>;
    const src = asString(obj.src);
    if (src) return { src, alt: asString(obj.alt) ?? '' };
  }
  return undefined;
}

/**
 * raw frontmatter(파싱된 객체)를 타입 안전한 NormalizedFrontmatter 로 정규화한다.
 * 입력을 변형하지 않고 새 불변 객체를 반환한다.
 */
export function normalizeFrontmatter(
  raw: Readonly<Record<string, unknown>>,
  opts: NormalizeOptions,
): NormalizedFrontmatter {
  const title = truncate(asString(raw.title) ?? '제목 없음', MAX_TITLE_LENGTH);
  const description = truncate(asString(raw.description) ?? title, MAX_DESCRIPTION_LENGTH);
  const pubDate = asIsoDate(raw.pubDate) ?? (opts.now ?? new Date()).toISOString();
  const updatedDate = asIsoDate(raw.updatedDate);
  const author = asString(raw.author) || DEFAULT_AUTHOR;
  const tags = asStringArray(raw.tags);
  const draft = asBoolean(raw.draft, true); // ★기본 비공개
  const heroImage = asHeroImage(raw.heroImage);

  const base: NormalizedFrontmatter = {
    title,
    description,
    pubDate,
    author,
    tags: Object.freeze(tags),
    draft,
    sourcePath: opts.sourcePath,
    category: opts.category,
    ...(updatedDate ? { updatedDate } : {}),
    ...(heroImage ? { heroImage } : {}),
  };

  // ── insight 채널: 조건부 면책 필드 ──
  if (opts.channel === 'insight') {
    const disclaimerRequired = opts.disclaimerRequired ?? asBoolean(raw.disclaimerRequired, false);
    return Object.freeze({
      ...base,
      disclaimerRequired,
      // ★법적 확정값(notInvestmentAdvice/factChecked)은 agy 게이트가 강제 —
      //   여기서는 raw 값을 보존하되 기본 false.
      notInvestmentAdvice: asBoolean(raw.notInvestmentAdvice, false),
      factChecked: asBoolean(raw.factChecked, false),
    });
  }

  return Object.freeze(base);
}
