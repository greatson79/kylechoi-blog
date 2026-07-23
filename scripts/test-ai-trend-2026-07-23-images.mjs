import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';

const article = fs.readFileSync('src/content/insight/2026-07-23-gpt56-sol-security-debt.md', 'utf8');
const images = [
  ['hero_gpt56-sol-security-debt_0723_1200x630.png', '6658792eaea92d83407d43aec495dd5fc95479237f0acb8ff754caa28acc40df'],
  ['sec1_sandbox-breach-defense_0723.png', '40bc1182eae3d6df75cb6dff1016c72451ee198bb8a221d3bdd8438a2d69e498'],
  ['sec2_agent-security-debt_0723.png', '385f20f6ae95f132765de710d654e4dd5be35759ba013580d69e0def9fc14481'],
  ['sec3_explainable-finance-ai_0723.png', 'ff3683ae23b054b59572612c8fbb8691741c48c260c1d833d300282296b4fc43'],
  ['sec4_compute-supply-chain_0723.png', 'e912d11c5d0e748ec27862a15d5fbe8bd8f96392ac2907e4992821ce2d52b7f2'],
];
for (const [name, sha] of images) {
  const path = `public/images/ai-trend/${name}`;
  assert.ok(fs.existsSync(path), `${name} must be published`);
  assert.equal(createHash('sha256').update(fs.readFileSync(path)).digest('hex'), sha, `${name} SHA-256 must match QC`);
}
assert.match(article, /heroImage:\n  src: \/images\/ai-trend\/hero_gpt56-sol-security-debt_0723_1200x630\.png/);
for (const [name] of images.slice(1)) assert.match(article, new RegExp(`!\\[[^\\]]+\\]\\(/images/ai-trend/${name.replace('.', '\\.')}`));
console.log('AI_TREND_2026_07_23_IMAGES=PASS');
