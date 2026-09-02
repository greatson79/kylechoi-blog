import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import test from 'node:test';

// ── 왜 Playwright인가 (경량 대안 검토 근거) ──────────────────────────────
// 이 저장소의 기존 테스트(test/learning-room-built.test.mjs 등)는 빌드된 정적
// HTML 문자열을 정규식으로 대조한다 — JS 실행도, CSS 계산도 필요 없다.
// 이 테스트는 다르다: 드롭다운은 click/Escape/hover 상태에 따라 인라인 스타일이
// JS로 쓰이고, aria-expanded와 실제 표시(getComputedStyle)가 "매 순간 일치"해야
// 한다는 것 자체가 계약이다(판정_내비_Escape잔류_2026-09-02). jsdom은 실제 CSS
// 캐스케이드·`:hover` 의사클래스 매칭·레이아웃을 구현하지 않아(공식 미지원) 이
// 계약을 검증할 수 없다 — 오탐 없이 검증하려면 실제 레이아웃 엔진이 필수다.
// Playwright는 rules/web/testing.md·rules/typescript/testing.md가 지정한 이
// 조직의 표준 E2E 프레임워크이기도 하다. 브라우저 바이너리는 이 세션에서 이미
// 로컬에 캐시돼 있어(~/Library/Caches/ms-playwright) 반복 실행 비용은 낮다.
// ─────────────────────────────────────────────────────────────────────

const repoRoot = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const PORT = Number(process.env.NAV_TEST_PORT || 4322);
const BASE = `http://localhost:${PORT}`;

async function waitForServer(url, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // 아직 안 뜸 — 재시도
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`preview server did not become ready at ${url} within ${timeoutMs}ms`);
}

function startPreviewServer() {
  const child = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
    cwd: repoRoot,
    stdio: 'ignore',
  });
  return child;
}

async function runDropdownSequence(chromium) {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });

    const wrap = page.locator('.has-dropdown').first();
    const trigger = wrap.locator('.nav-trigger').first();
    const panel = wrap.locator('.dropdown-panel').first();

    const steps = [];
    async function snapshot(label) {
      const display = await panel.evaluate((n) => getComputedStyle(n).display);
      const visible = display !== 'none';
      const aria = await trigger.getAttribute('aria-expanded');
      steps.push({ label, display, aria, consistent: (aria === 'true') === visible });
    }

    const box = await trigger.boundingBox();
    const moveToTrigger = async () => {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.waitForTimeout(60);
    };
    const moveAway = async () => {
      await page.mouse.move(5, 5);
      await page.waitForTimeout(60);
    };

    await snapshot('0-initial');
    await moveToTrigger();
    await trigger.click();
    await page.waitForTimeout(80);
    await snapshot('1-click-open');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(80);
    await snapshot('2-escape-pointer-still-over');
    // ★재현 핵심(노아 R2 major#1): 포인터가 트리거 위에 남은 채 재click
    await trigger.click();
    await page.waitForTimeout(80);
    await snapshot('3-reclick-pointer-still-over');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(80);
    await snapshot('4-escape-again');
    await moveAway();
    await snapshot('5-mouseleave');
    await moveToTrigger();
    await snapshot('6-mouseenter-hover-open');
    await moveAway();
    await snapshot('7-mouseleave-again');

    return steps;
  } finally {
    await browser.close();
  }
}

test('AI 교육 드롭다운 — click→Escape→포인터유지→재click 전 단계에서 aria와 실제 표시가 일치한다', async (t) => {
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    t.skip('playwright devDependency가 설치돼 있지 않다 — npm install 후 재실행하라');
    return;
  }

  const server = startPreviewServer();
  try {
    await waitForServer(BASE + '/');
    const steps = await runDropdownSequence(chromium);

    const reclick = steps.find((s) => s.label === '3-reclick-pointer-still-over');
    assert.equal(
      reclick.display,
      'flex',
      `재click 후 패널이 표시돼야 한다 (open+suppress-hover 동시잔존 회귀) — 전체: ${JSON.stringify(steps)}`,
    );
    assert.equal(reclick.aria, 'true', `재click 후 aria-expanded=true여야 한다 — 전체: ${JSON.stringify(steps)}`);

    for (const step of steps) {
      assert.equal(
        step.consistent,
        true,
        `${step.label}: aria-expanded(${step.aria})와 실제 표시(display:${step.display})가 어긋난다`,
      );
    }
  } finally {
    server.kill('SIGTERM');
  }
});
