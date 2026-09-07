---
title: "Gemini 고급 — 대규모 지식망 오케스트레이션·No-Code 자동화"
description: "NotebookLM으로 내 소스만 근거로 답하는 지식망을 만들고, Gemini와 분업하며, Apps Script를 복붙으로 안전하게 자동화하는 법. WAVE Academy Gemini 고급 3단계."
category: 교육
pubDate: 2026-09-07
author: 디딤
tags: [교육, AI활용, Gemini, NotebookLM, AppsScript, WAVE Academy, 고급]
draft: true
factChecked: false
sourcePath: Notion/AI활용학습허브/Gemini고급3-지식망자동화
---

> 중급에서 Gems로 비서를 만들었습니다. 고급에서는 흩어진 자료를 **지식망(NotebookLM)**으로 묶어 근거 있는 답을 얻고, 단순 반복을 **코드 복붙(Apps Script)**으로 자동화합니다.
> 대상: 개인 무료 Gemini. 구조 — 개념 → 따라하기 → 복붙 프롬프트 → 사례 → 미션. ※ 2026년 6월 기준, 구글 공식 문서 근거.

## 3.1 NotebookLM 지식망(RAG) 구축 — 실전

**NotebookLM**은 내가 올린 **소스만을 근거로** 답·요약·연결을 만드는 'AI 연구 도우미'입니다(환각 적음). 모든 Workspace 플랜에 포함, 개인도 무료로 시작.

### 따라하기

1. **노트북 생성** → **소스 추가**: Docs·Slides·PDF·텍스트/마크다운·웹 URL·붙여넣기·공개 YouTube·오디오.
2. 업로드 후 뜨는 **'Notebook Guide'**의 **시작 질문**으로 탐색.
3. **질문(Chat)** → NotebookLM이 **추천 후속 질문** 제안 → 꼬리 물기.

### 소스 구성 팁 (공식)

- **주제·프로젝트별 노트북**: 관련 소스를 한곳에.
- **'everything 노트북'**: 매일 쓰는 일반 자료(조직 소개·핵심 문서)를 모은 상시 노트북.
- 최근 문서 10개를 한 노트북에 올려 질문하며 감 잡기.

### Studio 패널 — 자료를 다양한 형태로

상단 타일: **Audio Overview · Video Overview · Mind Map · Reports**. 생성물은 아래 목록에 쌓이고 멀티태스킹(오디오 들으며 마인드맵) 가능.

- **Audio Overview(듣는 자료)**: **'Customize'**로 초점 지정, 포맷 — **Deep Dive(기본 심층 대화)** / **The Brief(2분 미만 핵심)**.
- **Mind Map**: 구조 한눈에. **Reports**: 학습 가이드·요약.

### 복붙 프롬프트 (NotebookLM Chat)

```text
이 소스들에서 ___에 대한 핵심 주장과 서로 상충되는 부분을 정리하고, 각 주장에 출처(소스명)를 표시해줘.
```

## 3.2 하이브리드 오케스트레이션 (Gemini × NotebookLM)

핵심 원리: **근거는 NotebookLM, 가공·창작은 Gemini·Gems**. 최근 **'Notebooks in Gemini'**(Gemini 앱 안 노트북 + NotebookLM 동기화)로 통합 진행 중.

### 실전 흐름

1. NotebookLM에서 자료 근거로 **핵심·쟁점 정리**(출처 포함).
2. 복사 → Gemini(또는 전용 Gem)에 붙여 **기획서·초안 작성**.
3. 필요하면 NotebookLM으로 돌아가 **사실 재확인**.

> ⚠️ 통합 UI는 빠르게 바뀝니다. 내 화면 메뉴 기준으로 익히되, 변하지 않는 건 분업 원리입니다.

## 3.3 Apps Script 매크로 (비개발자용) — 안전 따라하기

**Apps Script**는 Sheets·Docs·Gmail 사이 단순 반복을 자동화합니다. 개인 계정 무료, 비개발자는 **검증된 코드를 복붙**.

### 따라하기

1. 자동화할 일을 한 문장으로: "특정 라벨 Gmail을 매일 시트에 한 줄 기록."
2. Gemini에 요청: "이걸 하는 Apps Script 코드 + 설치·실행 방법을 단계별로, 비개발자도 따라 하게."
3. 대상 파일에서 **확장 프로그램(Extensions) → Apps Script**.
4. 코드 붙여넣기 → 저장 → 실행 → **권한 승인 확인**.
5. **복사본**에서 테스트 → 잘 되면 **트리거(자동 실행)** 설정.

### 안전 수칙 (반드시)

- 출처가 분명한/직접 만든 코드만 실행.
- 권한 요청 화면을 꼼꼼히 확인.
- 중요한 데이터는 **복사본**으로 먼저 테스트.
- 코드에 비밀번호·키 금지. 모르는 코드 무작정 실행 금지.

> 💡 코드가 부담되면 **AppSheet**(노코드) 같은 대안도. 목표는 '반복 줄이기'.

## 활용 사례

- **연구·기획**: 자료 10개 → Audio Overview로 복습 → 핵심 정리 → Gemini 기획서.
- **학습**: 교재·논문 → Mind Map + 학습 가이드 + 퀴즈로 셀프 스터디.
- **반복 업무**: 특정 메일을 Apps Script로 시트에 자동 집계.

## 자주 막히는 점 & 해결

- "모른다"고 함 → 내용이 **소스에 없음**. 소스 추가/질문 범위 조정.
- 답이 두루뭉술 → 소스 주제별 정리, 질문 구체화(출처 요구).
- Apps Script 권한 오류 → 같은 계정·권한 승인 확인, 복사본 재시도.
- 통합 메뉴 안 보임 → NotebookLM·Gemini를 각각 쓰며 복사-붙여넣기로 연결.

## 실습 미션 ✍️

**미션 1 — 지식망**: 자료 3개 → ① 출처 표시 교차검증 ② Audio Overview(Customize) 1개.

**미션 2 — 분업 기획**: NotebookLM 근거 정리 → Gemini로 한 페이지 기획 초안.

**미션 3 — 안전한 자동화**: 반복 작업 정의 → Apps Script + 설치법 → **복사본 시트** 테스트.

> 한 줄 정리: 고급은 **NotebookLM 지식망(소스·Studio·Audio), Gemini와 분업, Apps Script 안전 자동화** 단계입니다. 다음 단계(심화)에서는 **릴레이 협업**과 **대시보드·웹 배포**.

ⓒ Wave AI Networks — Gemini 활용 학습 시리즈 (개인 무료 기준)
