---
title: "AI트렌드 — AI가 AI를 공격한다: 84% 대 13%, 레드팀이 자동화된 3주"
description: "오픈AI가 자사 모델을 공격하도록 훈련한 GPT-Red는 간접 프롬프트 인젝션 시나리오의 84%를 뚫었다. 사람 레드팀은 13%였다. 앤트로픽의 재일브레이크 심각도 등급과 5만 달러로 오른 바이오 현상금까지, 공격을 조직하는 방식이 바뀐 3주를 검증했다."
category: AI트렌드
pubDate: 2026-07-20
author: 디딤
tags: [AI트렌드, AI보안, 레드팀, 프롬프트인젝션, OpenAI, Anthropic]
draft: true
disclaimerRequired: false
factChecked: false
sourcePath: output/AI트렌드/2026-07-20_trend_리서치소스.md
---

같은 공격 시나리오를 놓고 사람과 모델이 붙었다. 간접 프롬프트 인젝션 아레나에서 오픈AI가 훈련한 공격 모델 GPT-Red는 시나리오의 84%를 뚫었고, 사람 레드팀은 13%를 뚫었다. 오픈AI 공식 발표문의 표현 그대로다. "GPT‑Red achieves significantly higher attack success rates, finding success on 84% of scenarios compared to 13% for humans" (OpenAI, GPT-Red 발표문, 2026년 7월 중순).

여섯 배 차이는 숫자 하나로 끝나지 않는다. 이 결과가 나온 3주 동안, 프런티어 랩 두 곳이 각각 다른 방향에서 같은 결론에 도달했다. **공격을 사람 손에만 맡겨서는 방어가 늘지 않는다.**

## 공격자를 훈련시켜서 방어자를 키운다

GPT-Red는 배포용 모델이 아니다. 공격 전용으로 만들어진 모델이다. 훈련 방식은 자기대전(self-play) 강화학습으로, 공격 모델과 여러 방어자 LLM을 동시에 학습시킨다. 발표문은 "GPT‑Red is trained using self-play reinforcement learning, where the model and a collection of diverse defender LLMs are trained simultaneously on a broad set of red-teaming scenarios"라고 적었다.

이렇게 만든 공격자를 프로덕션 모델 훈련 과정에 직접 물렸을 때 나온 수치가 이렇다 (모두 OpenAI 발표문, 2026년 7월 중순).

- GPT-5.6 Sol은 가장 어려운 직접 프롬프트 인젝션 벤치마크에서 **실패가 6배 감소**했다. 비교 대상은 넉 달 전 오픈AI 최고 프로덕션 모델이다.
- '가짜 사고사슬(Fake Chain-of-Thought)' 공격은 GPT-5.1에서 **95% 이상** 통했지만, GPT-5.6 Sol에서는 **10% 미만**으로 떨어졌다.
- GPT-5.6 Sol은 GPT-Red가 던진 직접 프롬프트 인젝션 가운데 **0.05%**에서만 실패했다.

공격 모델 자체는 공개되지 않는다. 발표문은 이유를 분명히 밝힌다. "We keep GPT‑Red separate from the models we deploy. This keeps the malicious capabilities we specifically train into GPT‑Red out of the hands of adversarial actors." 안전을 위해 만든 무기를 안전을 위해 잠가둔다는 뜻이다.

벤치마크의 출처도 밝혀져 있다. 간접 프롬프트 인젝션 아레나는 Dziemian et al.(2025)의 설정을 재현한 것이다(MarkTechPost, 2026-07-16 보도).

## 다른 쪽에서는 공격을 바깥에 맡겼다

같은 기간 앤트로픽은 반대편 경로를 택했다. 2026년 7월 2일 공개한 「More details on Fable 5's cyber safeguards and our jailbreak framework」는 두 가지를 담았다.

하나는 사이버보안 요청을 **네 갈래로 나누는 분류 체계**다. 금지 용도(prohibited use), 고위험 이중용도(high-risk dual use), 저위험 이중용도(low-risk dual use), 무해 용도(benign use). 보안 관련 요청을 통째로 막는 대신, 방어적 효용과 공격적 위험을 저울에 올려 등급을 매긴다.

다른 하나는 **재일브레이크 심각도 척도(Cyber Jailbreak Severity, CJS)**다. CJS-0(정보성)부터 CJS-4(치명적)까지 다섯 단계이며, 네 축으로 점수를 매긴다.

| 축 | 앤트로픽의 정의 |
|---|---|
| 능력 상승(capability gain) | "How far beyond their existing tools the technique takes the attacker" |
| 범용성(breadth) | 같은 기법이 통하는 서로 다른 공격 과업의 수 |
| 무기화 용이성 | "How much human effort it takes to turn the jailbreak into a running attack" |
| 발견 용이성 | "How easily a threat actor can obtain the technique in the first place" |

