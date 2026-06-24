// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// DiA 블로그 — 순수 정적(output:'static'). ★Vercel 어댑터 불필요(정적 배포).
// ★서버 0: 검증은 `astro build`(정적) + dist 렌더. astro dev/preview는 상시서버 → 사용 최소화·강제종료.
export default defineConfig({
  site: 'https://dia-blog.example.com', // 배포 시 실제 도메인으로 교체(SEO·sitemap 기준)
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: { format: 'directory' },
});
