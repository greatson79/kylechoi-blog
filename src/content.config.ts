import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// ── 공통 베이스 스키마 ──────────────────────────────────────────
const base = {
  title: z.string().max(80),
  description: z.string().max(160),          // SEO meta description
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('디딤'),
  tags: z.array(z.string()).default([]),
  heroImage: z.object({ src: z.string(), alt: z.string() }).optional(),
  draft: z.boolean().default(true),          // ★기본 비공개(승인 전 발행 방지)
  sourcePath: z.string().optional(),          // output/ 원본 추적(SOT)
};

// ── 사역(Ministry) 채널: 설교·묵상·교육 (★주인님 확정, 청소년 제외) ──
const ministry = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/ministry' }),
  schema: z.object({
    ...base,
    category: z.enum(['설교', '묵상', '교육']),
    // 설교: 작성된 설교 원고 기반 아티클 / 묵상: 발행하는 묵상 / 교육: 교육 콘텐츠
    scripture: z.string().optional(), // 묵상·설교 본문 구절(선택)
  }),
});

// ── 분석 섹션: 시대분석·AI트렌드 (★조건부 면책) ─────────────────
const insight = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/insight' }),
  schema: z.object({
    ...base,
    category: z.enum(['시대분석', 'AI트렌드']), // 주인님 확정 4분류 中 분석 2
    // ★조건부 면책: 투자·시장을 다룰 때만 true(agy 법적 게이트가 강제). 기본 false.
    disclaimerRequired: z.boolean().default(false),
    notInvestmentAdvice: z.boolean().default(false),
    factChecked: z.boolean().default(false),    // agy 게이트 통과 표식
  }),
});

export const collections = { ministry, insight };
