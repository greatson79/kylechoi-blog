---
title: "'더 똑똑한 모델' 경쟁이 저무는 자리 — Opus 5와 Gemini 3.6 Flash가 바꾼 축"
description: "2026년 7월 4주차 AI 기술 동향. Claude Opus 5의 '스스로 검증하는 능력'과 Gemini 3.6 Flash의 '효율·통제·비용'을 하나의 논지로 읽습니다. 프런티어 경쟁의 무게중심은 지능 절대치에서 신뢰성과 경제성으로 옮겨가고 있습니다."
pubDate: 2026-07-25
author: Wave AI Networks
category: AI트렌드
tags: [AI트렌드, Claude Opus 5, Gemini 3.6 Flash, 에이전트, thinking, 모델비용]
draft: false
factChecked: true
disclaimerRequired: false
sourcePath: output/WaveAI/크리에이티브본부/AI트렌드_Opus5_Gemini36_2026-07-25/원고_2026-07-25.md
heroImage:
  src: /images/ai-trend/hero_opus5-gemini36-frontier-shift_0725.png
  alt: "프런티어 AI 모델 경쟁의 축 이동을 요약한 데이터 비주얼. 헤드라인은 '경쟁이 지능 절대치가 아니라 검증가능한 신뢰성과 효율·비용에서 갈린다'. 우측 비교 카드 — 축 A 신뢰성: Claude Opus 5(2026-07-24)는 Frontier-Bench에서 Opus 4.8 대비 2배 이상, 가격 100만 토큰당 입력 5달러·출력 25달러, 자기검증·반복 능력. 축 B 효율·비용: Gemini 3.6 Flash(2026-07-21)는 출력 토큰 17% 절감, 가격 입력 1.5달러·출력 7.5달러, DeepSWE 49%·OSWorld-Verified 83.0%·컨텍스트 100만 토큰·통제 가능한 thinking."
---

지난 몇 년간 새 AI 모델의 발표는 늘 같은 문장으로 요약되곤 했습니다. "역대 가장 똑똑한 모델." 그런데 이번 주 하루 간격으로 나온 두 발표를 나란히 놓고 보면, 경쟁의 문장이 조용히 바뀌고 있음을 느끼게 됩니다. 두 회사는 더 이상 '누가 더 똑똑한가'만을 말하지 않았습니다. 그렇다면 이들은 무엇을 자랑하기 시작한 걸까요.

## 1. 두 발표를 하나로 묶어 읽어야 하는 이유

7월 24일 Anthropic은 **Claude Opus 5**를, 그 사흘 전인 7월 21일 Google은 **Gemini 3.6 Flash**를 공개했습니다. 별개의 소식처럼 보이지만, 두 발표를 관통하는 흐름은 하나입니다. 프런티어 모델 경쟁의 축이 '지능의 절대치'에서 다른 곳으로 이동했다는 것입니다.

한쪽은 **신뢰성**을 말합니다. 더 똑똑하다는 자랑 대신, 자기 답을 스스로 검증하고 될 때까지 고쳐 나가는 능력을 전면에 내세웠습니다. 다른 한쪽은 **효율과 통제, 비용**을 말합니다. 같은 일을 더 적은 토큰과 더 낮은 값으로, 그리고 사고량을 조절 가능한 방식으로 해내는 데 무게를 실었습니다.

두 방향은 겉보기에 다르지만 도착지가 같습니다. 벤치마크 최고점을 다투던 무대에서, **실제로 배포된 AI가 얼마나 믿을 만하고 얼마나 경제적인가**라는 무대로 옮겨간 것입니다. 특히 사람의 지시를 받아 스스로 여러 단계를 수행하는 '에이전트' 방식이 늘어나면서, 이 두 가지가 성능표의 숫자보다 더 중요한 질문이 되었습니다.

## 2. Opus 5 — '정답을 아는 모델'에서 '틀림을 잡아내는 모델'로

