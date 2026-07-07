---
title: "Fable 5 돌아왔다 — 수출통제 해제·재개통 경위와 Claude 5 패밀리 라인업"
description: "19일간 중단됐던 Claude Fable 5가 7월 1일 새 사이버보안 분류기와 함께 재개통됐다. Sonnet 5·Fable 5·Mythos 5 — Claude 5 패밀리 세 모델의 티어·가격·용도를 한눈에 정리했다."
category: AI트렌드
pubDate: 2026-07-02
updatedDate: 2026-07-02
author: Kyle Choi
tags: [AI트렌드, Claude, Fable5, Sonnet5, Anthropic, 수출통제, 실전팁]
draft: false
disclaimerRequired: false
factChecked: true
heroImage:
  src: /images/ai-trend/hero_fable5_lineup_0702.webp
  alt: Claude 5 패밀리 모델 라인업 — Sonnet 5, Fable 5, Mythos 5
slug: 2026-07-02-fable-5-redeployed
sourcePath: output/DiA/크리에이티브본부/AI트렌드/AI트렌드_아티클_Fable5_0702_draft.md
---

Claude Fable 5가 19일 만에 돌아왔다. 6월 12일 미국 상무부 수출통제 지시로 전 세계 서비스가 전면 중단됐고, 6월 30일 통제가 해제된 뒤 7월 1일부터 재개통됐다. 오늘 아침 Sonnet 5 아티클에 이어, 이번 글에서는 Fable 5 재개통 경위와 Claude 5 패밀리(Sonnet 5·Fable 5·Mythos 5) 라인업을 함께 정리한다.

---

## 출시에서 중단까지

Fable 5는 6월 9일에 처음 공개됐다. 모델 ID는 `claude-fable-5`. Anthropic이 공개 출시한 모델 가운데 처음으로 Mythos 계층에 속한 모델이다. Opus보다 상위 티어이고, 같은 날 초청 전용 모델인 `claude-mythos-5`(Project Glasswing 한정)도 함께 발표됐다. 공식 API 가격은 입력 $10/M 토큰, 출력 $50/M 토큰이었고(Anthropic Pricing Docs 기준·출처표 참조), Pro·Max·Team·Enterprise 사용자와 API(AWS, Google Cloud, Microsoft Foundry)에서 쓸 수 있었다.

문제는 출시 사흘 만에 터졌다. Amazon 연구자들이 Fable 5의 안전장치를 우회하는 방법을 발견했고, 소프트웨어 취약점 식별과 익스플로잇 코드 생성 사례까지 확인됐다. 미국 상무부는 6월 12일 수출통제를 지시했고, Anthropic은 Fable 5와 Mythos 5를 전 세계 모든 사용자 대상으로 동시 중단했다. 중단 기간은 결국 19일이 됐다.

---

## 어떻게 돌아왔나

6월 30일 미국 상무부가 수출통제를 해제했고, Anthropic은 다음 날인 7월 1일 재개통을 단행했다. 재개통 채널은 Claude Platform, Claude.ai, Claude Code, Claude Cowork, API다.

핵심 변화는 새 사이버보안 분류기 추가다(Anthropic 재개통 공식 발표 기준). 중단을 불러온 우회 기법을 99% 이상 차단하도록 설계됐고, 분류기가 위험 요청으로 판단하면 Opus 4.8으로 자동 폴백된다. 다만 부작용도 있다. 정상적인 코딩이나 디버깅 요청이 false positive로 걸리는 사례가 있을 수 있고, 당분간은 멀쩡한 요청이 막히는 경우를 감수해야 한다.

Mythos 5는 상황이 다르다. 미국 내 승인된 기관(Project Glasswing)만 재개통됐고, 사이버보안 분류기 적용 여부는 Anthropic이 공개한 정보가 없다.

![Fable 5 재개통 — 19일 만에 봉인 해제](/images/ai-trend/fable5_redeployment_0702.webp)
*19일간의 수출통제 중단과 재개통 경위*

---

## 지금 쓸 수 있는가

Anthropic 공식 공지 원문은 이렇다.

> "7월 7일까지 플랜의 주간 사용 한도 중 최대 50%를 Fable 5에 사용할 수 있습니다. 한도에 도달하면 사용 크레딧으로 Fable 5를 계속 이용할 수 있습니다. **Fable 5는 Opus 4.8보다 사용량을 더 빠르게 소모합니다.**"
> — Anthropic 공식 공지

![Anthropic 공식 공지 — Fable 5가 돌아왔습니다](/images/ai-trend/fable5_official_notice_0702.png)
*출처: Anthropic 공식 공지 화면 (2026-07-02 확인)*

