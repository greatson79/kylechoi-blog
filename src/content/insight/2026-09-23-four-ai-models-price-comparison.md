---
title: "토큰 단가 20배 차이, 가벼운 사무 일에선 결과가 비슷했다 — Claude Opus 5.5·GPT-6 Sol·Luna·Grok 4.7 비교"
description: "Claude Opus 5.5·GPT-6 Sol·Luna·Grok 4.7의 발표 내용과 사용 경로, 가격, 간단한 비교 실험을 살펴봅니다."
category: AI트렌드
pubDate: 2026-09-23
author: Kyle Choi
tags: ["AI트렌드", "생성형 AI", "모델 비교", "업무 자동화"]
draft: false
disclaimerRequired: false
factChecked: true
heroImage:
  src: /images/ai-trend/hero_ai-trend_0924_v2.png
  alt: "창가 나무 책상 위 유리 잉크병 네 개 — 남은 잉크 높이가 저마다 달라 네 회사가 서로 다른 폭으로 가격을 움직였음을 나타낸다"
---

회의록에서 항목을 뽑는 일, 강의 자료를 정리하는 일, 여러 파일을 고치는 일은 모두 AI에게 맡길 수 있지만 필요한 능력과 비용은 다릅니다. 9월 21일과 22일, xAI의 Grok 4.7과 Anthropic의 Claude Opus 5.5, OpenAI의 GPT-6 Sol·Luna가 잇달아 공개됐습니다. 네 모델을 살펴볼 때는 회사가 발표한 내용, 실제로 고를 수 있는 서비스 경로, 직접 같은 과제를 맡겨 본 결과를 구분할 필요가 있습니다.

## 1. 세 줄 요약

- Opus 5.5는 출력 속도와 캐시 비용, Sol은 코딩·사실성, Luna는 저렴한 반복 업무, Grok 4.7은 장시간 작업의 검증과 자기점검을 앞세웠습니다. 모두 각 사 발표 내용입니다.
- 문맥 창은 Opus 5.5 100만, Sol·Luna 각 105만, Grok 4.7 50만 토큰입니다. 긴 입력에 적용되는 요금 조건은 모델마다 다릅니다.
- 같은 사무 과제 세 개를 네 엔진에 넣은 실험에서는 12회 중 10회 답을 받았습니다. Grok Build 무료 한도 때문에 두 번 실패했으며, 이 결과로 모델 순위를 매길 수는 없습니다.

## 2. 네 엔진 비교

| 항목 | Claude Opus 5.5 | GPT-6 Sol | GPT-6 Luna | Grok 4.7 |
|---|---|---|---|---|
| 발표에서 내세운 변화 | 출력 30%+ 빠름, 정렬 개선, 캐시 비용 60%↓[^1] | 코딩·사실성 개선, 오류 약 절반. AutomationBench(xhigh)에서 Opus 5(max)를 그 비용의 9%로 앞섰다고 발표[^4] | 높은 추론 노력에서 GPT-5.6 Sol급 사실성에 약 1/100 비용으로 근접한다고 발표[^4] | 더 큰 기반 모델, 장시간 검증·자기점검, 문서·프레젠테이션 개선[^8] |
| 문맥 창 · 최대 출력 | 1M · 128K[^2] | 1.05M[^5] | 1.05M[^6] | 500K[^9] |
| 긴 입력 요금 | 1M 창까지 표준 단가[^3] | 입력 272K 초과: 전체 요청 입력·캐시 2배, 출력 1.5배[^7] | 입력 272K 초과: 전체 요청 입력·캐시 2배, 출력 1.5배[^7] | 200K 이상 $4/$12로 알려졌으나 공식 문서에서 확인하지 못함[^9] |
| 이용 경로 | Pro·Max·Team·Enterprise; Platform·AWS·GCP·Microsoft Foundry[^1] | ChatGPT Work·Codex·API; 일반 Chat 미제공[^4] | Work·Codex·API; Free·Go는 데스크톱 앱만, 일반 Chat 미제공[^4] | Grok Build(무료)·API(유료)·Cursor 등[^8] |
| 발표일 | 2026-09-22 | 2026-09-22 | 2026-09-22 | 2026-09-21 |
| API 가격 (입력/출력, 1M 토큰) | $4 / $20[^1] | $2 / $10[^4] | $0.10 / $0.50[^4] | $2 / $6[^8] |
| 한국어 언급 | 발표문에 없음[^1] | 발표문에 없음[^4] | 발표문에 없음[^4] | 발표문에 없음[^8] |