그리고 앤트로픽은 HackerOne에 전용 프로그램을 열었다. 연구자가 Fable 5에서 찾은 사이버 재일브레이크를 직접 제출하는 창구다(anthropic-cyber-jailbreak). 이 프레임워크는 앤트로픽 단독 산물이 아니라 '글래스윙(Glasswing) 파트너'와 함께 만들고 있는 초안이라고 발표문은 밝힌다.

오픈AI도 바깥에 거는 쪽을 동시에 강화했다. 7월 9일, 바이오 버그바운티를 상시 프로그램으로 전환하면서 **유니버설 재일브레이크 상금을 2만 5천 달러에서 5만 달러로 두 배** 올렸다(OpenAI, Bio Bug Bounty, 2026-07-09). GPT-5.6은 상시 대상이고, GPT-5.5는 2026년 7월 27일까지만 범위에 남는다. 발표문은 "After this date, only GPT‑5.6 will be in scope"라고 못박았다.

정리하면 3주 동안 세 가지 움직임이 겹쳤다. 공격을 **자동화**하고(GPT-Red), 공격의 심각도를 **표준화**하고(CJS), 외부 공격자에게 지불하는 **가격을 올렸다**(5만 달러). 세 방향 모두 "공격을 더 많이, 더 체계적으로 받아내겠다"는 하나의 방침을 향한다.

## 다만 아직 사람이 필요한 자리가 있다

숫자가 인상적이라고 해서 문제가 끝난 것은 아니다. 양쪽 다 스스로 한계를 적어뒀다.

오픈AI 발표문은 GPT-Red가 "highly effective against the population of defender models and red-teaming scenarios that it was trained on"이라고 썼다. 훈련된 방어자 집단과 시나리오 안에서 특히 강하다는 조건부 서술이다. 학습 분포 밖의 공격에 대한 보장은 그 문장에 들어 있지 않다. 보도에 따르면 멀티턴 대화 기반 공격과 이미지 기반 공격은 여전히 사람 레드팀의 몫으로 남아 있다(MarkTechPost, 2026-07-16).

앤트로픽은 트레이드오프를 더 직설적으로 인정했다. 안전 여유를 크게 잡으면 "a higher rate of false positives (genuinely benign prompts being blocked) but also greater reassurance about the prevention of harmful outcomes"라는 결과가 따라온다는 것이다. 정상적인 보안 업무 요청이 막히는 비용을 감수하겠다는 선언이다.

국내 데이터도 같은 지점을 가리킨다. 금융보안원은 「2025년 AI 레드팀 보고서」에서 AI 공격을 4세대로 나눴다. 1세대는 역할극 같은 단순 우회 문구, 2세대는 알고리즘이 자동 생성하는 공격 프롬프트, 3세대는 긴 문맥을 이용한 인지적 조작과 RAG 지식 데이터베이스 오염, 4세대는 실제 금융 시스템에 직접 피해를 입힐 수 있는 에이전트 공격이다. 검증 결과 금융권 AI는 기본 위협에는 대응했지만, 3세대 이상 고도화된 공격에서는 "안전장치가 무력화되는 경향이 나타났다"고 보고서는 적었다(데일리시큐, 2025-12-30). 같은 보고서에서 금융보안원은 2026년 AI 레드팀 전담 조직 신설과 금융 특화 AI 보안 평가지표 개발을 예고했다.

프런티어 랩이 공격을 자동화하는 동안, 그 모델을 가져다 쓰는 쪽에서는 3세대 공격 앞에서 안전장치가 풀린다. 벤더의 0.05%와 도입 기업의 현실 사이에는 아직 검증되지 않은 구간이 있다.

## 한 줄 정리

AI 안전의 축이 "사람이 얼마나 잘 공격해보았는가"에서 "공격을 얼마나 많이, 얼마나 체계적으로 받아냈는가"로 옮겨가고 있다. 다만 그 성과는 벤더 모델 자체의 강건성이고, 그것을 조립해 쓰는 시스템의 강건성은 아직 별개의 숫자다.

---

### 확인된 출처

- OpenAI, 「GPT-Red: Unlocking Self-Improvement for Robustness」 — https://openai.com/index/unlocking-self-improvement-gpt-red/ (2026년 7월 중순 공개. 2차 보도 간 7/15·7/16 표기가 갈려 정확한 일자는 확정하지 않았다)
- MarkTechPost, 2026-07-16 — https://www.marktechpost.com/2026/07/16/openai-details-gpt-red-an-internal-automated-red-teaming-model-that-beat-human-red-teamers-84-to-13-on-prompt-injection/
- Anthropic, 「More details on Fable 5's cyber safeguards and our jailbreak framework」, 2026-07-02 — https://www.anthropic.com/news/fable-safeguards-jailbreak-framework
- OpenAI, 「OpenAI Bio Bug Bounty」, 2026-07-09 — https://openai.com/index/bio-bug-bounty/
- 데일리시큐, 「금융보안원, '2025년 AI 레드팀 보고서' 발간」, 2025-12-30 — https://www.dailysecu.com/news/articleView.html?idxno=203865

리서치 노트: `output/AI트렌드/2026-07-20_trend_리서치소스.md`
