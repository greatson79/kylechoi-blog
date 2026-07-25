import { execFileSync } from 'node:child_process';
import { submitIndexNow } from './indexnow.mjs';

const urls = process.argv.slice(2);
if (urls.length === 0) {
  throw new Error('사용법: npm run deploy:prod -- https://kylechoi.com/새글/');
}
execFileSync('vercel', ['--prod', '--yes'], { stdio: 'inherit' });
try {
  const result = await submitIndexNow(urls);
  console.log(`production + IndexNow: submitted ${result.submitted}`);
} catch (error) {
  console.error('production 배포는 완료됐습니다. 재배포하지 말고 IndexNow만 재시도하세요.');
  throw error;
}
