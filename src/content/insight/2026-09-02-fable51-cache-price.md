---
title: "Claude Fable 5.1, 성능보다 캐시 값이 뉴스다"
description: "Claude Fable 5.1은 기본가는 그대로지만 캐시 읽기 단가만 내려가 캐시를 반복해서 맞히는 워크로드의 비용이 줄었습니다. 벤치마크는 축마다 오른 폭이 다르고, OpenAI·Anthropic이 같은 날 사이버보안 경계 수위를 올린 배경까지 1차 출처로 정리했습니다."
category: AI트렌드
pubDate: 2026-09-02
author: 디딤
tags: ["AI트렌드", "AI가격", "Claude", "AI안전"]
draft: false
disclaimerRequired: false
notInvestmentAdvice: false
factChecked: true
heroImage:
  src: /images/ai-trend/fable51-cache-price-20260902-og.png
  alt: 따뜻한 창가 나무 책상 위 놋쇠 저울에 손이 종이를 올려놓는 사진 — 기본 가격표는 그대로인데 캐시 값 하나로 청구서의 무게가 달라지는 이번 호의 균형을 상징
sourcePath: output/WaveAI/크리에이티브본부/AI트렌드_2026-09-02_Fable51/02_아티클_AI트렌드_2026-09-02.md
---

어제(9월 1일) Anthropic이 Claude Fable 5.1과 Claude Mythos 5.1을 발표했습니다. 발표문을 훑으면 벤치마크 점수가 먼저 눈에 들어오지만, 실제로 청구서를 바꾸는 숫자는 따로 있습니다. 같은 날 OpenAI도 사이버보안에 관한 발표를 냈습니다 — 두 회사가 같은 하루에 사이버보안 쪽으로 경계 수위를 함께 올렸다는 것도 눈여겨볼 대목입니다.

이번 호에서 짚을 것은 하나로 모입니다. 새 점수가 아니라, **그 점수를 얻는 데 드는 청구서가 어떻게 달라졌는가입니다.**

## 요약 먼저

