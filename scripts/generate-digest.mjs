#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────
// 주간(격주) 뉴스레터 다이제스트 생성기 — Kyle Choi Notes
//
// 블로그 RSS(공개규칙·라우팅 이미 반영)를 소스로, 지정 기간의 새 글을 모아
// 이메일 클라이언트 호환 HTML 다이제스트 초안을 생성한다.
// → 주인님이 Stibee 편집기에 붙여넣고 예약발송(수동 게이트).
//
// 특징: 의존성 0(Node 18+ 내장 fetch/fs만), 서버 0, 순수 파일 생성.
//
// 사용법:
//   node scripts/generate-digest.mjs                 # 최근 14일(격주) 다이제스트
//   node scripts/generate-digest.mjs --days 7        # 최근 7일(주간)
//   node scripts/generate-digest.mjs --since 2026-06-17
//   node scripts/generate-digest.mjs --out /경로/파일.html
//   (RSS 소스: 기본 ../dist/rss.xml, 없으면 https://kylechoi.com/rss.xml 폴백)
// ─────────────────────────────────────────────────────────────────────────

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://kylechoi.com';
const BRAND = '#2f6fb2';        // 브랜드 블루(이메일용 hex — oklch 미지원 대비)
const INK = '#22252b';
const MUTED = '#5b6270';
const LINE = '#e6e8ec';
const DEFAULT_WINDOW_DAYS = 14; // 격주(무료 스타터 월 2회 한도에 맞춘 기본값)

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..', '..');       // Ai_works/
const localRss = resolve(scriptDir, '..', 'dist', 'rss.xml');

// ── 카테고리 표시명 ──────────────────────────────────────────
const CATEGORY_LABEL = {
  ministry: '목회·묵상',
  교육: '교육',
  시대분석: '시대분석',
  AI트렌드: 'AI트렌드',
};
// RSS category는 여러 개(첫 값=주 카테고리, 나머지=태그). 주 카테고리만 배지로.
const PRIMARY_CATEGORIES = new Set(Object.keys(CATEGORY_LABEL));

// ── CLI 인자 파싱 ────────────────────────────────────────────
function parseArgs(argv) {
  const args = { days: DEFAULT_WINDOW_DAYS, since: null, out: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--days') args.days = Number(argv[++i]);
    else if (a === '--since') args.since = argv[++i];
    else if (a === '--out') args.out = argv[++i];
  }
  return args;
}

// ── XML 엔티티 디코드 ────────────────────────────────────────
function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&'); // &amp; 는 반드시 마지막
}

function firstTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return m ? decodeEntities(m[1].trim()) : '';
}
function allTags(block, tag) {
  const out = [];
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'g');
  let m;
  while ((m = re.exec(block))) out.push(decodeEntities(m[1].trim()));
  return out;
}

// ── RSS 로드(로컬 우선, 라이브 폴백) ─────────────────────────
async function loadRss() {
  if (existsSync(localRss)) {
    return { xml: await readFile(localRss, 'utf-8'), source: `로컬 빌드(${localRss})` };
  }
  const url = `${SITE}/rss.xml`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`RSS 로드 실패: ${url} (HTTP ${res.status}). 먼저 'npm run build'를 실행하세요.`);
  return { xml: await res.text(), source: `라이브(${url})` };
}

// ── item 파싱 ────────────────────────────────────────────────
function parseItems(xml) {
  const blocks = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  return blocks.map((b) => {
    const cats = allTags(b, 'category');
    const primary = cats.find((c) => PRIMARY_CATEGORIES.has(c)) || cats[0] || '';
    return {
      title: firstTag(b, 'title'),
      link: firstTag(b, 'link'),
      description: firstTag(b, 'description'),
      pubDate: new Date(firstTag(b, 'pubDate')),
      category: primary,
    };
  });
}

