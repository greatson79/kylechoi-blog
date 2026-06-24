// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// DiA 블로그 — 순수 정적(output:'static'). ★Vercel 어댑터 불필요(정적 배포).
// ★서버 0: 검증은 `astro build`(정적) + dist 렌더. astro dev/preview는 상시서버 → 사용 최소화·강제종료.
// ★소프트런칭: 전 페이지 noindex라 sitemap 비활성(noindex 페이지를 sitemap에 넣지 않음 — CEO 무결성).
//   실콘텐츠+완전공개(noindex 해제) 시 sitemap 재활성.
export default defineConfig({
  site: 'https://dia-io.com',
  output: 'static',
  integrations: [mdx()],
  build: { format: 'directory' },
});