- Anthropic이 2026년 9월 1일 Claude Fable 5.1과 Claude Mythos 5.1을 발표했습니다([Anthropic 공식 발표](https://www.anthropic.com/claude-fable-and-mythos-5-1)).
- 입력·출력 가격(100만 토큰당 각 10달러·50달러)은 그대로인데, 캐시 읽기 단가만 0.25달러로 내려가 캐시를 실제로 쓰는 워크로드에서 25~45% 비용이 줄어듭니다.
- 벤치마크는 축마다 오른 폭이 다릅니다 — 에이전틱 과학 리서치는 2배 넘게 뛰었고, 다분야 추론(HLE)은 3.1%p 오르는 데 그쳤습니다.
- 같은 날 OpenAI는 자사 Astra 모델이 사이버보안 "치명적(Critical)" 역량 임계값을 처음 넘었다고 밝혔고, Anthropic도 자사 위험 평가를 "매우 낮음"에서 "낮음"으로 올렸습니다 — 두 회사가 같은 날 경계 수위를 함께 올린 것입니다. 다만 같은 발표문에는 "오탐이 줄었다"는, 얼핏 반대로 읽히는 문장도 함께 있습니다.

## 가격은 그대로인데, 청구서는 달라진다

**Claude Fable 5.1의 기본 요금은 Fable 5와 숫자 하나 다르지 않습니다.** 100만 토큰당 입력 10달러, 출력 50달러 그대로입니다([Anthropic 요금 안내](https://platform.claude.com/docs/en/about-claude/pricing)).

바뀐 건 캐시 읽기 단가 하나입니다. Fable 5는 캐시 읽기가 100만 토큰당 1달러였는데, Fable 5.1과 Mythos 5.1은 0.25달러로 내려갔습니다. Anthropic은 발표문에서 이를 "75% 인하"라고 표현하고, 요금 안내 페이지는 같은 숫자를 다른 기준으로 설명합니다 — "캐시 적중은 기본 입력가의 2.5%"(다른 모델은 10%). 두 표현 모두 정확히 같은 값(100만 토큰당 0.25달러)을 가리키지만 기준선이 다릅니다. 하나는 "Fable 5 대비 얼마나 내렸나"(75%↓)를, 다른 하나는 "기본 입력가 대비 캐시가 몇 %인가"(2.5%)를 말합니다.

이 인하 하나로 Anthropic은 "일반적인 워크로드에서는 Fable 5 대비 약 25%, 복잡한 코딩·고도로 에이전틱한 작업에서는 최대 약 45%까지 비용이 줄어든다"고 밝혔습니다([Anthropic 공식 발표](https://www.anthropic.com/claude-fable-and-mythos-5-1)). 조건이 하나 붙습니다 — 이 절감은 **캐시를 실제로 반복해서 맞히는 작업에서만** 실현됩니다. 한 번 묻고 끝나는 단발성 질의는 캐시 적중률이 낮아 체감 차이가 거의 없고, 같은 컨텍스트를 여러 번 오가는 긴 문서 작업이나 에이전틱 워크플로처럼 캐시 적중 비율이 높을수록 절감폭이 커지는 구조입니다.

이 소식을 옮긴 매체들의 온도도 조금씩 달랐습니다. MacRumors와 9to5Mac은 제목·본문 모두 "캐시 읽기 가격"이라고 정확히 짚었지만, 한 매체는 제목을 "가격 대폭 인하"로 뽑았습니다. 본문은 맞는 내용이지만, 제목만 보면 기본 입력·출력 단가는 그대로라는 사실이 사라집니다. 본문까지 읽지 않으면 놓치는 자리입니다.

경쟁 모델과 나란히 놓으면 Fable 5.1의 위치가 더 또렷해집니다.

| 모델 | 회사 | 입력 | 출력 | 캐시 읽기 |
|---|---|---|---|---|
| Claude Fable 5.1 | Anthropic | $10.00 | $50.00 | $0.25 |
| GPT-5.6 Sol (Standard) | OpenAI | $4.00 | $20.00 | $0.40(읽기)·$5.00(쓰기) |
| Gemini 3.1 Pro Preview (≤200k) | Google | $2.00 | $12.00 | $0.20 |
| Gemini 3.1 Pro Preview (>200k) | Google | $4.00 | $18.00 | $0.40 |

*(100만 토큰당, 각 사 공식 pricing 페이지 기준. 캐시 컬럼의 정의가 회사마다 다릅니다 — OpenAI는 캐시 읽기·쓰기를 별도 컬럼으로 공개하고, Google은 읽기 값에 시간당 스토리지 비용이 별도로 붙으며, Anthropic은 읽기 단가만 공개합니다. 절대 숫자만 비교하면 오해하기 쉽습니다.)*

Fable 5.1은 표에서 입력·출력 절대가가 가장 비싸지만, 캐시 읽기 단가(0.25달러)는 OpenAI Sol(0.40달러)보다 오히려 낮습니다. "가격표만 보면 비싸 보이지만 청구서는 다르게 나올 수 있다"는 것이 이번 인하의 실제 의미입니다.

## 점수는 골고루 오르지 않았다

**Fable 5.1의 벤치마크 점수는 축마다 오른 폭이 크게 다릅니다.**

| 벤치마크(성격) | Fable 5.1 | Fable 5 | Opus 5 | GPT-5.6 Sol |
|---|---|---|---|---|
| Terminal-Bench-Science 0.1(에이전틱 과학 리서치) | 52.6% | 24.7% | 29.0% | 22.4% |
| Terminal-Bench 4.0(에이전틱 코딩) | 55.8% | 42.0% | 52.3% | 37.3% |
| GDPval-AA v2(지식노동, 점수 단위) | 1853 | 1723 | 1824 | 1711 |
| HLE, 도구 미사용(다분야 추론) | 60.9% | 57.8% | 56.6% | — |
| AutomationBench(비즈니스 워크플로) | 31.4% | 17.1% | 26.9% | 19.6% |
| CursorBench 3.2.0(에이전틱 코딩) | 73.4% | 70.5% | 70.0% | 67.2% |

*(출처: [Anthropic 공식 발표](https://www.anthropic.com/claude-fable-and-mythos-5-1). "—"는 원문 표에 해당 수치가 없는 칸입니다. GDPval-AA v2는 %가 아니라 점수 단위로 표기됩니다 — 혼동하기 쉬운 지점입니다.)*

표에서 가장 크게 뛴 축은 에이전틱 과학 리서치(Terminal-Bench-Science 0.1)로 24.7%에서 52.6%로 2배 넘게 올랐습니다. 반면 다분야 추론(Humanity's Last Exam, 도구 미사용)은 57.8%에서 60.9%로 3.1%p 오르는 데 그쳤습니다. 어느 축이 얼마나 올랐는지 확인하지 않고 "전체적으로 좋아졌다"로만 읽으면, 자기 업무와 무관한 축의 상승분을 자기 일에 그대로 적용하는 착시가 생깁니다.

공식 벤치마크 바깥에서는 독립 측정치가 서로 반대 방향을 가리켰습니다. 두 평가 업체(Artificial Analysis·Cognition)가 각자 과제당 비용을 재현했는데, 한쪽은 Fable 5보다 비싸졌다고, 다른 쪽은 오히려 싸졌다고 보고했습니다. 둘 다 Anthropic의 공식 수치가 아니고 원문을 직접 대조하지 못해 이 글에서는 구체 액수를 단정하지 않습니다 — 다만 같은 모델을 같은 시기에 재고도 결과가 갈렸다는 사실 자체가 짚어둘 지점입니다. 측정 조건(과제 구성·effort 설정)이 다르면 같은 모델도 다른 숫자가 나올 수 있습니다.

Anthropic 스스로도 관측의 한계를 밝혔습니다. 발표문은 "자동화된 행동 감사(automated behavioral audit)가 매우 긴 컨텍스트 작업과 멀티에이전트 환경에는 가시성이 떨어지고, 불가능한 과제에 대한 커버리지도 원하는 수준에 못 미친다"고 적었습니다([Anthropic 공식 발표](https://www.anthropic.com/claude-fable-and-mythos-5-1)).

## 오탐이 줄었다는데, 무엇이 줄었나

**Anthropic은 "사이버보안 영역에서 새 안전장치가 이전보다 무해한 요청을 60% 덜 오차단한다"고 밝혔습니다**([Anthropic 공식 발표](https://www.anthropic.com/claude-fable-and-mythos-5-1)).

생물학 영역에서는 별도로 "무해한 요청에 대한 오탐 발동 빈도가 85% 줄었다"고 밝혔는데, 이 개선은 Fable 5.1과 Fable 5에 함께 적용되는 것으로 이번 판에만 해당하는 개선은 아니며, 사이버보안과도 다른 도메인의 별개 지표입니다. 두 수치를 하나로 뭉뚱그리면 안 됩니다. 어느 쪽도 표본 수나 절대 기준값은 공개되지 않았습니다.

이 개선이 겨냥한 실제 불만은 짐작이 아닙니다. Anthropic의 공개 이슈 트래커에는 정상적인 방어 보안 코드 리뷰가 세션당 여러 번 안전장치에 막혔다는 신고가 올라와 있습니다([GitHub 이슈](https://github.com/anthropics/claude-code/issues/85041)). 시스템 카드는 균형을 잡는 단서도 함께 적었습니다 — Fable 5.1의 오탐은 Fable 5보다는 줄었지만, Opus 5의 안전장치보다는 여전히 더 자주 발동한다고 명시했습니다. 발표문 요약에는 이 단서가 빠져 있습니다.

## 같은 날, 두 회사가 함께 경계를 올렸다

**Fable 5.1이 발표된 바로 그 날, OpenAI도 사이버보안에 관한 발표를 냈습니다.** OpenAI는 자사 모델 "Astra"가 대비 프레임워크(Preparedness Framework)상 "치명적(Critical)" 사이버보안 역량 임계값을 처음으로 충족했다고 스스로 밝혔습니다([OpenAI 공식 발표](https://openai.com/index/path-to-astra/)).

같은 날, Anthropic의 시스템 카드도 자사 위험 평가를 올렸습니다. "파국적 위해의 위험을 이전의 매우 낮음(very low)에서 낮음(low)으로 재평가했다"며, 그 근거로 "최근 사이버보안 평가 중 모델 행동과 관련해 공개된 사고들"을 들었습니다([Anthropic 공식 발표](https://www.anthropic.com/claude-fable-and-mythos-5-1)) — 어제(9월 1일) 다룬 "AI 사고를 어떻게 공개하는가" 논의의 직접 후속입니다. 방향은 같습니다. **두 회사가 같은 날 사이버보안 쪽으로 경계 수위를 함께 올린 것입니다.**

그런데 같은 발표문 안에는 얼핏 반대로 읽히는 문장도 함께 있습니다 — Anthropic은 같은 자리에서 "사이버보안 오탐이 60% 줄었다"(=안전장치가 덜 예민해졌다)고도 밝혔습니다. 위험 평가는 올라갔는데 오탐은 줄었다는 두 문장이 한 문서 안에 나란히 있는 셈입니다. 이걸 모순으로 단정할 근거는 없습니다 — 오탐률(안전장치가 무해한 요청을 잘못 막는 빈도), 위험 평가(위해가 실제로 벌어질 가능성을 어떻게 보느냐 — Anthropic은 불확실성이 커졌다는 이유로 등급을 올렸습니다), 그리고 OpenAI가 신고한 역량 임계값(모델이 할 수 있는 일의 최대치)은 전부 서로 다른 것을 잽니다. 다만 이 셋이 같은 주에, 심지어 한 문서 안에 함께 있다는 사실은 읽는 사람이 알아둘 만합니다.

## 같은 모델, 다른 안전장치

**Fable 5.1과 Mythos 5.1은 사실 같은 모델입니다.** Anthropic은 두 이름을 "안전장치 수준만 다른 동일 모델"이라고 명시합니다. Fable 5.1은 누구나 쓸 수 있는 일반 공개판이고, Mythos 5.1은 생물학·사이버보안 같은 고위험 이중용도 영역의 제약을 완화한 버전으로 Project Glasswing 등 신뢰받는 접근 프로그램을 통해서만 제공됩니다. 이 역량은 Claude Enterprise 고객 전체가 쓸 수 있는 "Claude Security" 제품의 기반이기도 합니다.

모델 자체를 나누는 게 아니라 배포 방식으로 "누구에게 어디까지 열어줄지"를 가른다는 뜻입니다. 하나의 능력을 만들고 안전장치 강도를 다이얼처럼 조절해 접근 등급을 나누는 방식이 앞으로 업계 표준이 될지는 지켜볼 대목입니다.

## 써 본 사람들은 뭐라 하나

**반응은 갈립니다.**

Claude Code 리드 Boris Cherny는 "코딩·데이터 분석·컴퓨터 사용·디자인까지 아우르는, 지금까지 최고의 모델"이라고 평가했고([X](https://x.com/bcherny/status/2094864060609376748)), Anthropic 개발자 관계 담당 Alex Albert는 "거칠고 대충 던진 문장만으로도 나머지를 알아서 채운다"고 썼습니다([X](https://x.com/alexalbert__/status/2094849958025306330)). 다만 둘 다 Anthropic 소속이라는 점은 감안해야 합니다.

서드파티 코드 리뷰 도구 CodeRabbit은 자체 실측치를 공개했습니다 — Fable 5와 비교해 결함 탐지율(recall)은 거의 그대로 유지하면서 전체 코멘트는 34%, 사소한 지적은 70% 줄었지만, 리뷰 시간은 오히려 49% 길어졌습니다. 복잡한 변경에는 맞고 일상적인 PR에는 비효율적일 수 있다는 뜻입니다([X](https://x.com/coderabbitai/status/2094853886540464636)).

Reddit r/Anthropic에서는 "정말 훌륭하지만 사용량 한도를 극도로 빠르게 소진한다"는 게시글에 "이건 명백히 약탈적인 토큰 소모"라는 댓글까지 달렸고([Reddit](https://www.reddit.com/r/Anthropic/comments/1w5508t/fable_51_is_really_fantastic_but_its_burning/)), Hacker News와 r/LocalLLaMA에서는 문체 자체에 대한 비판이 반복됩니다 — "거의 이해 불가능한 수준"이라는 평가가 여러 스레드에서 되풀이됐습니다. 한 사용자는 이런 경향이 Fable만의 문제가 아니라 에이전틱 훈련을 거친 프런티어 모델 전반의 경향이라고 반박하기도 했습니다([Hacker News](https://news.ycombinator.com/item?id=49525378)).

독립 벤치마크 재현도 우위를 절대적으로 그리지 않습니다. Snorkel AI가 같은 문제 세트(전체 27개)로 Fable 5.1과 Opus 5를 나란히 돌린 결과, 두 모델 다 푼 문제가 18개, Opus 5만 단독으로 푼 문제가 5개, Fable 5.1만 단독으로 푼 문제가 2개, 둘 다 실패한 문제가 2개였습니다(합계 Opus 5 23개·Fable 5.1 20개) — Opus 5의 단독 해결이 더 많았습니다. Fable 5.1의 가장 약한 지점은 빌드·의존성 관리(18%, Opus 5는 67%)였습니다. 대신 성공한 실행에서는 출력 토큰이 58% 적고 완료가 36% 빨랐습니다 — 우위는 정답률보다 효율성 쪽에 가깝다는 뜻입니다([Snorkel AI](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark/)).

발표 당일 GitHub Copilot이 Fable 5.1을 즉시 정식 반영(GA)한 것은 실사용 채택이 빨랐다는 신호입니다([GitHub 공식 체인지로그](https://github.blog/changelog/2026-09-01-claude-fable-5-1-generally-available-in-github-copilot/)).

## 그리고 이미 있는데 잘 안 쓰이는 것 하나

**Claude Design은 2026년 4월 17일부터 있던 기능입니다.** Pro·Max·Team·Enterprise 구독자라면 지금도 쓸 수 있습니다([Anthropic 공식 발표](https://www.anthropic.com/news/claude-design-anthropic-labs)). 디자인이 완성되면 스크린샷부터 다시 그리며 시작하지 않고, 만든 작업을 그대로 이어받아 Claude Code로 넘길 수 있다는 것이 공식 헬프센터가 설명하는 핵심입니다([공식 헬프센터](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)).

겹쳐 놓고 보면 이 글의 주축과 닿는 지점이 있습니다 — 캐시 값이 싸져서 유리해진 건 같은 컨텍스트를 반복해서 오가는 작업이었는데, 디자인과 코드 사이를 오가는 것도 그 반복 왕복의 한 형태입니다. 다만 Anthropic이 이 둘을 묶어 말한 적은 없습니다. 나란히 놓고 보면 그렇게 읽힐 뿐입니다.

## 그래서 지금 무엇을 하면 되나

과장 없이 세 가지만 확인하면 됩니다.

1. **비용 절감을 기대한다면 자기 워크로드가 캐시를 실제로 맞히는 구조인지부터 확인하세요.** 긴 문서를 반복 참조하거나 여러 턴에 걸쳐 같은 컨텍스트를 오가는 작업이 아니라면, 25~45%라는 숫자는 남의 이야기입니다.
2. **벤치마크 점수를 도입 근거로 쓸 때는 표 전체가 아니라 자기 업무와 가까운 축 하나를 골라 보세요.** Fable 5.1은 축마다 오른 폭이 2배 이상 차이 납니다.
3. **안전장치 오탐 감소를 홍보 수치로만 믿지 말고, 자기 워크플로에서 정당한 요청이 막히는 빈도를 몇 주간 직접 세어 보세요.** 감소 폭은 이전 모델 대비이지, 오탐이 사라졌다는 뜻은 아닙니다.

성능은 어느 회사든 발표문마다 오릅니다. 이번 호에서 눈여겨볼 것은 오른 점수가 아니라, 같은 정가 밑에서 청구서가 실제로 어떻게 움직이는가입니다.

---

### 참고 출처
1. [Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic 공식 발표(1차, 2026-09-01)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
2. [Claude 요금 안내 — Anthropic 공식 페이지(1차)](https://platform.claude.com/docs/en/about-claude/pricing)
3. [Claude Fable 5.1 모델 개요 — Anthropic 공식 문서(1차)](https://platform.claude.com/docs/en/models/fable-5-1/overview)
4. [Path to Astra: critical capabilities and frontier safeguards — OpenAI 공식 발표(1차, 2026-09-01)](https://openai.com/index/path-to-astra/)
5. [GPT-5.6 API 가격 — OpenAI 공식 문서(1차)](https://developers.openai.com/api/docs/pricing)
6. [Gemini API 가격 — Google 공식 문서(1차)](https://ai.google.dev/gemini-api/docs/pricing)
7. [Fable 5 안전장치 오탐 이슈 — GitHub 이슈 트래커(1차)](https://github.com/anthropics/claude-code/issues/85041)
8. [Claude Fable 5.1 GitHub Copilot GA — GitHub 공식 체인지로그(1차, 2026-09-01)](https://github.blog/changelog/2026-09-01-claude-fable-5-1-generally-available-in-github-copilot/)
9. ["Fable 5.1 is really fantastic, but it's burning through the usage limit extremely fast!" — Reddit r/Anthropic(커뮤니티 신호)](https://www.reddit.com/r/Anthropic/comments/1w5508t/fable_51_is_really_fantastic_but_its_burning/)
10. [Fable 5.1 관련 스레드 — Hacker News(커뮤니티 신호)](https://news.ycombinator.com/item?id=49525378)
11. [Fable 5.1 vs Opus 5 coding benchmark — Snorkel AI(독립 재현, 2026-09-01)](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark/)
12. [CodeRabbit 실측 트윗 — 서드파티 실측](https://x.com/coderabbitai/status/2094853886540464636)
13. [Boris Cherny(Claude Code 리드) 트윗](https://x.com/bcherny/status/2094864060609376748)
14. [Alex Albert(Anthropic 개발자 관계) 트윗](https://x.com/alexalbert__/status/2094849958025306330)
15. [Claude Design — Anthropic 공식 발표(1차, 2026-04-17)](https://www.anthropic.com/news/claude-design-anthropic-labs)
16. [Get started with Claude Design — Anthropic 공식 헬프센터(1차)](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)