// ── HTML escape(본문 값 주입용) ──────────────────────────────
function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const KO_DATE = (d) =>
  `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;

// ── 반응형 이메일 HTML 렌더(완전한 문서 + 뷰포트 + 미디어쿼리 + 유동 max-width) ──
// 전략: 인라인 스타일=기본값(스타일 태그 미지원 클라이언트 대비), <style> 미디어쿼리=모바일 향상,
//        컨테이너 width:100%+max-width:600px=고정폭 없이 유동 → 모바일 가로 넘침(잘림) 방지.
function renderDigest(items, { from, to }) {
  const FONT =
    "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Segoe UI', Roboto, sans-serif";
  const issueLabel = `${KO_DATE(from)} – ${KO_DATE(to)}`;

  const rows = items
    .map((it) => {
      const catLabel = CATEGORY_LABEL[it.category] || it.category || '';
      return `
          <tr><td style="padding:0 0 26px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
              <tr><td style="font:600 12px/1.2 ${FONT};letter-spacing:.04em;text-transform:uppercase;color:${BRAND};padding:0 0 6px;">${esc(catLabel)}</td></tr>
              <tr><td style="padding:0 0 6px;">
                <a href="${esc(it.link)}" class="ptitle" style="font:700 19px/1.4 ${FONT};color:${INK};text-decoration:none;">${esc(it.title)}</a>
              </td></tr>
              <tr><td style="font:400 13px/1.5 ${FONT};color:#9aa0ab;padding:0 0 10px;">${KO_DATE(it.pubDate)}</td></tr>
              <tr><td style="font:400 15px/1.7 ${FONT};color:${MUTED};padding:0 0 12px;">${esc(it.description)}</td></tr>
              <tr><td>
                <a href="${esc(it.link)}" style="font:600 14px/1 ${FONT};color:${BRAND};text-decoration:none;">글 읽기 →</a>
              </td></tr>
            </table>
          </td></tr>
          <tr><td style="border-top:1px solid ${LINE};padding:0 0 26px;"></td></tr>`;
    })
    .join('');

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="format-detection" content="telephone=no">
<title>Kyle Choi Notes 뉴스레터</title>
<style>
  body { margin:0; padding:0; background:#f5f6f8; -webkit-text-size-adjust:100%; }
  table { border-collapse:collapse; }
  img { border:0; line-height:100%; }
  a { text-decoration:none; }
  /* 모바일(≤620px): 유동폭 + 여백/폰트 축소 — 인라인 override 위해 !important */
  @media only screen and (max-width:620px) {
    .container { width:100% !important; max-width:100% !important; border-radius:0 !important; }
    .px { padding-left:20px !important; padding-right:20px !important; }
    .brand { font-size:20px !important; }
    .ptitle { font-size:18px !important; }
    .gutter { padding-left:8px !important; padding-right:8px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f5f6f8;">
<!-- Kyle Choi Notes 뉴스레터 다이제스트 (${issueLabel}) -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f6f8;width:100%;">
  <tr><td class="gutter" align="center" style="padding:24px 12px;">
    <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${LINE};border-radius:14px;">
      <tr><td class="px" style="padding:34px 40px 22px;border-bottom:1px solid ${LINE};">
        <div class="brand" style="font:800 22px/1.2 ${FONT};letter-spacing:-.02em;color:${INK};">Kyle Choi Notes</div>
        <div style="font:400 13px/1.4 ${FONT};color:${MUTED};padding-top:4px;">Faith · AI · Learning · 뉴스레터 다이제스트</div>
        <div style="font:600 13px/1.4 ${FONT};color:${BRAND};padding-top:10px;">${issueLabel}</div>
      </td></tr>
      <tr><td class="px" style="padding:28px 40px 4px;">
        <p style="font:400 15px/1.7 ${FONT};color:${MUTED};margin:0 0 24px;">지난 기간의 새 글을 모았습니다. 신앙·AI·배움에 관한 기록을 이메일로 받아보세요.</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
          ${rows}
        </table>
      </td></tr>
      <tr><td class="px" style="padding:8px 40px 34px;">
        <p style="font:400 12px/1.6 ${FONT};color:#9aa0ab;margin:0;">
          이 메일은 <a href="${SITE}/newsletter/" style="color:${BRAND};text-decoration:none;">Kyle Choi Notes 뉴스레터</a> 구독자에게 발송됩니다.<br>
          더 많은 글: <a href="${SITE}/" style="color:${BRAND};text-decoration:none;">kylechoi.com</a>
        </p>
        <!-- ※ 수신거부 링크는 Stibee가 발송 시 자동으로 하단에 추가합니다(법정 필수). -->
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

// ── 메인 ─────────────────────────────────────────────────────
async function main() {
  const args = parseArgs(process.argv.slice(2));

  const now = new Date();
  const cutoff = args.since
    ? new Date(args.since + 'T00:00:00Z')
    : new Date(now.getTime() - args.days * 24 * 60 * 60 * 1000);

  const { xml, source } = await loadRss();
  const all = parseItems(xml).filter((it) => !isNaN(it.pubDate));
  const items = all
    .filter((it) => it.pubDate >= cutoff)
    .sort((a, b) => b.pubDate - a.pubDate);

  const y = now.getFullYear();
  const mo = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const stamp = `${y}-${mo}-${d}`;
  const outPath =
    args.out ||
    join(repoRoot, 'output', 'DiA', '마케팅본부', '뉴스레터_다이제스트', `digest_${stamp}.html`);

  console.log(`\n📰 주간 다이제스트 생성기`);
  console.log(`   소스   : ${source}`);
  console.log(`   기간   : ${cutoff.toISOString().slice(0, 10)} ~ ${stamp} (${args.since ? 'since' : args.days + '일'})`);
  console.log(`   전체글 : ${all.length}개 / 기간내 : ${items.length}개`);

  if (items.length === 0) {
    console.log(`\n⚠️  기간 내 새 글이 없습니다. --days 를 늘리거나 --since 로 범위를 넓히세요.`);
    console.log(`   예) node scripts/generate-digest.mjs --days 30\n`);
    return;
  }

  const html = renderDigest(items, { from: cutoff, to: now });
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, 'utf-8');

  console.log(`\n✅ 생성 완료 (${items.length}개 글)`);
  items.forEach((it) => console.log(`   · [${CATEGORY_LABEL[it.category] || it.category}] ${it.title}`));
  console.log(`\n   파일: ${outPath}`);
  console.log(`\n다음 단계(주인님):`);
  console.log(`   1) 위 파일을 열어 내용 확인`);
  console.log(`   2) Stibee → 새 이메일 → [HTML 편집/코드] 모드에 이 파일 내용을 붙여넣기`);
  console.log(`   3) 제목 입력 → 예약발송(일요일 지정) → 발송\n`);
}

main().catch((err) => {
  console.error(`\n❌ 오류: ${err.message}\n`);
  process.exit(1);
});