Anthropic이 Opus 5를 소개하며 고른 핵심 표현은 '가장 똑똑하다'가 아니었습니다. **자기 작업을 검증하고, 성공할 때까지 신중하게 반복하는 능력이 훨씬 강해졌다**는 것이 발표의 중심 문장이었습니다.

이를 보여 준 사례가 인상적입니다. 기계 부품 도면을 주고 3D 모델로 재구성하게 하는 과제에서, Opus 5는 도면을 직접 들여다보는 대신 **스스로 컴퓨터 비전 처리 절차를 코드로 작성**해 원본 픽셀에서 기하 정보를 추출하고 부품 전체를 복원했습니다. Anthropic에 따르면 동일한 조건에서 다른 경쟁 모델은 다섯 번을 시도해도 풀지 못한 과제였습니다. 한 번의 정답을 노리기보다, 스스로 검증 절차를 세워 반복 실행 끝에 성공에 이르렀다는 점이 특징입니다.

수치도 이 방향을 뒷받침합니다. 새 평가 항목인 Frontier-Bench에서 Opus 5는 이전 세대인 Opus 4.8의 성능을 두 배 이상 앞섰고, 코딩 과제(CursorBench 3.2)에서는 노력을 최대로 설정했을 때 최상위 모델인 Fable 5의 정점과 0.5% 차이 안까지 근접하면서도 과제당 비용은 절반 수준이었습니다. 추상적 추론을 평가하는 ARC-AGI 3에서는 차순위 모델의 세 배 점수를 기록했습니다. 여기서 눈여겨볼 대목은 Opus 5에 **고객이 조절할 수 있는 effort(노력) 설정**이 있다는 점입니다. 지능을 끌어올릴지, 토큰을 아껴 더 빠르고 저렴하게 처리할지를 이용자가 상황에 맞춰 택할 수 있습니다.

가격은 100만 토큰 기준 입력 5달러, 출력 25달러로 이전 세대인 Opus 4.8과 동일합니다. 같은 비용으로 크게 개선된 성능을 낸다는 뜻입니다. 안전성 면에서도 Anthropic은 함께 공개한 시스템 카드에서 Opus 5를 지금까지 가장 잘 정렬된 모델로 평가하며, 자사 원칙을 이전 모델들보다 더 충실히 따른다고 밝혔습니다. 요컨대 Opus 5의 메시지는 '더 아는 모델'이 아니라 '자기 틀림을 잡아내는 모델'입니다.

