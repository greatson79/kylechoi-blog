# kylechoi-blog

[kylechoi.com](https://kylechoi.com) — 개인 블로그. Astro로 만들고 Vercel에 올린다.

목회·교육 글과 시대분석·AI트렌드 글을 한 곳에서 낸다.

---

## 빠르게 시작

```bash
npm install
npm run dev          # 로컬 미리보기
npm run build        # 빌드 + 사이트맵 검사
```

| 명령 | 하는 일 |
|---|---|
| `npm run build` | Astro 빌드 후 `scripts/check-sitemap.mjs`로 사이트맵을 검사한다 |
| `npm run preview` | 빌드 결과를 로컬에서 확인한다 |
| `npm run check` | Astro 타입·콘텐츠 스키마를 검사한다 |
| `npm run digest` | 다이제스트를 생성한다 |
| `npm run indexnow` | IndexNow로 색인을 요청한다 (`npm run test:indexnow`로 테스트) |
| `npm run deploy:prod` | 프로덕션 배포 스크립트를 실행한다 |

## 글은 어디에 두나

```
src/content/
├── ministry/     목회·교육       18편
├── insight/      시대분석·AI트렌드 26편
└── ai-trend/     (아래 주의 참고)  1편
```

글 하나 = 마크다운 파일 하나. 파일명이 URL 슬러그가 된다.
`_`로 시작하는 파일은 로더가 건너뛴다 — 작업 중인 초안을 숨길 때 쓴다.

### 프런트매터

`src/content.config.ts`가 스키마를 강제한다. 어긋나면 빌드가 실패한다.

```yaml
---
title: 제목                      # 80자 이내
description: 요약                 # 160자 이내 · SEO meta description
pubDate: 2026-08-05
category: AI트렌드                # insight: 시대분석 | AI트렌드
                                 # ministry: ministry | 교육
draft: false                     # ★기본값 true
author: 디딤                      # 생략 시 기본값
tags: []
---
```

**선택 필드**

| 필드 | 쓰임 |
|---|---|
| `updatedDate` | 수정일 |
| `heroImage` | `{ src, alt }` — alt는 필수다 |
| `sourcePath` | 원본 산출물 경로. 어디서 온 글인지 추적한다 |
| `factChecked` | 검수 게이트 통과 표식 |
| `scripture` | 성경 본문 (ministry 전용) |
| `disclaimerRequired` · `notInvestmentAdvice` | 투자·시장을 다룰 때만 (insight 전용) |

### ★`draft`는 기본값이 `true`다

프런트매터에 `draft`를 안 쓰면 **그 글은 공개되지 않는다.** 승인 전에 실수로 나가는 것을 막으려고 그렇게 잡았다.

공개하려면 명시해야 한다.

```yaml
draft: false
```

글이 안 보이면 여기부터 확인한다.

## 배포

`vercel.json` 설정으로 Vercel이 배포한다. `main`에 푸시하면 나간다.

`.github/workflows/scheduled-publish.yml`이 예약 발행을 돌린다.
발행 시각이 걸린 글을 다루므로, **워크플로를 손대면 실제 발행이 멈출 수 있다.**

## 주의 — `ai-trend` 폴더는 컬렉션에 등록돼 있지 않다

`src/content/ai-trend/`에 파일이 1편 있으나, `src/content.config.ts`의 `collections`는
`ministry`와 `insight`만 내보낸다.

```ts
export const collections = { ministry, insight };
```

즉 **그 폴더의 글은 빌드에 포함되지 않는다.** AI트렌드 글은 `insight/`에 `category: AI트렌드`로 쓴다.

의도한 것인지 남은 것인지 확인되지 않았다. 정리하려면 파일을 `insight/`로 옮기거나
`content.config.ts`에 컬렉션을 추가한다.

## 저장소 이름

`dia-blog` → **`kylechoi-blog`** (2026-08-05 변경).

GitHub이 옛 주소를 리다이렉트하지만, 다른 곳에서 이 저장소를 참조한다면 새 이름으로 고쳐 둔다.
