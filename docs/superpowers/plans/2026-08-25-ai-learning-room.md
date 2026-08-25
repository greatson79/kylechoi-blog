# AI Learning Room Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Kyle Choi Notes에 `/learn/` 학습자료실을 만들고 제공된 외부 학습 링크 5건을 반응형 카드로 배치한다.

**Architecture:** 외부 링크를 `src/data/learning-resources.mjs` 단일 정본으로 두고 Astro 페이지가 이를 렌더한다. 글로벌 Header와 Footer에는 동일한 `/learn/` 진입점을 추가하며, Node 내장 테스트가 데이터·배선·보안 속성을 정적으로 검증한다.

**Tech Stack:** Astro 7, JavaScript ES modules, scoped Astro CSS, Node `node:test`, Playwright CLI

---

## File map

- Create `src/data/learning-resources.mjs`: 제공된 링크 5건의 유일한 코드 정본.
- Create `src/pages/learn.astro`: 히어로·카드 그리드·외부 링크 안내와 반응형 스타일.
- Modify `src/components/nav/Header.astro`: 글로벌 메뉴에 `Learning` 추가.
- Modify `src/components/nav/Footer.astro`: 푸터 메뉴에 `Learning` 추가.
- Create `test/learning-room.test.mjs`: 링크 무결성·중복·도메인·페이지 배선 계약.
- Create `test/learning-room-built.test.mjs`: 빌드된 DOM의 링크·보안 속성·canonical·글로벌 진입점 계약.
- Modify `package.json`: 학습자료실 전용 테스트 명령 추가.

### Task 1: Lock the resource data contract

**Files:**
- Create: `test/learning-room.test.mjs`
- Create: `src/data/learning-resources.mjs`

- [ ] **Step 1: Write the failing data tests**

```js
import assert from 'node:assert/strict';
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
```

- [ ] **Step 2: Run the test to verify RED**

Run: `node --test test/learning-room.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `learning-resources.mjs`.

- [ ] **Step 3: Add the five resources**

```js
export const learningResources = Object.freeze([
  { category: 'Prompt', title: '프롬프트 입력 활용 가이드', description: 'AI에게 요청을 전달하는 프롬프트 입력의 기본을 살펴봅니다.', href: 'https://jinminlee.com/learn/prompt-input-guide/index.html' },
  { category: 'Notebook', title: 'Gemini Notebook 학습 가이드', description: 'Gemini Notebook을 학습과 자료 정리에 활용하는 방법을 살펴봅니다.', href: 'https://jinminlee.com/learn/gemini-notebook-guide/index.html' },
  { category: 'AI Tools', title: 'ChatGPT·Claude·Gemini 실전 사용 가이드', description: '대표 AI 도구 세 가지를 실제 사용 맥락에서 살펴봅니다.', href: 'https://jinminlee.com/learn/chatgpt-claude-gemini-guide/index.html' },
  { category: 'Workflow', title: 'AI 활용 실전 학습 가이드', description: 'AI 활용을 반복 가능한 업무 흐름으로 연결하는 기초를 살펴봅니다.', href: 'https://jinminlee.com/learn/ai-workflow-foundations' },
  { category: 'Windows', title: 'Windows AI 도구 실전 Lab', description: 'Windows 환경에서 AI 도구를 활용하는 실습 자료를 살펴봅니다.', href: 'https://jinminlee.com/learn/windows' },
]);
```

- [ ] **Step 4: Run the data tests to verify GREEN**

Run: `node --test test/learning-room.test.mjs`

Expected: 2 tests, 2 pass, 0 fail.

### Task 2: Build the `/learn/` page

**Files:**
- Create: `src/pages/learn.astro`
- Modify: `test/learning-room.test.mjs`

- [ ] **Step 1: Add a failing source contract test**

```js
import { readFile } from 'node:fs/promises';