<div class="bench-compare">
<style>
.bench-compare{font-family:'Pretendard Variable',Pretendard,-apple-system,'Apple SD Gothic Neo',sans-serif;color:#1b1d24;margin:2.5rem 0}
.bench-compare .lead{font-weight:800;font-size:1.15rem;letter-spacing:-.01em;margin:0 0 .35rem}
.bench-compare .sub{font-size:.9rem;color:#565a66;line-height:1.6;margin:0 0 1.2rem}
.bench-compare figure{margin:0 0 1.6rem}
.bench-compare .scroll{overflow-x:auto}
.bench-compare table{width:100%;border-collapse:collapse;font-size:.85rem;min-width:560px}
.bench-compare th,.bench-compare td{padding:.45rem .4rem;text-align:right}
.bench-compare th.l,.bench-compare td.l{text-align:left}
.bench-compare thead tr{border-bottom:2px solid #1b1d24}
.bench-compare tbody tr{border-bottom:1px solid #dcdde3}
.bench-compare .win{font-weight:800;color:#123a8a;border-bottom:2px solid #123a8a}
.bench-compare .dim{color:#565a66}
.bench-compare .cap{font-size:.78rem;color:#565a66;line-height:1.5;margin:.7rem 0 0}
</style>
<p class="lead">영역마다 앞서는 모델이 다르다</p>
<p class="sub">Anthropic이 공개한 비교표를 보면 모델마다 강점이 다른 영역에 놓여 있습니다. <strong style="color:#123a8a">파란 강조 = 해당 영역 1위.</strong></p>
<figure>
<div class="scroll"><table>
<thead><tr><th class="l">영역 · 벤치마크</th><th>Claude Opus 5</th><th>Fable 5</th><th>Opus 4.8</th><th>GPT-5.6 Sol</th></tr></thead>
<tbody>
<tr><td class="l">에이전트 터미널 코딩 · Frontier-Bench v0.1</td><td class="win">43.3</td><td>33.7</td><td class="dim">21.1</td><td>34.4</td></tr>
<tr><td class="l">지식 노동 · GDPval-AA v2</td><td class="win">1861</td><td>1747</td><td class="dim">1593</td><td>1736</td></tr>
<tr><td class="l">새로운 문제해결 · ARC-AGI-3</td><td class="win">30.2</td><td class="dim">—</td><td class="dim">1.5</td><td>7.8</td></tr>
<tr><td class="l">에이전트 검색 · BrowseComp</td><td class="win">90.8</td><td>87.4</td><td class="dim">84.3</td><td>90.4</td></tr>
<tr><td class="l">다분야 추론 · HLE (도구 없음)</td><td>56.3</td><td class="win">56.5</td><td class="dim">49.8</td><td class="dim">—</td></tr>
<tr><td class="l">다분야 추론 · HLE (도구 사용)</td><td class="win">64.7</td><td>63.9</td><td class="dim">57.9</td><td class="dim">—</td></tr>
<tr><td class="l">컴퓨터 사용 · OSWorld 2.0</td><td class="win">70.6</td><td>66.1</td><td class="dim">55.7</td><td>62.6</td></tr>
<tr><td class="l">에이전트 코딩 · DeepSWE v1.1</td><td>68.8</td><td>69.7</td><td class="dim">59.0</td><td class="win">72.7</td></tr>
<tr><td class="l">에이전트 코딩 · FrontierCode v1.1 (Main)</td><td>53.4</td><td class="win">53.5</td><td class="dim">46.5</td><td>47.5</td></tr>
<tr><td class="l">업무 워크플로 · AutomationBench</td><td class="win">26.0</td><td>17.4</td><td class="dim">17.0</td><td>18.1</td></tr>
<tr><td class="l">법률 · Legal Agent Benchmark (Held-out)</td><td>11.7</td><td class="win">13.3</td><td class="dim">10.4</td><td>2.5</td></tr>
<tr><td class="l">헬스 · HealthBench Professional</td><td>59.8</td><td class="win">66.0</td><td class="dim">57.4</td><td>60.5</td></tr>
<tr><td class="l">생물학 · BioMysteryBench (hard)</td><td class="win">49.4</td><td>46.5</td><td class="dim">42.4</td><td class="dim">—</td></tr>
<tr><td class="l">생물학 · BioMysteryBench (human-solved)</td><td class="win">90.1</td><td>89.0</td><td class="dim">88.5</td><td class="dim">—</td></tr>
</tbody></table></div>
<figcaption class="cap">출처: Anthropic 공식 발표(Claude Opus 5, 2026-07-24). Fable 5·Opus 4.8·GPT-5.6 Sol 수치는 동 발표의 비교 기준. "—"는 미공개. 값이 높을수록 우수하며 단위는 벤치마크별로 다릅니다.</figcaption>
</figure>
</div>

## 3. Gemini 3.6 Flash — 지능의 정점 대신 효율과 통제를 택하다

<figure>
  <img src="/images/ai-trend/google_gemini_flash_key_art_0725.webp" width="1200" height="675" loading="lazy" decoding="async" alt="Gemini 3.6 Flash, 3.5 Flash-Lite, 3.5 Flash Cyber 공개를 알리는 Google 공식 키아트. 어두운 푸른 배경 위에 세 모델명이 흰 글자로 표시되어 있다.">
  <figcaption>Google은 최상위 모델 하나가 아니라 효율·속도·보안에 초점을 둔 Flash 계열 세 모델을 함께 공개했습니다. 이미지: <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" target="_blank" rel="noopener noreferrer">Google 공식 블로그</a>.</figcaption>
</figure>

Google의 선택은 대비를 이룹니다. 이번에 공개된 것은 최상위 등급이 아니라 **Flash 계층 세 종**이었습니다. 주력인 Gemini 3.6 Flash, 가장 빠르고 저렴한 3.5 Flash-Lite, 보안에 특화된 3.5 Flash Cyber입니다. 정작 최상위 등급인 Gemini 3.5 Pro는 "파트너들과 시험 중"이라며 이번에 내놓지 않았습니다. 이번 발표에는 최상위 모델이 빠지고, 널리 쓰이는 실무형 Flash 계층만 공개됐습니다.

가장 눈에 띄는 지표는 토큰 효율입니다. Gemini 3.6 Flash는 이전 세대인 3.5 Flash보다 **출력 토큰을 17% 적게** 씁니다. 같은 답을 더 짧고 간결하게 내놓는다는 뜻에 가깝습니다. 특정 코딩 과제(DeepSWE)에서는 그 절감폭이 최대 65%까지 벌어졌습니다. 출력 토큰은 사용 요금에 직접 반영되므로, 이런 평가 조건에서는 출력 토큰 과금 부담을 낮출 수 있습니다. 다만 실제 총비용은 입력량과 사고 토큰, 작업 성격에 따라 달라집니다. 실제로 3.6 Flash의 출력 단가는 100만 토큰당 7.5달러로, 이전 세대의 9달러에서 내려갔습니다. 성능도 함께 올랐습니다. 코딩(DeepSWE 49% 대 37%), 기계학습 과제(MLE Bench 63.9% 대 49.7%), 컴퓨터 조작 과제(OSWorld-Verified 83.0% 대 78.4%)에서 이전 세대를 앞섰습니다.

<figure>
  <img src="/images/ai-trend/gemini36_evals_figure_0725.webp" width="2000" height="1125" loading="lazy" decoding="async" alt="Gemini 3.6 Flash와 이전 세대의 에이전트 벤치마크 비교. 장기 소프트웨어 엔지니어링, 머신러닝 엔지니어링, 지식 노동, 컴퓨터 사용 네 영역에서 3.6 Flash가 가장 높은 점수를 기록한다.">
  <figcaption>Gemini 3.6 Flash는 DeepSWE·MLE-Bench·GDPval-AA·OSWorld-Verified에서 이전 세대를 앞섰습니다. 출처: <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" target="_blank" rel="noopener noreferrer">Google 공식 블로그</a>.</figcaption>
</figure>

<figure>
  <img src="/images/ai-trend/gemini36_evals_quality_0725.webp" width="2000" height="1125" loading="lazy" decoding="async" alt="Gemini 3.5 Flash와 3.6 Flash의 작업당 평균 출력 토큰 비교. DeepSWE v1.1에서는 27만 6천에서 9만 7천으로, Artificial Analysis Intelligence Index에서는 2만 8천에서 2만 3천으로 줄었다.">
  <figcaption>3.6 Flash는 성능 향상과 함께 작업당 출력 토큰도 줄였습니다. DeepSWE 조건에서는 276K에서 97K로, Artificial Analysis Intelligence Index에서는 28K에서 23K로 감소했습니다. 출처: <a href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" target="_blank" rel="noopener noreferrer">Google 공식 블로그</a>.</figcaption>
</figure>

또 하나 주목할 변화는 **사고량을 조절하는 방식**입니다. Gemini 3.6 Flash는 `thinking_level`이라는 설정으로 추론의 깊이를 minimal·low·medium·high 네 단계 중에서 고를 수 있고(기본값은 medium), 요청의 복잡도에 따라 추론량을 자동으로 조절하는 기능도 갖췄습니다. 쉬운 질문에는 얕게, 어려운 질문에는 깊게 생각하도록 개발자가 통제할 수 있다는 뜻입니다. 이는 앞서 본 Opus 5의 effort 설정과 같은 문제의식을 공유합니다. '얼마나 깊이 생각할지'를 이용자가 상황과 예산에 맞춰 정하도록 여는 것입니다. 참고로 3.6 Flash의 지식 기준 시점은 2026년 3월이며, 입력은 최대 100만 토큰까지 받아들입니다.

여기서 한 가지 짚을 점이 있습니다. 일부 보도에서 3.6 Flash의 성능으로 언급되는 특정 터미널 조작 벤치마크 수치는 사실 같은 날 발표된 **3.5 Flash-Lite의 값**이며, 3.6 Flash의 것이 아닙니다. 숫자를 인용할 때 어느 모델의 성적인지를 구분하는 일이, 발표가 한꺼번에 쏟아질수록 더 중요해집니다.

## 4. 목회와 교육 현장에는 무엇을 뜻하는가

두 발표가 한목소리로 가리키는 방향은, AI를 실제로 쓰는 사람에게 뜻밖에 실용적인 함의를 줍니다. 이제 좋은 도구를 고르는 기준이 '가장 똑똑한 모델인가'에서 '얼마나 믿을 만하고 얼마나 감당할 만한가'로 옮겨가고 있다는 점입니다.

목회 현장을 예로 들면, 설교 준비나 자료 정리에 AI를 쓸 때 마음이 가는 것은 화려한 지능보다 자기 답을 한 번 더 점검하는 신중함입니다. 자기 작업을 검증하고 고쳐 나가는 능력을 앞세운 흐름은, 신학적 정확성이 생명인 현장에도 기대를 걸어 볼 방향입니다. 다만 이 검증 능력은 코딩·문제해결 같은 평가에서 확인된 것이지, 인용이나 신학적 사실의 정확성까지 보장하는 것은 아닙니다. 인용과 교리는 여전히 사람이 원문으로 확인해야 하며, 도구의 자기점검은 그 확인을 돕는 보조일 뿐입니다.

교육 현장에서는 효율과 통제라는 축이 더 와닿습니다. 학교나 교회 교육팀이 제한된 예산으로 콘텐츠를 만들 때, 같은 결과를 더 적은 비용으로 내는 모델과 '얼마나 깊이 생각하게 할지'를 조절하는 기능은 실무의 현실을 반영합니다. 간단한 정리에는 가볍게, 까다로운 기획에는 깊게 자원을 배분할 수 있기 때문입니다.

이번 주 두 발표가 함께 일러 주는 결론은 분명합니다. AI를 도입하려는 조직이 던져야 할 질문은 더 이상 "가장 똑똑한 모델은 무엇인가"가 아닙니다. "우리 일에 충분히 믿을 만하고, 우리 형편에 감당할 만한 모델은 무엇인가"입니다. 지능의 정점을 좇기보다, 손안의 도구가 우리 현장에서 실제로 신뢰할 만하게 작동하는지를 살피는 눈이 지금 더 필요합니다.

---

### 주요 소스 출처 (Source of Truth)
1. **Claude Opus 5 발표** (2026-07-24): [Anthropic 공식 발표](https://www.anthropic.com/news/claude-opus-5) · [Claude Opus 5 System Card](https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf)
2. **Gemini 3.6 Flash 발표** (2026-07-21): [Google 공식 블로그](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
3. **Gemini API — thinking / 가격** : [thinking 문서](https://ai.google.dev/gemini-api/docs/thinking) · [pricing 문서](https://ai.google.dev/gemini-api/docs/pricing)
4. **Gemini 3.6 Flash 모델카드** (지식 컷오프·컨텍스트·벤치마크): [DeepMind 모델카드](https://deepmind.google/models/model-cards/gemini-3-6-flash/)
5. **기반 검증**: 본 기사의 모든 수치는 1차 출처와 대조한 독립 교차검증을 거쳤다.