여기서 실무적으로 중요한 포인트가 하나 있다. "한도 도달 후 서비스 중단"이 아니라 **사용 크레딧으로 계속 이용 가능**하다. 단, Fable 5는 Opus 4.8보다 사용량을 더 빠르게 소모하기 때문에 예상보다 빨리 한도에 도달할 수 있다. 사용량 추적은 평소보다 더 자주 확인하는 게 낫다.

| 대상 | 이용 조건 |
|------|-----------|
| Pro·Max·Team·일부 Enterprise | ~7월 7일: 주간 한도 최대 50%를 Fable 5에 사용 가능 |
| 한도 도달 시 | 서비스 중단 아님 — 사용 크레딧으로 Fable 5 계속 이용 |
| 소모율 주의 | Fable 5는 Opus 4.8보다 사용량 더 빠르게 소모 |
| Enterprise·API | 재개 예정 (as quickly as possible·현재 미재개) |
| Mythos 5 | 미국 내 승인된 조직 한정 재개통 |

---

## Claude 5 패밀리 라인업 — Sonnet 5, Fable 5, 그리고 Mythos 5

Fable 5 재개통을 계기로 Claude 5 패밀리 전체 구도를 한 번 정리해 둘 필요가 있다. 세 모델이 같은 세대지만 계층도, 가격도, 용도도 다르다.

| 모델 | 계층 | 입력 | 출력 | 용도 포지션 |
|------|------|------|------|------------|
| **Sonnet 5** | Sonnet | $3/M 토큰 | $15/M 토큰 | 일상·코딩·분석의 주력 실무 모델 |
| **Fable 5** | Mythos | $10/M 토큰 | $50/M 토큰 | 복잡한 추론·대규모 작업·Opus 상위 |
| **Mythos 5** | Mythos (승인된 조직 한정) | 비공개 | 비공개 | 미국 내 Project Glasswing 승인 기관만 |

Sonnet 5는 Anthropic이 "주력 실무 모델"로 포지셔닝한다. 가격이 합리적이고 대부분의 코딩·분석 작업을 커버한다. 현재 프로모션 기간(~2026년 8월 31일) 동안 입력 $2/M, 출력 $10/M으로 더 저렴하게 이용할 수 있다. Sonnet 5 출시 경위와 상세 스펙은 [오늘 아침 발행한 아티클](/ai-trend/2026-07-02-ai-trends-agent-infra/)에서 다뤘다.

Fable 5는 그 위 계층이다. 가격은 Sonnet 5 리스트 단가의 약 3.3배($10÷$3, $50÷$15)이고, 기존 Opus 4.8보다도 상위 티어다. Anthropic의 공식 포지셔닝은 "더 적은 중간 확인으로 가장 어려운 과제를 해결"이다 — 복잡한 추론, 대규모 마이그레이션, 심층 분석처럼 모델에 오래 맡겨두는 작업이 주된 적용처다. Mythos 5는 공개 접근이 없다.

![Claude 5 패밀리 티어 포지셔닝 — Sonnet 5·Fable 5·Mythos 5](/images/ai-trend/fable5_tier_positioning_0702.webp)
*Sonnet 5($3/$15) · Fable 5($10/$50) · Mythos 5(승인된 조직 한정)*

세 모델의 공통점은 "Claude 5 세대"라는 것뿐이다. 역할이 겹치지 않고, 출시 시점도 다르다. Fable 5가 돌아온 것은 주력 모델 Sonnet 5와는 별개 사안이며, 각자의 포지션에서 작동한다.

---

## 지금 당장 할 것 한 가지

Claude.ai 또는 Claude Code를 열고, 계정 플랜을 확인한 다음 Fable 5에 직접 접근해 보라. Pro·Max·Team이라면 7월 7일 전까지 주간 한도 내에서(사용량 소모 주의) Mythos 계층 모델을 써볼 수 있는 유일한 기간이다.

---

## 참고 출처

| 내용 | 출처 |
|------|------|
| Claude Fable 5 최초 출시·공식 가격 | [Anthropic News](https://www.anthropic.com/news/claude-fable-5-mythos-5) |
| Fable 5 API 가격 (공식) | [Anthropic Pricing Docs](https://docs.anthropic.com/en/docs/about-claude/pricing) |
| 이용 중단 성명 | [Anthropic News](https://www.anthropic.com/news/fable-mythos-access) |
| 재개통 공식 발표 | [Anthropic News](https://www.anthropic.com/news/redeploying-fable-5) |
| TechCrunch 출시 보도 | [TechCrunch](https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/) |
| CNBC 수출통제 해제 보도 | [CNBC](https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html) |
| The Hacker News 재개통 보도 | [The Hacker News](https://thehackernews.com/2026/07/anthropic-restores-claude-fable-5-after/) |
