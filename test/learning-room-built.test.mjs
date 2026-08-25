import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { learningResources } from '../src/data/learning-resources.mjs';

const builtHtml = process.env.LEARNING_ROOM_HTML
  ? new URL(`file://${process.env.LEARNING_ROOM_HTML}`)
  : new URL('../dist/learn/index.html', import.meta.url);

function anchorAttributes(html) {
  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, '');

  return [...withoutComments.matchAll(/<a\b([^>]*)>/g)].map(([, rawAttributes]) => {
    const attributes = {};
    for (const [, name, value] of rawAttributes.matchAll(/([^\s=]+)(?:="([^"]*)")?/g)) {
      attributes[name] = value ?? '';
    }
    return attributes;
  });
}

test('빌드 HTML의 학습 카드 5건은 정확한 URL과 새 탭 보안 속성을 가진다', async () => {
  const html = await readFile(builtHtml, 'utf8');
  const resourceAnchors = anchorAttributes(html).filter((attributes) =>
    attributes.class?.split(/\s+/).includes('resource-card'),
  );

  assert.deepEqual(
    resourceAnchors.map(({ href }) => href),
    learningResources.map(({ href }) => href),
  );

  for (const attributes of resourceAnchors) {
    assert.equal(attributes.target, '_blank');
    assert.deepEqual(new Set(attributes.rel.split(/\s+/)), new Set(['noopener', 'noreferrer']));
  }
});

test('빌드 HTML은 /learn/ canonical과 글로벌 진입점 두 곳을 가진다', async () => {
  const html = await readFile(builtHtml, 'utf8');
  assert.match(html, /<link rel="canonical" href="https:\/\/kylechoi\.com\/learn\/">/);

  const learningEntries = anchorAttributes(html).filter(({ href }) => href === '/learn/');
  assert.equal(learningEntries.length, 2);
});
