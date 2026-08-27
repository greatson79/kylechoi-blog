# Learning Navigation and Heading Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the global `Learning` navigation link directly before `Curriculum` and make the `/learn/` H1 use the same heading-size token as other section pages.

**Architecture:** Keep navigation ownership in `Header.astro` and typography ownership in `learn.astro`; do not introduce new components or tokens. Add source-contract regression tests to the existing Learning Room test file, then verify the generated HTML and rendered layout through the existing Astro build.

**Tech Stack:** Astro 7, CSS custom properties, Node.js built-in test runner, npm.

---

## File map

- Modify `test/learning-room.test.mjs`: assert the required navigation adjacency and H1 token.
- Modify `src/components/nav/Header.astro`: reorder one existing link object.
- Modify `src/pages/learn.astro`: replace the oversized local H1 clamp with the shared token.
- No other production files change.

### Task 1: Lock the two requested behaviors with failing tests

**Files:**
- Modify: `test/learning-room.test.mjs`

- [ ] **Step 1: Add the navigation adjacency test**

```js
test('Header는 Learning을 Curriculum 바로 앞에 배치한다', async () => {
  const header = await readFile(new URL('../src/components/nav/Header.astro', import.meta.url), 'utf8');
  const labels = [...header.matchAll(/label: '([^']+)'/g)].map(([, label]) => label);
  const learningIndex = labels.indexOf('Learning');
  const curriculumIndex = labels.indexOf('Curriculum');

  assert.notEqual(learningIndex, -1);
  assert.notEqual(curriculumIndex, -1);
  assert.equal(learningIndex + 1, curriculumIndex);
});
```

- [ ] **Step 2: Add the shared heading-token test**

```js
test('Learning Room H1은 다른 섹션과 같은 제목 크기 토큰을 사용한다', async () => {
  const source = await readFile(new URL('../src/pages/learn.astro', import.meta.url), 'utf8');
  assert.match(source, /h1\s*\{[^}]*font-size:\s*var\(--text-hero\);/s);
  assert.doesNotMatch(source, /h1\s*\{[^}]*font-size:\s*clamp\(/s);
});
```

- [ ] **Step 3: Run the source tests and verify RED**

Run:

```bash
node --test test/learning-room.test.mjs
```

Expected: the two new tests fail; the first reports non-adjacent indices and the second reports no `var(--text-hero)` match. Existing tests remain passing.

### Task 2: Apply the minimum production changes

**Files:**
- Modify: `src/components/nav/Header.astro`
- Modify: `src/pages/learn.astro`

- [ ] **Step 1: Move the existing Learning entry**

Change only the order of the existing object so the relevant sequence is:

```js
  { href: '/ai-trend/', label: 'AI Trend' },
  { href: '/insight/', label: 'Insight' },
  { href: '/learn/', label: 'Learning' },
  { href: '/curriculum/', label: 'Curriculum' },
```

- [ ] **Step 2: Replace the oversized H1 font size**

Keep every other declaration unchanged:

```css
  h1 {
    margin-top: 0.9rem;
    font-size: var(--text-hero);
    line-height: 0.95;
    letter-spacing: -0.065em;
  }
```

- [ ] **Step 3: Run the source tests and verify GREEN**

Run:

```bash
node --test test/learning-room.test.mjs
```

Expected: all Learning Room source tests pass with zero failures.

- [ ] **Step 4: Commit the tested implementation**

```bash
git add test/learning-room.test.mjs src/components/nav/Header.astro src/pages/learn.astro
git commit -m "fix: align Learning navigation and heading"
```

### Task 3: Build and verify the rendered result

**Files:**
- Verify: `dist/learn/index.html`

- [ ] **Step 1: Run the full Learning Room build contract**

Run:

```bash
npm run test:learning-room
```

Expected: Astro build and sitemap contract pass; both Learning Room test files report zero failures.

- [ ] **Step 2: Verify generated navigation order and single H1**

Read `dist/learn/index.html`, extract header navigation anchor labels, and assert `Learning` immediately precedes `Curriculum`. Assert the page has one H1 containing `AI 학습자료실`.

- [ ] **Step 3: Perform visual verification at desktop and mobile widths**

Render `/learn/` at 1280×720 and 390×844. Confirm the H1 matches the visual scale of other section titles and neither the navigation nor heading clips or overlaps.

- [ ] **Step 4: Verify scope and working tree**

Run:

```bash
git diff --check HEAD~1..HEAD
git status --short
```

Expected: no whitespace errors and no uncommitted production changes.