test('/learn/ 페이지는 카드 전체 외부 링크와 안전 속성을 제공한다', async () => {
  const source = await readFile(new URL('../src/pages/learn.astro', import.meta.url), 'utf8');
  assert.match(source, /learningResources\.map/);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /class="resource-grid"/);
});
```

- [ ] **Step 2: Run the test to verify RED**

Run: `node --test test/learning-room.test.mjs`

Expected: FAIL with `ENOENT` for `src/pages/learn.astro`.

- [ ] **Step 3: Implement the page**

Create an Astro page that imports `BaseLayout`, `Header`, `Footer`, and `learningResources`; renders a semantic hero and an ordered five-card grid; places `target="_blank" rel="noopener noreferrer"` on each card; and uses only existing global tokens. CSS must switch from one column to two at `min-width: 768px`, include `:focus-visible`, and avoid fixed heights.

- [ ] **Step 4: Run the source contract test**

Run: `node --test test/learning-room.test.mjs`

Expected: 3 tests, 3 pass, 0 fail.

### Task 3: Wire global navigation

**Files:**
- Modify: `src/components/nav/Header.astro`
- Modify: `src/components/nav/Footer.astro`
- Modify: `test/learning-room.test.mjs`

- [ ] **Step 1: Add a failing navigation test**

```js
test('Header와 Footer가 /learn/ 진입점을 각각 한 번 제공한다', async () => {
  const header = await readFile(new URL('../src/components/nav/Header.astro', import.meta.url), 'utf8');
  const footer = await readFile(new URL('../src/components/nav/Footer.astro', import.meta.url), 'utf8');
  assert.equal((header.match(/href: '\/learn\/'/g) ?? []).length, 1);
  assert.equal((footer.match(/href: '\/learn\/'/g) ?? []).length, 1);
  assert.match(header, /label: 'Learning'/);
  assert.match(footer, /label: 'Learning'/);
});
```

- [ ] **Step 2: Run the test to verify RED**

Run: `node --test test/learning-room.test.mjs`

Expected: FAIL because neither navigation contains `/learn/`.

- [ ] **Step 3: Add the navigation entries**

Add `{ href: '/learn/', label: 'Learning' }` after `Education` in Header and Footer. Preserve all existing hrefs, labels, order, and the Newsletter CTA.

- [ ] **Step 4: Run the navigation test to verify GREEN**

Run: `node --test test/learning-room.test.mjs`

Expected: 4 tests, 4 pass, 0 fail.

### Task 4: Integrate and render-verify

**Files:**
- Modify: `package.json`
- Verify: `dist/learn/index.html`

- [ ] **Step 1: Add the test script**

```json
"test:learning-room": "npm run build && node --test test/learning-room.test.mjs test/learning-room-built.test.mjs"
```

- [ ] **Step 2: Run all relevant deterministic gates**

Run: `npm run test:learning-room && npm run test:indexnow && npm run build`

Expected: learning-room source 4건+build DOM 2건 pass; indexnow 5/5 pass; Astro build completes and emits `/learn/index.html`; sitemap contract PASS.

- [ ] **Step 3: Inspect built link and navigation contracts**

Run: `rg -o 'https://jinminlee\.com/learn[^"<]+' dist/learn/index.html | sort -u`

Expected: exactly the five approved URLs.

- [ ] **Step 4: Render at three viewports**

Use Playwright CLI against `file://.../dist/learn/index.html` where supported; otherwise run exactly one scoped Astro preview server. Capture 375×812, 768×1024, and 1440×1000 screenshots. Verify no horizontal overflow, no clipped text, visible focus affordance, one-column mobile layout, and two-column tablet/desktop layout.

- [ ] **Step 5: Verify each final anchor**

Read the built DOM and compare its five external href values byte-for-byte with `learningResources`. Request each URL and classify the response; do not treat an anti-bot shell as success.

- [ ] **Step 6: Review the final diff**

Run: `git diff --check && git status --short && git diff -- src/data/learning-resources.mjs src/pages/learn.astro src/components/nav/Header.astro src/components/nav/Footer.astro test/learning-room.test.mjs package.json`

Expected: only the six planned files plus the two plan documents are changed; no unrelated education drafts or generated artifacts are present.
