import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { learningResources } from '../src/data/learning-resources.mjs';

const expectedUrls = [
  'https://jinminlee.com/learn/prompt-input-guide/index.html',
  'https://jinminlee.com/learn/gemini-notebook-guide/index.html',
  'https://jinminlee.com/learn/chatgpt-claude-gemini-guide/index.html',
  'https://jinminlee.com/learn/ai-workflow-foundations',
  'https://jinminlee.com/learn/windows',
];

test('제공된 학습 링크 5건을 순서와 값 그대로 보존한다', () => {
  assert.deepEqual(learningResources.map(({ href }) => href), expectedUrls);
});

test('링크는 중복 없이 HTTPS와 허용 도메인만 사용한다', () => {
  assert.equal(new Set(expectedUrls).size, expectedUrls.length);

  for (const resource of learningResources) {
    const url = new URL(resource.href);
    assert.equal(url.protocol, 'https:');
    assert.equal(url.hostname, 'jinminlee.com');
    assert.ok(resource.title.length > 0);
    assert.ok(resource.description.length > 0);
  }
});

test('/learn/ 페이지는 카드 전체 외부 링크와 안전 속성을 제공한다', async () => {
  const source = await readFile(new URL('../src/pages/learn.astro', import.meta.url), 'utf8');
  assert.match(source, /learningResources\.map/);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /class="resource-grid"/);
});

test('학습 카드 제목은 한국어 단어 중간 줄바꿈을 막는다', async () => {
  const source = await readFile(new URL('../src/pages/learn.astro', import.meta.url), 'utf8');
  assert.match(source, /\.card-copy h3\s*\{[^}]*word-break:\s*keep-all;/s);
});

test('Header와 Footer가 /learn/ 진입점을 각각 한 번 제공한다', async () => {
  const header = await readFile(new URL('../src/components/nav/Header.astro', import.meta.url), 'utf8');
  const footer = await readFile(new URL('../src/components/nav/Footer.astro', import.meta.url), 'utf8');
  assert.equal((header.match(/href: '\/learn\/'/g) ?? []).length, 1);
  assert.equal((footer.match(/href: '\/learn\/'/g) ?? []).length, 1);
  assert.match(header, /label: 'Learning'/);
  assert.match(footer, /label: 'Learning'/);
});

test('Header는 Learning을 Curriculum 바로 앞에 배치한다', async () => {
  const header = await readFile(new URL('../src/components/nav/Header.astro', import.meta.url), 'utf8');
  const uncommentedHeader = header.replace(/\/\*[\s\S]*?\*\//g, '');
  const linksBlock = uncommentedHeader.match(
    /^[ \t]*const[ \t]+links[ \t]*=[ \t]*\[([\s\S]*?)^[ \t]*\];[ \t]*(?:\/\/.*)?$/m,
  )?.[1];

  assert.ok(linksBlock);

  const links = [...linksBlock.matchAll(
    /^[ \t]*\{[ \t]*href:[ \t]*'([^']+)'[ \t]*,[ \t]*label:[ \t]*'([^']+)'(?:[ \t]*,[^}\r\n]*)?[ \t]*\},?[ \t]*(?:\/\/.*)?$/gm,
  )].map(([, href, label]) => ({ href, label }));
  const learningIndex = links.findIndex(({ href, label }) => href === '/learn/' && label === 'Learning');
  const curriculumIndex = links.findIndex(
    ({ href, label }) => href === '/curriculum/' && label === 'Curriculum',
  );

  assert.notEqual(learningIndex, -1);
  assert.notEqual(curriculumIndex, -1);
  assert.equal(learningIndex + 1, curriculumIndex);
});

test('Learning Room H1은 다른 섹션과 같은 제목 크기 토큰을 사용한다', async () => {
  const source = await readFile(new URL('../src/pages/learn.astro', import.meta.url), 'utf8');
  const styles = [...source.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/g)]
    .map(([, css]) => css)
    .join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const h1Blocks = [...styles.matchAll(
    /(?:(?<=^)|(?<=[{}]))[ \t\r\n]*h1[ \t\r\n]*\{([^{}]*)\}/g,
  )];

  assert.equal(h1Blocks.length, 1);

  const fontSizes = [...h1Blocks[0][1].matchAll(/(?:^|;)[ \t\r\n]*font-size[ \t]*:[ \t]*([^;]+);/g)]
    .map(([, value]) => value.trim());

  assert.deepEqual(fontSizes, ['var(--text-hero)']);
});
