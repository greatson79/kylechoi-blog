// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// DiA 블로그 — 순수 정적(output:'static'). ★Vercel 어댑터 불필요(정적 배포).
// ★서버 0: 검증은 `astro build`(정적) + dist 렌더. astro dev/preview는 상시서버 → 사용 최소화·강제종료.
// ★완전공개(production, 2026-06-26 주인님 승인): noindex 해제 → sitemap 재활성.
export default defineConfig({
  site: 'https://dia-io.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: { format: 'directory' },
});
