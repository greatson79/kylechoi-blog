/**
 * ingest 파이프라인 공유 타입.
 *
 * 채널·카테고리는 content.config.ts 의 collection 스키마와 1:1 대응한다.
 * ★발행/쓰기는 책임 밖 — 이 타입들은 "변환 산출물의 불변 스냅샷"만 표현한다.
 */

/** 콘텐츠 채널 — content collection 이름과 1:1. */
export type Channel = 'ministry' | 'insight';

/** ministry 채널 카테고리 (주인님 확정 4분류 中 메인 2). */
export type MinistryCategory = '목회' | '교육';

/** insight 채널 카테고리 (주인님 확정 4분류 中 분석 2). */
export type InsightCategory = '시대분석' | 'AI트렌드';

/** 전체 카테고리 합집합. */
export type Category = MinistryCategory | InsightCategory;

/** 정규화된 frontmatter — content.config.ts base 스키마 + 채널 확장 필드. */
export interface NormalizedFrontmatter {
  readonly title: string;
  readonly description: string; // <=160
  readonly pubDate: string; // ISO 8601
  readonly updatedDate?: string;
  readonly author: string; // default '디딤'
  readonly tags: ReadonlyArray<string>;
  readonly heroImage?: { readonly src: string; readonly alt: string };
  readonly draft: boolean; // default true
  readonly sourcePath: string;
  readonly category: Category;
  // ── insight 전용(조건부 면책) ──
  readonly disclaimerRequired?: boolean;
  readonly notInvestmentAdvice?: boolean;
  readonly factChecked?: boolean;
}

/** SEO 파생 결과. */
export interface SeoResult {
  readonly description: string; // <=160
  readonly ogTitle: string;
}

/** 투자/시장 플래깅 결과. */
export interface DisclaimerResult {
  readonly disclaimerRequired: boolean;
  readonly matched: ReadonlyArray<string>;
}

/** ingest 최종 산출물 — 변환된 content-collection 마크다운 + 대상 경로. */
export interface IngestResult {
  readonly channel: Channel;
  readonly slug: string;
  /** `src/content/{channel}/{slug}.md` — ★경로 반환만, 쓰기는 StaticAdapter 책임. */
  readonly targetPath: string;
  /** 정규화 frontmatter + 본문을 합친 완성 마크다운 문자열. */
  readonly content: string;
  readonly frontmatter: NormalizedFrontmatter;
  readonly seo: SeoResult;
  readonly disclaimer?: DisclaimerResult;
}