위 성능 설명과 비교 수치는 각 회사의 발표입니다. 서로 다른 평가 과제와 조건에서 나온 결과이므로 네 모델을 한 줄 순위로 읽을 수는 없습니다. 가격 행은 기본 API 입력·출력 단가만 나타냅니다. Opus 5.5의 토큰 단가 인하와 일반 작업 비용 주장은 아래에서 따로 구분합니다.

## 3. 모델과 서비스는 다르다

새 모델이 발표됐다고 내가 쓰는 화면에서 바로 선택할 수 있는 것은 아닙니다. GPT-6 Sol과 Luna는 일반 Chat 화면에는 아직 제공되지 않으며 ChatGPT Work, Codex, API 경로로 제공됩니다. Luna는 Free·Go에서도 데스크톱 앱으로 쓸 수 있습니다. 따라서 모델 이름뿐 아니라 계정 요금제와 작업 화면도 확인해야 합니다.[^4]

## 4. 토큰 단가 ≠ 결과 하나 얻는 비용

Opus 5.5의 두 가격 주장은 서로 다른 기준입니다. 입력·출력 단가는 Opus 5보다 20% 낮아졌습니다. 별도로 Anthropic은 기본 설정의 자체 시험에서 전형적인 작업 비용이 Opus 5보다 40% 낮았다고 발표했습니다. 앞은 토큰 가격표의 비교이고, 뒤는 캐시 효율과 토큰 사용량 등이 반영된 일반 작업 비용입니다. 두 수치를 같은 뜻으로 합쳐서는 안 됩니다.[^1]

긴 요청에서는 기본 단가만으로 비용을 예상하기 어렵습니다. Sol·Luna는 입력이 27만 2천 토큰을 넘으면 해당 요청 전체에 입력·캐시 단가 두 배, 출력 단가 1.5배가 적용됩니다. 반면 Anthropic은 Opus 5.5의 100만 토큰 문맥 창 전체에 표준 단가를 적용한다고 안내합니다. Grok은 20만 토큰 이상에서 입력·출력 $4/$12가 적용된다고 알려져 있지만, 공식 문서에서는 확인하지 못했습니다.[^3][^7][^9]

실제로 쓸 만한 답 하나를 얻는 비용에는 호출 단가 외에도 입력 길이와 캐시, 재시도, 결과를 사람이 고치는 수고가 영향을 줍니다. 그래서 간단한 과제를 네 엔진에 직접 맡겨 봤습니다. 같은 한국어 글 다듬기·자료 요약·표 만들기 프롬프트를 네 모델에 글자 그대로 입력해 총 12회 실행했습니다. 10회는 응답을 받았고, Grok 4.7은 무료 티어 한도에 걸려 두 번 실패하고 한 번 성공했습니다.

Sol은 low, Luna는 max로 실행했습니다. 이는 우리가 평소 쓰는 표준 설정이지, 두 모델의 최대 성능을 맞춘 대결은 아닙니다. 세 가지 가벼운 과제에서는 Sol과 Luna의 결과 차이가 거의 없었고, 표 만들기에서 두 모델이 마크다운 오른쪽 정렬을 자발적으로 붙인 정도가 눈에 띄었습니다. 과제마다 한 번만 실행했고 Grok은 한 번만 성공했으므로, 이 관찰은 순위가 아니라 작은 표본의 참고 결과입니다.

