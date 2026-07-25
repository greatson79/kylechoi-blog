import fs from 'node:fs';

const robots = fs.readFileSync('public/robots.txt', 'utf8');
const required = [
  'User-agent: OAI-SearchBot\nAllow: /',
  'User-agent: *\nAllow: /',
  'Sitemap: https://kylechoi.com/sitemap-index.xml',
];
const forbidden = ['Sitemap: https://kylechoi.com/sitemap.xml'];

const errors = [];
for (const token of required) {
  if (!robots.includes(token)) errors.push(`필수 robots 계약 누락: ${token}`);
}
for (const token of forbidden) {
  if (robots.includes(token)) errors.push(`잘못된 사이트맵 주소: ${token}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('ROBOTS_OAI_SEARCH_CONTRACT_PASS');
