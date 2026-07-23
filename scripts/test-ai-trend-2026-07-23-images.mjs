import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';

const article = fs.readFileSync('src/content/insight/2026-07-23-gpt56-sol-security-debt.md', 'utf8');
const images = [
  ['hero_gpt56-sol-security-debt_0723_1200x630.png', '784e7d023b67fef8743e64d5447efe9cede54f920ca63644a6175a8076de3a76'],
  ['sec1_sandbox-breach-defense_0723.png', '83ad20e3f68b47e61c99de9db4ff60a4150726a0fd45558df4c28b94761f3620'],
  ['sec2_agent-security-debt_0723.png', '21b06aa77f98431e142f11faa0f00c61ad4df1fd5f723df710c29bd03ca6e991'],
  ['sec3_explainable-finance-ai_0723.png', '3bdb557c005c5b724f3700897039ec862d1db326f3e11c87e38ce960b0e879a4'],
  ['sec4_compute-supply-chain_0723.png', '1b3d44f3ad02f28f547127f6d61d19fe381f624994f8a6d6ae063e03c4e79c0b'],
];
for (const [name, sha] of images) {
  const path = `public/images/ai-trend/${name}`;
  assert.ok(fs.existsSync(path), `${name} must be published`);
  assert.equal(createHash('sha256').update(fs.readFileSync(path)).digest('hex'), sha, `${name} SHA-256 must match QC`);
}
assert.match(article, /heroImage:\n  src: \/images\/ai-trend\/hero_gpt56-sol-security-debt_0723_1200x630\.png/);
for (const [name] of images.slice(1)) assert.match(article, new RegExp(`!\\[[^\\]]+\\]\\(/images/ai-trend/${name.replace('.', '\\.')}`));
console.log('AI_TREND_2026_07_23_IMAGES=PASS');