X에 올라온 사용기도 한 번의 경험이 전체 성능을 말해 주지는 않지만, 단가와 실제 결과를 함께 봐야 한다는 점을 보여줍니다. Every의 Dan Shipper는 Sol을 Codex의 새 일상 모델로 쓰기 시작했다고 적었습니다. 많은 일상 업무에서는 Astra에 충분히 가깝고 더 빠르며, GPT-5.6 Sol보다 50% 저렴하다는 평가입니다.

> “속보: OpenAI가 GPT-6 Sol을 막 공개했다. Codex에서 내 새 일상 주력 모델이 됐다. Astra만큼은 아니지만 일상 업무 대부분에는 충분히 가깝고, 더 빠르며 GPT-5.6 Sol보다 50% 저렴하다. Every에서 실제 하는 일로 Opus 5.5와 맞대결 시험을 했다.”
>
> “BREAKING: @OpenAI just dropped GPT-6 Sol. It's my new daily driver in Codex: not quite Astra, but close enough for much of my everyday work, faster, and 50% cheaper than 5.6 Sol. We tested it across the work we actually do at @every and ran it head to head versus Opus 5.5.”[^14]

CodeRabbit은 자기 코드 리뷰 파이프라인에서 Opus 5.5를 시험한 결과를 공개했습니다. 알려진 버그 패턴 80개에서 51 대 49, 더 어려운 사례 13개에서는 10 대 5를 잡았고, Cal.com의 재시도 횟수 경쟁 상태도 찾았다고 합니다. 동시에 토큰을 약 50% 더 썼고 기존 방식이 잡은 버그 9개를 놓쳤다고 밝혔습니다.

> “CodeRabbit의 리뷰 파이프라인에서 Opus 5.5를 시험했습니다. 알려진 버그 패턴 80개에서 기존 운영 방식의 49개보다 많은 51개를 잡았습니다. 더 어려운 사례 13개에서는 10 대 5였습니다. 프로덕션에서 놓친 Cal.com의 재시도 횟수 경쟁 상태도 발견했습니다. 다만 토큰을 약 50% 더 썼고 기존 방식이 잡은 버그 9개는 Opus 5.5가 놓쳤습니다.”
>
> “We ran Opus 5.5 through CodeRabbit's review pipeline. On 80 known bug patterns it caught 51 vs 49 for our production mix. On 13 harder cases, 10 vs 5. It found a retry-count race in Cal.com that production missed. The catch is ~50% more tokens, and 9 bugs our baseline caught that Opus 5.5 didn't.”[^15]

이는 CodeRabbit의 자체 파이프라인에서 나온 한 차례의 평가입니다. 더 많은 버그를 찾은 결과와 더 많은 토큰 사용, 놓친 사례를 함께 읽어야 합니다. 모델의 표시 단가만으로 작업당 비용이나 품질을 예측하기 어려운 이유입니다.

## 5. 업무별 먼저 시험할 후보

**실측 순위가 아니라 시작 제안이다.** 공식 용도 설명과 가격·문맥 정보, 위의 제한된 실험을 바탕으로 첫 시험 대상을 골랐습니다.

| 하려는 일 | 먼저 시험해 볼 후보 |
|---|---|
| 긴 글·문서 작업 | Opus 5.5 — 1M 문맥 창, 최대 출력 128K; Anthropic은 대부분의 작업에서 먼저 권하도록 안내[^2] |
| 비용을 아끼는 반복·대량 처리 | Luna — 요약·추출·범위가 좁은 코딩 등 집중형 고처리량 업무[^10] |
| 코딩·에이전틱 작업 | Sol — 복잡한 코딩과 에이전틱 워크플로용으로 안내됨[^10] |
| 무료로 먼저 써보기 | Grok Build — 무료지만 우리 실험에서는 한도에 걸려 3회 중 2회 실패 |
| 설교 준비·교회 행정·강의 자료 | 장문 원고와 자료 구조화는 Opus부터, 반복 행정 문서·회신 초안은 Luna부터 나눠 시험 |

