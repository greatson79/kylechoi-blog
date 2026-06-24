/**
 * seo.ts — SEO 메타 파생(순수 함수).
 *
 * description 이 없으면 본문에서 파생하고, 160자 한도로 자른다.
 * ogTitle 은 title 기반(필요 시 사이트명 접미 등은 호출부에서 합성).
 */

import type { SeoResult } from '../ingest/types.js';

/** SEO meta description 최대 길이(검색엔진 권장 한도). */
export const MAX_DESCRIPTION_LENGTH = 160;

/** 말줄임 표시. */
const ELLIPSIS = '…';

export interface DeriveSeoInput {
  readonly title: string;
  readonly description?: string;
  readonly body?: string;
}

/**
 * 본문에서 첫 의미 단락을 추출한다.
 * - 마크다운 헤딩(#), 코드펜스, 빈 줄을 건너뛰고 첫 산문 줄을 모은다.
 * - 마크다운 기호를 가볍게 제거해 사람이 읽는 요약문으로 만든다.
 */
function extractLeadParagraph(body: string): string {
  const lines = body.split('\n');
  const collected: string[] = [];
  let inFence = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (line.length === 0) {
      if (collected.length > 0) break; // 첫 단락 끝
      continue;
    }
    if (line.startsWith('#')) continue; // 헤딩 스킵
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) continue; // 수평선 스킵
    collected.push(line);
  }

  return stripMarkdown(collected.join(' '));
}

/** 본문 요약용 가벼운 마크다운 제거(링크·강조·인라인코드·이미지). */
function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // 이미지
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // 링크 → 텍스트
    .replace(/[*_~`>]/g, '') // 강조·인라인코드·인용
    .replace(/\s+/g, ' ')
    .trim();
}

/** maxLength 한도로 단어 경계를 존중해 자르고 말줄임표를 붙인다. */
export function truncate(text: string, maxLength: number = MAX_DESCRIPTION_LENGTH): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) return normalized;

  const slice = normalized.slice(0, maxLength - ELLIPSIS.length);
  const lastSpace = slice.lastIndexOf(' ');
  // 단어 경계가 충분히 뒤쪽이면 그 지점에서 자른다(공백 없는 한글은 그대로).
  const cut = lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}${ELLIPSIS}`;
}

/**
 * SEO 메타를 파생한다.
 * - description: 주어지면 정규화·절단, 없으면 본문 첫 단락에서 파생.
 * - ogTitle: title 그대로(공백 정규화).
 */
export function deriveSeo(input: DeriveSeoInput): SeoResult {
  const title = input.title.replace(/\s+/g, ' ').trim();
  const explicit = input.description?.trim();
  const source = explicit && explicit.length > 0 ? explicit : extractLeadParagraph(input.body ?? '');

  return {
    description: truncate(source, MAX_DESCRIPTION_LENGTH),
    ogTitle: title,
  };
}
