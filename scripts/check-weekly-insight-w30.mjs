import fs from 'node:fs';

const articlePath =
  'src/content/insight/2026-07-25-weekly-insight-w30-bill-arrives.md';
const article = fs.readFileSync(articlePath, 'utf8');

const required = [
  'category: 시대분석',
  'pubDate: 2026-07-25',
  'draft: false',
  'disclaimerRequired: true',
  'notInvestmentAdvice: true',
  'factChecked: true',
  'src: /images/insight/hero_W30_2026-07-25.png',
  'alt: 15GW 계획과 7,500억 원 확약의 간극 및 주간 신호 1,094개를 비교한 주간시대통찰 W30 데이터 시각화',
  '![자동화가 통제 표면을 앞질렀다 — 능력은 운영 환경에, 통제는 아직 평가 환경에](/images/insight/fig_control_gap.png)',
  '![한국은 같은 주에 네 개의 스트레스를 동시에 받았다 — 자산시장·제도신뢰·AI기술압박·물류안전](/images/insight/fig_korea_stress.png)',
  '![1,094개 신호의 형태 — WF별 분포와 출처 비대칭](/images/insight/fig_1094_signals.png)',
  '15GW',
  '7,500억 원',
  '232,270개',
  '1,094개 신호',
  '## 데이터 품질 한계 (정직 공시)',
  '## 미주',
];
const forbidden = [
  '/Users/',
  'Desktop/Ai_works',
  'output/WaveAI',
  '내부 사적',
  '비공개',
  '모델 티어',
  '서브에이전트',
  '각 미주는 [매체',
];

const errors = [];
for (const token of required) {
  if (!article.includes(token)) errors.push(`필수 문자열 누락: ${token}`);
}
for (const token of forbidden) {
  if (article.includes(token)) errors.push(`내부 문자열 노출: ${token}`);
}

const citations = article.match(/^\[\d+\]/gm) ?? [];
if (citations.length !== 45) {
  errors.push(`미주 수 불일치: expected=45 actual=${citations.length}`);
}

const missingUrlCount = (article.match(/URL 원문 미기재/g) ?? []).length;
if (missingUrlCount !== 14) {
  errors.push(`URL 원문 미기재 수 불일치: expected=14 actual=${missingUrlCount}`);
}

const h1Count = (article.match(/^# /gm) ?? []).length;
if (h1Count !== 0) errors.push(`본문 H1 중복: actual=${h1Count}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('W30_PUBLICATION_CONTRACT_PASS');
