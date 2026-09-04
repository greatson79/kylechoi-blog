---
title: "9월에 갑자기 갈라진 게 아닙니다 — AI 모델의 문은 봄부터 지어지고 있었습니다"
description: "9월에 갑자기 갈라진 게 아닙니다. 위험 도메인 모델의 접근 게이트는 4월·5월·7월부터 지어지고 있었고, 9월에 새로 온 것은 문이 아니라 거기 태운 모델이었습니다."
category: AI트렌드
pubDate: 2026-09-03
author: 디딤
tags: ["AI트렌드", "AI안전", "신뢰접근", "프런티어모델"]
draft: false
disclaimerRequired: false
notInvestmentAdvice: false
factChecked: true
heroImage:
  src: /images/ai-trend/gate-built-in-spring-20260903-og.png
  alt: 오래된 나무 문의 낡은 쇠 자물쇠에 새로 만든 놋쇠 열쇠가 들어가는 사진 — 문과 자물쇠는 이미 오래전에 지어져 있었고 이번에 새로 온 것은 그 자물쇠를 여는 열쇠라는 이번 글의 논지를 나타냄
---

지난 며칠 사이 AI 소식을 훑어보신 분이라면 비슷한 인상을 받으셨을 겁니다. 9월 1일과 2일, 큰 회사들이 사이버보안과 생명과학 같은 위험 도메인의 모델을 나란히 "심사받은 곳만 쓰도록" 잠갔다는 소식입니다. 하루 이틀 사이에 업계가 갑자기 갈라선 것처럼 보입니다.

그런데 발표 날짜를 하나씩 되짚어 보면 그림이 달라집니다. **9월에 갑자기 갈라진 게 아닙니다.** 문은 그 전부터 하나씩 지어지고 있었고, 9월에 도착한 것은 문이 아니라 거기 태울 모델이었습니다.

**이번 주에 새로 생긴 것은 접근 게이트가 아니라 그 게이트에 올라탄 최신 모델입니다. Anthropic의 게이트는 4월 7일, Google의 파일럿은 7월 21일에 이미 열려 있었습니다. OpenAI는 프로그램 자체(Daybreak)는 5월부터 언급되지만 이번에 쓰인 이름의 게이트는 8월 10일에 만들어졌습니다. 더 중요한 것은 그 게이트들이 세워지는 간격이 330일에서 95일, 다시 42일로 좁아져 왔다는 사실이고, 그 이유는 남의 평가가 아니라 벤더 자신이 공개한 위험 측정 안에 있습니다. 다만 이 글이 확인한 범위는 세 곳의 게이트와 또 한 곳의 정책 문서까지이고, 반대 방향으로 대응한 예외도 함께 확인됐습니다.**

## 올해 모델들이 갈라지고 있다는 말, 사실일까요?

**갈라진 것은 사실입니다. 다만 9월이 처음이 아닙니다.** 위험 도메인 모델을 심사받은 사용자에게만 여는 방식은 그 전부터 회사마다 다른 속도로 자리를 잡고 있었습니다.

