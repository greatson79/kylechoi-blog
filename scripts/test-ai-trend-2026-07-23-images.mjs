import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';

const article = fs.readFileSync('src/content/insight/2026-07-23-gpt56-sol-security-debt.md', 'utf8');
const images = [
  ['hero_gpt56-sol-security-debt_0723_1200x630.png', 'e6d5e69eae9a1608a8eea232e27663732aa4bbe1033effed40028df682dba718'],
  ['sec1_sandbox-breach-defense_0723.png', 'ed91022fb32488059fde7bd7e1b13bbac5c5f5c4deba318fe83895c7a723c809'],
  ['sec2_agent-security-debt_0723.png', 'cc254b91b7e25a01c10ce2f1b21c34a170234b0a18cdaab7571c5c8ac30baece'],
  ['sec3_explainable-finance-ai_0723.png', 'd392cdb3ba88152f8b0daf7278841b4257b713672044669c59eb0cecb863f67e'],
  ['sec4_compute-supply-chain_0723.png', '5344ae374669494a6d55284314647b2aa6642811ef2ba7994a276fca3b67a134'],
];
for (const [name, sha] of images) {
  const path = `public/images/ai-trend/${name}`;
  assert.ok(fs.existsSync(path), `${name} must be published`);
  assert.equal(createHash('sha256').update(fs.readFileSync(path)).digest('hex'), sha, `${name} SHA-256 must match QC`);
}
assert.match(article, /heroImage:\n  src: \/images\/ai-trend\/hero_gpt56-sol-security-debt_0723_1200x630\.png/);
for (const [name] of images.slice(1)) assert.match(article, new RegExp(`!\\[[^\\]]+\\]\\(/images/ai-trend/${name.replace('.', '\\.')}`));
console.log('AI_TREND_2026_07_23_IMAGES=PASS');
