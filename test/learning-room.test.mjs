import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

import { learningResources } from '../src/data/learning-resources.mjs';

const expectedUrls = [
  'https://jinminlee.com/learn/prompt-input-guide/index.html',
  'https://jinminlee.com/learn/gemini-notebook-guide/index.html',
  'https://jinminlee.com/learn/chatgpt-claude-gemini-guide/index.html',
  'https://jinminlee.com/learn/ai-workflow-foundations',
  'https://jinminlee.com/learn/windows',
];

function staticNavigationLinks(source) {
  const declarations = [...source.matchAll(
    /^\s*const\s+links\s*=\s*(\[[\s\S]*?^\s*\]);\s*(?:\/\/.*)?$/gm,
  )];
  assert.equal(declarations.length, 1, 'links 배열 리터럴 선언은 정확히 하나여야 한다');
  const initializer = declarations[0][1];
  assert.doesNotMatch(
    initializer,
    /(?:^|[[{,])\s*\.\.\./m,
    'links 배열의 spread 항목은 정적으로 완전 검증할 수 없다',
  );

  let links;
  assert.doesNotThrow(() => {
    links = runInNewContext(`(${initializer})`, Object.create(null), {
      timeout: 100,
      contextCodeGeneration: { strings: false, wasm: false },
    });
  }, 'links 배열의 모든 항목은 독립적으로 정적 평가할 수 있어야 한다');

  assert.ok(Array.isArray(links));
  for (const [index, link] of links.entries()) {
    assert.ok(link && typeof link === 'object' && !Array.isArray(link), `links[${index}]는 객체여야 한다`);
    assert.equal(typeof link.href, 'string', `links[${index}].href는 정적 문자열이어야 한다`);
    assert.equal(typeof link.label, 'string', `links[${index}].label은 정적 문자열이어야 한다`);
  }

  return links;
}

function fontSizeValues(declarations) {
  return [...declarations.matchAll(/(?:^|;)\s*font-size\s*:\s*([^;]*?)(?=;|$)/gi)]
    .map(([, value]) => value.trim());
}

function applicableH1FontSizes(source) {
  const h1Tags = [...source.matchAll(/<h1\b([^>]*)>/gi)];
  assert.equal(h1Tags.length, 1, 'Learning Room에는 H1이 정확히 하나여야 한다');

  const attributes = h1Tags[0][1];
  assert.doesNotMatch(attributes, /\bclass:list\s*=/, 'H1의 동적 class:list는 정적으로 검증할 수 없다');
  const classValue = attributes.match(/\bclass\s*=\s*(["'])(.*?)\1/s)?.[2] ?? '';
  const id = attributes.match(/\bid\s*=\s*(["'])(.*?)\1/s)?.[2] ?? '';
  const classes = classValue.split(/\s+/).filter(Boolean);
  const styles = [...source.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
    .map(([, css]) => css)
    .join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const applicable = [];

  for (const [, rawSelectorList, body] of styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selectorList = rawSelectorList.trim();
    const targetsTag = /(?:^|[,\s>+~])h1(?=$|[,\s.#:[>+~])/i.test(selectorList);
    const targetsClass = classes.some((className) => selectorList.includes(`.${className}`));
    const targetsId = id !== '' && selectorList.includes(`#${id}`);
    if (targetsTag || targetsClass || targetsId) {
      for (const value of fontSizeValues(body)) applicable.push({ selectorList, value });
    }
  }

  const inlineStyle = attributes.match(/\bstyle\s*=\s*(["'])(.*?)\1/s)?.[2];
  if (inlineStyle) {
    for (const value of fontSizeValues(inlineStyle)) applicable.push({ selectorList: '<inline>', value });
  }

  return applicable;
}

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
  const links = staticNavigationLinks(header);
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
  const fontSizes = applicableH1FontSizes(source);

  assert.deepEqual(fontSizes, [{ selectorList: 'h1', value: 'var(--text-hero)' }]);
});
