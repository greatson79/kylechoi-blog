// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Kyle Choi Notes 블로그 — 순수 정적(output:'static'). ★Vercel 어댑터 불필요(정적 배포).
// ★서버 0: 검증은 `astro build`(정적) + dist 렌더. astro dev/preview는 상시서버 → 사용 최소화·강제종료.
// ★완전공개(production, 2026-06-26 주인님 승인): noindex 해제 → sitemap 재활성.
// ★메인 도메인 kylechoi.com 전환(2026-06-30, 주인님 결정 b): canonical·og:url·sitemap base. dia-io.com=포기(2026-07-31 만료).
export default defineConfig({
  site: 'https://kylechoi.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: { format: 'directory' },
});
