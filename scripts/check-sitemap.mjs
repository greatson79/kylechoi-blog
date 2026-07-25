import { readFile } from 'node:fs/promises';

const site = 'https://kylechoi.com';
const [alias, generated, robots] = await Promise.all([
  readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8'),
]);

if (!alias.includes(`${site}/sitemap-0.xml`)) {
  throw new Error('sitemap.xml이 생성 사이트맵을 가리키지 않습니다.');
}
if (!generated.includes('<urlset') || !generated.includes(`<loc>${site}/`)) {
  throw new Error('생성 사이트맵에 공개 URL이 없습니다.');
}
if (!robots.includes(`Sitemap: ${site}/sitemap.xml`)) {
  throw new Error('robots.txt가 표준 sitemap.xml을 가리키지 않습니다.');
}

console.log('sitemap contract: PASS');
