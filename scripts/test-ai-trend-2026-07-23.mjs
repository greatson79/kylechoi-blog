import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';

const sourcePath = process.env.AI_TREND_SOURCE_PATH;
const targetPath = 'src/content/insight/2026-07-23-gpt56-sol-security-debt.md';
const approvedSha256 = 'ec1764e24a0a10fa7f6f2871bd3209c1b6d9a2c810e9ad7f542c740299f46af3';

assert.ok(sourcePath, 'AI_TREND_SOURCE_PATH must point to the approved source');
const source = fs.readFileSync(sourcePath, 'utf8');
assert.equal(
  createHash('sha256').update(source).digest('hex'),
  approvedSha256,
  'approved source SHA-256 must match',
);

assert.ok(fs.existsSync(targetPath), 'published AI trend file must exist');
const target = fs.readFileSync(targetPath, 'utf8');
assert.match(target, /^title: "통제된 환경은 없었다 — GPT-5\.6 Sol의 자율 해킹이 남긴 진짜 질문"$/m);
assert.match(target, /^category: AI트렌드$/m);
assert.match(target, /^pubDate: 2026-07-23$/m);
assert.match(target, /^draft: false$/m);
assert.match(target, /^factChecked: true$/m);
assert.match(target, /^sourcePath: output\/WaveAI\/크리에이티브본부\/AI트렌드_기술동향_2026-07-23\/원고_2026-07-23\.md$/m);
assert.match(target, /OpenAI 공식 발표/);
assert.doesNotMatch(target, /\[히어로 이미지 프롬프트 제안\]/, 'internal image prompt must not be published');
assert.equal(
  target.replace(/^sourcePath: .*\r?\n/m, '').replace(/[ \t]+$/gm, ''),
  source.replace(/[ \t]+$/gm, ''),
  'published content must equal the clean SOT except for the relative sourcePath audit field',
);
assert.doesNotMatch(target, /[ \t]+\r?\n/, 'published content must not contain trailing whitespace');
assert.match(target, /<em>"Trust but Verify\? Uncovering the Security Debt/);
assert.match(target, /<strong>통제\(Security\), 해석\(Interpretability\), 그리고 물리적 자원\(Infra\)<\/strong>/);
console.log('AI_TREND_2026_07_23=PASS');