설교나 강의처럼 자료가 길고 구조를 잡는 일이 많으면 Opus 5.5부터, 반복적인 행정 문서와 회신 초안은 저비용 Luna부터 시작해 볼 수 있습니다. 이는 해당 분야의 성능을 확인한 순위가 아니라, 업무 형태에 따른 첫 비교 제안입니다.

> **벤치마크 읽는 법.** 각 회사는 서로 다른 기준 모델·과제·추론 설정으로 결과를 발표합니다. 수치를 한 표에 놓아도 같은 조건의 맞대결이 되지는 않습니다. 지향점과 평가 조건을 함께 읽어야 합니다.

> **그래프 엔지니어링으로 고르기.** 모델 선택을 노드(모델·능력·업무·비용·근거)와 엣지(지원한다·필요하다·이 조건에서 확인됐다)로 나눠 보면, 세 가지가 섞이지 않습니다. **지원하는 기능**(공식 문서), **잘할 거라는 예상**(발표·사용기), **우리 업무에서 확인된 결과**(직접 시험). 「이 일을 이 모델에 맡긴다」는 연결은 세 번째가 채워진 뒤에 긋습니다.
>
> 입문 강좌: [그래프 엔지니어링 소개](https://kylechoi.com/education/2026-09-21-graph-engineering-intro/)

## 6. 독자 Q&A

### 지금 쓰는 모델을 바로 바꿔야 하나요?

새 모델이 나왔다는 이유만으로 바꿀 필요는 없습니다. 반복해서 맡기는 일 하나를 정하고, 현재 모델과 새 후보의 결과 품질·수정량·총비용을 비교해 보세요.

### Sol과 Luna 중 무엇부터 써볼까요?

복잡한 코딩이나 여러 단계를 잇는 에이전틱 작업은 Sol부터, 요약·정보 추출·범위가 정해진 반복 업무는 Luna부터 시작해 볼 수 있습니다. 세 가지 가벼운 사무 과제에서는 우리 실험의 결과가 거의 비슷했지만, 복잡한 코딩 성능을 비교한 실험은 아니었습니다.

### 무료로 먼저 써볼 모델은 있나요?

Grok Build는 무료로 시작할 수 있습니다. 다만 우리 실험에서는 세 번 중 한 번만 응답했고, 두 번은 무료 사용 한도에 걸렸습니다. Luna도 Free·Go 요금제에서 데스크톱 앱으로 이용할 수 있습니다.[^4][^8]

### 한국어 작업에는 어떤 모델이 더 좋나요?

네 모델의 발표문에는 한국어 품질 비교가 없습니다. 우리 실험도 일반적인 한국어 다듬기 한 과제뿐이라 한국어 우열을 말해 주지는 않습니다. 실제 문서 일부를 같은 조건으로 넣고 사실 오류와 사람이 고치는 양부터 비교해 보세요.

### 발표 벤치마크만 보고 가장 좋은 모델을 고를 수 있나요?

어렵습니다. 평가 과제와 비교 대상이 다르고, 결과는 사용 도구와 설정에도 영향을 받습니다. 발표 수치는 각 사가 무엇을 주장하는지 보여 주지만, 내 업무에서의 결과를 대신하지는 않습니다.

### 설교 준비·교회 행정·강의 자료에는 뭘 먼저 써볼까요?

긴 설교 원고를 자료와 함께 구조화하는 일은 큰 문맥과 장문 작업을 고려해 Opus 5.5부터, 반복적인 공지·회신·행정 문서 초안은 저비용 Luna부터 시작해 보세요. 강의 자료는 긴 원고를 엮을 때 Opus, 반복 요약과 항목 추출에는 Luna를 먼저 놓고, 같은 자료로 수정량과 정확성을 비교하는 방식이 좋습니다. 분야별 성능을 단정하는 권고가 아니라 시작 제안입니다.

## 7. 비교군

OpenAI는 Astra를 Sol·Luna의 상위 모델로 설명합니다.[^12] Anthropic은 대부분의 작업에서 Opus 5.5로 시작하고, 높은 추론 수준에서도 평가 기준에 못 미치거나 까다로운 장시간 작업이 필요하면 Fable 5.1을 고려하라고 안내합니다.[^2] Sonnet 5는 입력/출력 $2/$10의 비교 후보입니다.[^3] Gemini 3.8 Flash는 장시간 소프트웨어 엔지니어링과 에이전트 업무를 지향하며 검색 grounding과 코드 실행을 지원한다고 문서에 나옵니다.[^13]

## 8. 아직 알 수 없는 것

- Sol과 Luna가 일반 Chat 화면에 언제 들어올지는 발표되지 않았습니다.
- 나라별로 언제부터 쓸 수 있는지는 발표 자료에 없습니다.
- 네 모델의 한국어 품질을 같은 조건으로 비교한 공개 결과는 아직 없습니다.

## 9. 정리

새 모델 네 개는 한 줄 순위표보다 **서로 다른 일의 후보**로 읽는 편이 실용적입니다. 긴 문서는 Opus 5.5, 복잡한 코딩은 Sol, 반복 업무는 Luna, 무료로 먼저 맛보기는 Grok Build부터 시험해 보세요. 그리고 가격표의 토큰 단가가 아니라, **쓸 수 있는 결과 하나를 얻는 데 든 비용**으로 비교하세요.

[^1]: Anthropic, [Claude Opus 5.5 발표](https://www.anthropic.com/claude-opus-5-5) · 2026-09-23 18시경 KST 확인  
[^2]: Anthropic, [Models overview](https://platform.claude.com/docs/en/models/overview) · 2026-09-23 18시경 KST 확인  
[^3]: Anthropic, [API pricing](https://platform.claude.com/docs/en/about-claude/pricing) · 2026-09-23 18시경 KST 확인  
[^4]: OpenAI, [Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/) · 2026-09-23 18시경 KST 확인  
[^5]: OpenAI, [GPT-6 Sol model documentation](https://platform.openai.com/docs/models/gpt-6-sol) · 2026-09-23 18시경 KST 확인  
[^6]: OpenAI, [GPT-6 Luna model documentation](https://platform.openai.com/docs/models/gpt-6-luna) · 2026-09-23 18시경 KST 확인  
[^7]: OpenAI, [API pricing](https://platform.openai.com/docs/pricing) · 2026-09-23 18시경 KST 확인  
[^8]: xAI, [Grok 4.7 발표](https://x.ai/news/grok-4-7) · 2026-09-23 18시경 KST 확인  
[^9]: xAI, [Grok 4.7 model documentation](https://docs.x.ai/docs/models/grok-4-7) · 2026-09-23 18시경 KST 확인  
[^10]: OpenAI, [Codex models](https://developers.openai.com/codex/models) · 2026-09-23 18시경 KST 확인  
[^11]: xAI, [Function calling](https://docs.x.ai/docs/guides/function-calling) · 2026-09-23 18시경 KST 확인  
[^12]: OpenAI, [GPT-6 Astra 발표](https://openai.com/index/gpt-6-astra/) · 2026-09-23 18시경 KST 확인  
[^13]: Google AI for Developers, [Gemini API models](https://ai.google.dev/gemini-api/docs/models) · 2026-09-23 18시경 KST 확인  
[^14]: X(@danshipper), [GPT-6 Sol 첫 사용](https://x.com/danshipper/status/2102461471716483208) · 2026-09-23 18시경 KST 대조  
[^15]: X(@coderabbitai), [Opus 5.5 코드 리뷰 테스트](https://x.com/coderabbitai/status/2102437018311532862) · 2026-09-23 18시경 KST 대조