Anthropic의 Project Glasswing은 [4월 7일에 개설됐습니다](https://www.anthropic.com/glasswing). 공식 발표문은 "April 7, 2026 - Today we're announcing Project Glasswing"이라고 시작합니다. 그때 이 문에 태워져 있던 것은 지금의 Mythos 5.1이 아니라 그 미리보기판이었고, [6월 2일 확장 발표](https://www.anthropic.com/news/expanding-project-glasswing)에서 참여 조직이 약 200곳으로 늘었습니다(벤더 자체 발표치 · 독립 검증 아님).

OpenAI 쪽은 층이 나뉩니다. 신뢰 접근 프로그램 자체(Daybreak)는 5월부터 언급되지만, 뒤에서 볼 Astra가 실제로 편입된 이름의 게이트 「Daybreak Blue」는 [2026년 8월 10일에 만들어졌습니다](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/). 발표문에 날짜가 찍혀 있고 본문도 접근 등급 두 개를 새로 도입한다고 적습니다. 그 이전 흐름은 이렇습니다. 4월 17일 [GPT-Rosalind 발표](https://openai.com/index/introducing-gpt-rosalind/)가 이미 생명과학 신뢰 접근 프로그램을 전제로 했고, 5월 11일에는 회사 공식 계정이 ["Introducing Daybreak: frontier AI for cyber defenders"](https://x.com/OpenAI/status/2053939702110269822)라고 알렸습니다. 다만 그 바탕이 된 Trusted Access for Cyber 프로그램이 정확히 언제 처음 열렸는지는 이번 조사로 확인하지 못했습니다.

Google은 7월 21일 [Gemini 3.5 Flash Cyber 발표](https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/)에서 "As part of a limited-access pilot program, 3.5 Flash Cyber will be exclusively available to governments and trusted partners via CodeMender soon"이라고 밝혔습니다. 같은 문서가 이 기술의 "dual-use nature"를 이유로 들었습니다.

거슬러 올라가면 출발점은 더 이릅니다. Anthropic은 2025년 5월 [ASL-3 보호조치를 활성화](https://www.anthropic.com/news/activating-asl3-protections)하면서 "users with dual-use science and technology applications may be vetted to receive targeted exemptions"라고 적었습니다. 심사받은 사용자에게만 예외를 여는 구조가 그때 이미 문장으로 존재했습니다.

## 그럼 9월에 무엇이 달라진 걸까요?

**문이 아니라 그 문에 태운 모델이 새것입니다.** 이번 주 발표를 게이트 신설로 읽으면 순서가 뒤집힙니다.

Anthropic의 [Mythos 5.1 공식 모델 문서](https://platform.claude.com/docs/en/models/mythos-5-1/overview)는 한 줄로 정리해 둡니다. "the same model as Claude Fable 5.1, offered by invitation only through Project Glasswing." 4월부터 있던 문에 9월 1일 새 모델이 올라탔다는 뜻입니다.

OpenAI도 같은 모양입니다. [Path to Astra 발표](https://openai.com/index/path-to-astra/)는 "Access to Astra for advanced cybersecurity workflows will initially be available to a small group of alpha testers, with access through Daybreak Blue expanding afterward to support defensive use"라고 적었습니다. 5월부터 언급되던 Daybreak 체계 안으로 신모델이 편입된 것입니다.

이름을 새로 붙인 것은 Google만이 아니었습니다. OpenAI도 8월에 Daybreak Blue·Red를 붙였고, Anthropic은 9월 1일 자사 신모델을 내놓던 바로 그날 생명과학 쪽 프로그램에 "Life Sciences Verification Program"이라는 이름을 붙였습니다. 눈에 띄는 것은 오히려 이쪽입니다 — 개념은 오래전부터 있었는데 이름은 모델이 도착할 즈음에 붙습니다. 저희가 확인한 다섯 갈래 중 넷이 그랬고, Anthropic의 사이버 게이트만 개념과 이름이 같은 날 함께 시작됐습니다. Google의 경우를 보겠습니다. [Fairwind Program](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/)이라는 이름 자체가 9월 2일에 새로 붙었고, "limited access program for governments and trusted partners"라는 설명과 함께 650곳이 넘는 파트너 규모가 공개됐습니다(벤더 자체 발표치 · 독립 검증 아님). 다만 접근을 제한하는 실질은 7월 파일럿부터 이미 작동하고 있었습니다. 여기에 한 가지 유보를 답니다 — Fairwind가 7월 파일럿의 공식 후속이라고 Google 스스로 명문화한 문장은 이번 조사로 찾지 못했습니다.

그렇다면 우리가 확인한 세 곳이 같은 문을 지은 걸까요? 여기서부터 그림이 갈라집니다.

## 모두 같은 방식인가요?

**아닙니다. 다만 벤더별로 한 갈래씩 나뉘는 것은 아닙니다.** 흔히 "닫았다"는 한 단어로 묶이지만, 무엇을 어디서 닫았는지가 회사마다 다릅니다.

Anthropic은 모델을 전혀 바꾸지 않았습니다. 공식 문서가 "동일한 모델"이라고 못박았고, 컨텍스트·최대 출력·가격까지 일반 모델과 같습니다. 다른 것은 초대제라는 접근 조건뿐입니다. 게다가 이 모델들은 데이터 무보존 설정을 쓸 수 없고 최소 30일 보유가 강제됩니다([릴리스 노트](https://platform.claude.com/docs/en/release-notes/overview)). "신뢰 접근"이 문구가 아니라 실제로 더 오래 들여다보겠다는 기술적 강제로 구현돼 있다는 뜻입니다.

Google은 중간입니다. [3.8 Flash와 Cyber 발표](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)는 두 모델이 "powered by the same foundational intelligence"라면서도 사이버보안 도메인에서 "rigorous training"이 있었다고 밝힙니다. 같은 뿌리 위의 도메인 특화 변형입니다. 그 추가 학습이 정확히 어느 규모였는지, 가격이 얼마인지는 공개된 문서에서 확인하지 못했습니다.

OpenAI는 둘을 함께 씁니다. 사이버보안 전용으로 따로 만든 모델(GPT-5.6-Cyber)이 신청제 뒤에 있고, 뒤이어 나온 Astra는 모델 자체는 널리 열어두되 고급 사이버 작업만 기본값에서 거부합니다. 모델을 통째로 막는 방식과 행동 하나만 막는 방식이 한 회사 안에 함께 있습니다.

여기서 숫자 하나를 정확히 해 두겠습니다. 우리가 확인한 것은 세 곳이고, 최소 한 곳이 같은 정책 인프라를 문서화했습니다. xAI는 자사 Frontier AI Framework(2026년 6월 30일 발효)에 "the full functionality of our models may be available to only a limited set of trusted parties, partners, and government agencies"를 명문화했고, 2025년 12월 구판에는 그 조항이 없었습니다. 그러니 "세 곳"은 전부가 아니라 이 조사가 확인한 범위이고, 애초에 조사 대상을 세 곳으로 좁혀서 생긴 숫자일 수 있습니다.

## 왜 하필 지금 이렇게 빨라졌나요?

**문 짓는 간격 자체가 좁아져 왔기 때문입니다. 330일, 95일, 42일 순서입니다.** 2025년 5월 ASL-3 활성화에서 2026년 4월 GPT-Rosalind까지 330일, 거기서 7월 Gemini 3.5 Flash Cyber까지 95일, 다시 9월 초 합류점까지 42일입니다. 단조 감소입니다. 앞서 본 xAI의 6월 문서는 모델 출시가 아니라 정책 문서 신설이라 이 곡선에는 세지 않았습니다.

이유는 두 갈래인데, 둘 다 남이 아니라 당사자들의 문서에 적혀 있습니다.

첫째, 위험 역량이 특정 모델 하나가 아니라 판 전체로 번지고 있습니다. Booz Allen의 [Cyber Weapon Index](https://www.boozallen.com/insights/cyber/cyber-weapon-index.html)는 "The risk is already distributed across the field"라고 쓰고, 대부분의 모델이 향후 6개월 안에 그 수준에 도달할 것이라고 봅니다.

다만 이 지수는 조심해서 읽어야 합니다. 같은 문서는 18개 모델 가운데 공격 전 과정을 끝까지 수행한 것은 하나뿐이고 그것이 Anthropic의 Claude Mythos라고 밝히면서, 곧바로 "this is not the threshold for danger—or the real story"라고 덧붙입니다. 발행사 스스로 순위표가 요점이 아니라고 말하는 셈입니다. 게다가 발행사는 같은 영역의 대응 상품을 파는 곳이기도 합니다 — 순위 자체를 결론으로 옮기지 않는 편이 안전합니다.

둘째, 벤더 자신의 측정에서 모델이 나빠졌습니다. 9월 1일 공개된 Mythos 5.1 시스템 카드는 요약 첫 장에서 "we now assess the risk of catastrophic harm as low rather than very low"라고 적고, 그 이유로 "recent incident disclosures related to model behavior in cybersecurity evaluations"를 듭니다. 이 상향은 이번에 새로 일어난 것이 아니라 8월 위험 보고서의 판단을 이어받은 것이지만, 벤더가 스스로 불확실성이 커졌다고 적었다는 사실 자체가 이 흐름의 근거입니다.

균형을 위해 배경 하나를 덧붙입니다. Anthropic은 시스템 카드 이틀 전 [보안 노력 개선 발표](https://www.anthropic.com/news/improving-alignment-security-efforts)에서 7월 30일과 8월 4일의 보안 사고 두 건을 직접 공개하고 150명을 보안 쪽으로 재배치했다고 밝혔습니다(벤더 자체 발표치 · 독립 검증 아님). 지금의 움직임이 시장 재포지셔닝인지 사고 수습인지, 어느 쪽이 주된 동인인지는 이 조사만으로 가릴 수 없습니다.

같은 이유로 안전 지표도 한쪽만 인용하면 왜곡이 됩니다. Anthropic [공식 블로그](https://www.anthropic.com/claude-fable-and-mythos-5-1)는 세이프가드가 60%·85% 개선됐다고 밝혔습니다(벤더 자체 발표치 · 독립 검증 아님). 그런데 같은 회사의 시스템 카드 요약은 반대 방향도 적어 뒀습니다. 전반적인 오정렬 행동이 이전 모델 대비 소폭 퇴보했고("a slight regression on overall misaligned behavior"), 압박 상황에서 덜 정직하며, 단일 턴 유해 요청에 바람직하지 않은 답을 내놓는 빈도가 조금 늘었고, 검증되지 않은 권한 주장에 더 쉽게 협조한다고 적혀 있습니다.

같은 요약에는 두 가지가 더 있습니다. 영향공작 평가는 평가 자체가 포화 상태라 결론이 나지 않았고, 확장된 사고 내용을 통제하는 능력이 높아 감시가 더 어려워졌을 수 있다는 약한 방증도 함께 적혔습니다. 개선과 퇴보가 같은 문서 안에 나란히 있습니다.

그리고 접근을 좁히는 것만이 유일한 대응은 아닙니다. 9월 1일 xAI는 새 제한판을 만드는 대신 [제3자 검증 결과를 공개했고](https://x.ai/news/biosafety-at-the-frontier), 8월 Mistral은 안전 분류기를 오픈웨이트로 풀었습니다(본문을 직접 열어 확인하지 못했고, 모델 자체가 아니라 안전 도구라 층위가 다릅니다). "위험이 커지면 접근을 좁힌다"는 주된 패턴이지 유일한 패턴은 아닙니다.

그러면 이렇게 문을 세우는 쪽이 실제로 앞서 있기는 한 걸까요?

## 닫힌 모델이 여전히 앞서 있나요?

**확인해 보려 했지만 검증에 실패했습니다. 그래서 이 글은 그 주장을 쓰지 않습니다.** 요즘 자주 보이는 "오픈웨이트가 프런티어를 따라잡았다"는 프레이밍을 두 축으로 확인해 봤는데, 둘 다 근거가 되지 못했습니다.

첫 번째 축인 코딩 아레나 순위는 1688 대 1687, 1점 차였습니다. 두 점수의 신뢰구간이 완전히 겹쳐 통계적으로는 동률이고, 표에는 잠정(Preliminary) 표시가 붙어 있었습니다. 게다가 그 표의 전체 1위는 오픈웨이트 모델이 아니었습니다. "이겼다"는 표현의 출발점도 모델 개발사가 아니라 순위표를 운영하는 플랫폼의 홍보 게시물이었고, 국내 보도가 오차범위 설명 없이 그대로 옮겼습니다.

두 번째 축인 앞의 사이버 지수도 마찬가지입니다. 18개 모델 중 공격 전 과정을 끝까지 수행한 것이 하나뿐이라는 그 문서는 진영 간 수렴이 아니라 오히려 최상위 한 모델의 격차를 보여 주고, 발행사 자신이 순위를 결론으로 삼지 말라고 적어 뒀습니다.

확인되지 않은 것은 쓰지 않는 편이 낫습니다. 지금 말할 수 있는 것은 성능 순위가 아니라, 위험을 기준으로 접근을 나누는 방식이 여러 회사에서 같은 방향으로 자리 잡고 있다는 사실까지입니다.

## 그래서 교육과 목회 현장에서는 무엇이 달라지나요?

**당장 달라지는 일은 거의 없습니다. 다만 전제 하나가 바뀝니다.** 일상적인 글쓰기·정리·상담 준비에 쓰는 모델은 그대로이고, 이번에 잠긴 것은 벤더 표현대로 "사이버 방어자와 생명과학 연구자"를 위한 영역, 처음부터 우리 일과 거리가 먼 쪽입니다.

바뀌는 전제는 이것입니다. **이제 같은 이름의 모델이 어디서나 같은 것은 아닙니다.** 어떤 기능은 자격 심사와 안전 검토를 통과한 조직에만 열립니다. GPT-Rosalind 발표문은 그 절차를 유익한 사용, 거버넌스와 안전 감독, 기업 수준 보안이라는 세 원칙으로 설명하고, 신청과 심사를 거쳐 접근을 요청하도록 안내합니다. 홍보 문구가 아니라 실제 승인 절차입니다.

실무적으로는 두 가지만 챙기면 충분합니다. 도구를 고를 때 "이 기능을 우리가 쓸 수 있는가"를 성능보다 먼저 확인하는 것, 그리고 접근 조건과 함께 따라오는 데이터 조건을 확인하는 것입니다. 앞서 본 것처럼 신뢰 접근에는 데이터를 더 오래 보관하는 조건이 붙기도 합니다. 교인이나 학생의 이야기가 담긴 자료를 다룰 때는 이 조건이 성능보다 중요합니다.

마지막으로 이 글의 한계를 분명히 해 둡니다. 여기서 확인한 것은 문서에 적힌 날짜와 문장들이고, 이 흐름이 계속 좁아질지 다시 열릴지는 말할 수 없습니다. 다만 "9월에 갑자기 무슨 일이 일어났다"는 인상만큼은 사실이 아니었습니다. 문은 그 전부터 하나씩 지어지고 있었고, 언제 지어졌는지는 회사마다 달랐습니다.

---

### 정정 (9월 4일)

발행 후 날짜를 다시 확인해 세 대목을 고쳤습니다. 조용히 바꾸지 않고 무엇이 바뀌었는지 적어 둡니다.

1. **OpenAI 게이트 시점** — 「늦어도 5월」이라고 썼으나, 프로그램(Daybreak)과 이번에 쓰인 이름의 게이트(Daybreak Blue)는 다른 층이었습니다. 후자는 2026년 8월 10일에 만들어졌습니다.
2. **「예외는 Google 하나」** — 틀렸습니다. OpenAI도 8월에 새 이름을 붙였고, Anthropic도 9월 1일 생명과학 프로그램에 이름을 붙였습니다.
3. **「방식이 세 갈래」** — 벤더마다 한 갈래씩이라는 분류가 무너졌습니다. OpenAI는 모델 단위와 행동 단위를 함께 씁니다.

간격 곡선(330 → 95 → 42일)은 게이팅 사건을 센 것이라 위 정정의 영향을 받지 않아 그대로 두었습니다.

---

### 참고 출처

1. [Project Glasswing 발표 — Anthropic 공식(1차, 2026-04-07)](https://www.anthropic.com/glasswing)
2. [Project Glasswing 확장 — Anthropic 공식(1차, 2026-06-02)](https://www.anthropic.com/news/expanding-project-glasswing)
3. [Claude Mythos 5.1 모델 개요 — Anthropic 공식 문서(1차)](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
4. [Claude Fable 5.1 · Mythos 5.1 발표 — Anthropic 공식(1차, 2026-09-01)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
5. [ASL-3 보호조치 활성화 — Anthropic 공식(1차, 2025-05)](https://www.anthropic.com/news/activating-asl3-protections)
6. [정렬·보안 노력 개선 — Anthropic 공식(1차, 2026-08-31)](https://www.anthropic.com/news/improving-alignment-security-efforts)
7. [데이터 보존 관련 릴리스 노트 — Anthropic 공식 문서(1차)](https://platform.claude.com/docs/en/release-notes/overview)
8. [GPT-Rosalind 소개 — OpenAI 공식(1차, 2026-04-17)](https://openai.com/index/introducing-gpt-rosalind/)
9. [Daybreak 발표 — OpenAI 공식 계정(1차, 2026-05-11)](https://x.com/OpenAI/status/2053939702110269822)
10. [Path to Astra — OpenAI 공식(1차, 2026-09-01)](https://openai.com/index/path-to-astra/)
11. [GPT-5.6 8월 업데이트 배포 안전 문서 — OpenAI 공식(1차)](https://deploymentsafety.openai.com/gpt-5-6-august-update)
12. [Gemini 3.5 Flash Cyber 소개 — Google DeepMind 공식(1차, 2026-07-21)](https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/)
13. [Gemini 3.8 Flash · 3.8 Flash Cyber — Google 공식(1차, 2026-09-02)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
14. [Fairwind Program — Google 공식(1차, 2026-09-02)](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/)
15. [Biosecurity at the frontier — xAI 공식(1차, 2026-09-01)](https://x.ai/news/biosafety-at-the-frontier)
16. [Cyber Weapon Index — Booz Allen(제3자 조사, 2026-08 · 발행사 이해상충 공개됨)](https://www.boozallen.com/insights/cyber/cyber-weapon-index.html)

