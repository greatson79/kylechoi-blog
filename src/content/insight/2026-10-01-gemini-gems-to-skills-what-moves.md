---
title: "개인 계정 Gemini Gems, 11월부터 skills로: 옮겨지는 것과 안 옮겨지는 것"
description: "구글이 Gemini에 skills를 내놓고 Gems를 계정 유형별로 종료합니다. 개인 계정은 2026년 11월부터입니다. 자동으로 옮겨지는 것과 옮겨지지 않는 것, 지금 챙겨 둘 것을 정리합니다."
category: AI트렌드
pubDate: 2026-10-01
author: Kyle Choi
tags: ["AI트렌드", "Gemini", "Gems", "생성형 AI"]
draft: false
factChecked: true
heroImage:
  src: /images/ai-trend/hero_ai-trend_1001.png
  alt: "어두운 청록빛 공간에서 빈 반지 받침을 떠난 보석 하나가 위에서 내려오는 빛줄기를 따라 떠오른다. 아끼던 Gems가 새 그릇인 skills로 옮겨 가는 모습을 나타낸다"
---

Gemini에 자주 쓰는 Gems를 만들어 두셨다면, 이번 발표는 바로 그 Gems 이야기입니다. 구글은 블로그 게시일 표기로 2026년 9월 30일, Gemini 채팅에 skills(자주 쓰는 지시를 한 번 저장해 두고 채팅에서 불러 쓰는 기능)를 내놓으면서 개인 계정의 Gems 지원을 2026년 11월부터 끝낸다고 밝혔습니다.[^58][^40][^1] 직접 만든 Gems는 Gems가 사라질 때 skills로 자동으로 옮겨 준다고 했지만, 옮겨지지 않는 것도 있습니다.[^2][^7][^22]

그러면 세 가지가 궁금해집니다. 내가 만든 Gems는 어떻게 되는지, 지금 무엇을 챙겨 둬야 하는지, skills는 Gems와 무엇이 다른지입니다. 이 순서로 답하고, 마지막에 같은 주 구글이 발표한 Gemini 4 Argon의 제한 공개도 짚겠습니다.[^N1]

> **핵심 정리**
> - 구글은 Gemini 채팅에 skills를 내놓고, `/이름`으로 불러 쓰거나 관련 요청에서 자동 적용할 수 있다고 설명합니다.[^40][^31][^33]
> - 개인 계정의 Gems 지원은 2026년 11월부터 중단 예정이며, Workspace(회사·학교 같은 조직용 Google 계정) business·enterprise·nonprofit은 2027년 3월, education은 2027년 6월로 안내됐습니다.[^1][^4][^5][^6]
> - 자동 이전을 기다리더라도 Gem의 지시문과 Knowledge 파일을 확인하고, 이전 뒤 지원되지 않는 기능이 있는지 살펴보는 편이 좋습니다.[^15][^16][^22][^26]

## 1. 구글이 무엇을 바꿨나요?

구글은 게시일을 “Sep 30, 2026”으로 표기한 블로그에서 Gemini 채팅에 skills를 내놓는다고 알렸고,[^40] Gemini 릴리스 노트는 게시 항목의 날짜를 “2026.09.30”으로 표기하며 skills가 Gems를 곧 대체한다고 안내했습니다.[^58][^44][^45] 구글은 Gems가 종료될 때 기존 Gems를 skills로 자동 이전하겠다고 밝혔습니다.[^2]

구글 블로그는 skills가 전 세계에 출시된다고 표현하며 모든 Google AI 구독 등급을 언급했고, 개인 계정에서는 현재 18세 이상이 이용할 수 있다고 안내했습니다.[^39][^40][^41] 다만 국가별·언어별 제공 목록은 확인되지 않으므로, “전 세계”라는 표현만으로 특정 국가의 이용 가능 여부를 단정할 수는 없습니다.[^40] Workspace 고객에게는 이 기능을 몇 주 안에 제공하겠다고 밝혔습니다.[^42] 관리자 문서에는 날짜가 더 자세히 나옵니다. Workspace에서는 Rapid Release 도메인이 2026년 10월 5일, Scheduled Release 도메인이 10월 19일부터 롤아웃을 시작하고, Gemini 앱에서는 10월 13일부터 모든 사용자에게 롤아웃이 시작됩니다.[^50][^51]

skills는 탭을 옮기지 않고 지금 대화하는 채팅 안에서 바로 쓰는 지시문 묶음입니다.[^38][^45] 구글은 프롬프트 입력창에 `/`와 skill 이름을 입력해 부르거나, 요청과 관련이 있으면 Gemini가 자동으로 적용할 수 있다고 설명합니다.[^31][^32][^33] 대화에서 맞춤 skill을 만들고 일치하는 요청에 자동 실행할 수 있으며, 한 채팅에서 여러 skill을 함께 쓰고 텍스트 문서·PDF·이미지를 참고 파일로 넣을 수도 있습니다.[^34][^35][^37]

## 2. 내가 만든 Gems는 어떻게 되나요?

구글 블로그와 도움말은 개인 Google 계정의 Gems 지원 중단을 2026년 11월, Workspace business·enterprise·nonprofit은 2027년 3월, Workspace education은 2027년 6월로 안내합니다.[^1][^4][^5][^6] 개인 계정은 공식 안내에 「11월」까지만 나오고 정확한 날짜는 없습니다.[^1][^4]

| 계정 유형 | 구글이 안내한 Gems 지원 중단 시기 | 함께 확인할 점 |
|---|---|---|
| 개인 Google 계정 | 2026년 11월(정확한 일자는 공식 블로그·도움말에 없음)[^1][^4] | Gems가 종료될 때 자동 이전 예정[^2][^3] |
| Workspace business·enterprise·nonprofit | 2027년 3월(블로그·도움말 기준). 관리자 문서의 business·enterprise 항목에는 “No sooner than March 1, 2027”이라고 표기[^5][^10] | 남은 Gems는 draft skills로 이전된다고 안내[^13] |
| Workspace education | 2027년 6월; 관리자 문서에는 “No sooner than June 1, 2027”이라고 표기[^6][^11] | 남은 Gems는 draft skills로 이전된다고 안내[^13] |

관리자 문서의 단계표에서 “November 17, 2026”은 Gems가 Gemini 앱의 Settings로 이동하는 날입니다. 같은 항목은 그 뒤에도 모든 사용자가 Gems를 계속 만들고, 편집하고, 쓸 수 있다고 설명합니다. 그러니 이 날짜에 Gems가 사라지는 것은 아닙니다.[^12]

자동 이전은 모든 자료가 그대로 따라온다는 약속과 다릅니다. 구글 도움말은 지원되는 파일(supported files)과 함께 Gems를 skills로 옮긴다고 적었고, GitHub 파일은 현재 skills에서 지원되지 않는다고 명시합니다.[^22][^21] 지원되는 파일의 전체 목록은 공식 안내에서 확인하지 못했습니다.[^22] 공유 기능은 skills에 앞으로 추가될 기능으로 안내됐을 뿐, Gems의 공유 링크가 그대로 옮겨지는지는 공식 안내에 없습니다.[^28]

예외도 있습니다. 구글은 Google Labs의 Gems(Gems by Google Labs)가 11월에 종료되며 skills로는 이전되지 않는다고 밝혔고, 미니 앱 제작 실험 Opal도 같은 시기에 종료된다고 안내했습니다.[^7][^8][^9]

## 3. skills는 Gems와 무엇이 다른가요?

제가 보기에 가장 큰 변화는 저장해 둔 Gems를 별도 대화 공간에서 쓰는 방식에서, 현재 채팅에서 불러오는 skills 방식으로 옮겨간다는 점입니다.[^27][^31][^38] 구글은 skill을 `/이름`으로(구글은 곧 `@이름`으로 바뀐다고 안내) 부르거나 요청과 맞으면 자동 적용할 수 있고, 여러 개를 한 채팅에서 겹쳐 쓸 수 있다고(스택, stack) 설명합니다.[^31][^32][^33][^35]

| 비교 항목 | Gems에 대해 확인된 내용 | skills에 대해 확인된 내용 |
|---|---|---|
| 만드는 단위 | 도움말은 Gem의 이름·설명·지시문을 새 skill에 복사하는 절차를 안내합니다.[^16] | 이름·설명·지시문을 담고, 오픈 Markdown 기반 `SKILL.md` 형식을 사용합니다.[^16][^49] |
| 부르는 법 | 도움말은 Gems와 달리 skills는 탭을 옮기지 않고 지금 채팅에서 바로 쓴다고 설명합니다.[^38] | 현재 채팅에서 `/이름`으로 부르며, 구글은 이 호출 방식이 곧 `@이름`으로 바뀐다고 안내합니다.[^31][^32][^38] |
| 여러 개 함께 쓰기 | 확인한 자료에는 Gems를 함께 쓰는 방식이 설명돼 있지 않습니다. | 한 채팅에서 여러 skills를 겹쳐 쓸 수 있습니다. 구글은 이것을 스택(stack)이라고 부릅니다.[^35][^36] |
| 참고 파일 | 도움말은 Gem의 “Knowledge” 아래 파일을 내려받는 절차를 안내합니다.[^15] | 텍스트 문서·PDF·이미지를 참고 파일로 포함할 수 있습니다.[^37] |

이름만 바뀌는 일이 아닙니다. 반복해서 쓰던 지시를 채팅 안에서 바로 꺼내 쓰는 쪽으로 일하는 순서가 바뀝니다(제 해석입니다). 다만 기능이 완전히 같아지는 것은 아닙니다. 구글 도움말은 Gems에서 제공하던 기본 도구 대부분이 현재 skills에서 작동하지 않는다고 하며, 동영상·음악 생성, Canvas, Deep Research, Guided Learning을 예로 들었습니다.[^26]

skills에는 Gems와 달리 그 skill로 나눈 최근 대화를 모아 보여 주는 전용 페이지가 없고, 공유·Google Drive 파일·Gemini Notebook 연동은 “coming weeks”에 추가될 기능으로 안내됐습니다.[^27][^28] 지금 파일 업로드로 skill을 만들 수 있는 곳은 Mac 앱과 Gemini 웹이며, 한 번에 활성화할 수 있는 skill은 100개입니다.[^23][^24]

이 형식은 어디서 왔을까요. 구글 관리자 문서는 skills가 오픈 Markdown 기반 `SKILL.md` 형식이라고 설명하고, Agent Skills 표준 사이트는 이 형식이 Anthropic에서 개발되어 오픈 표준으로 공개됐다고 밝힙니다.[^49][^65][^66] 제 해석으로는 여러 AI 제품이 공유 가능한 작업 지시문 형식을 채택하는 흐름으로 볼 수 있지만, 확인된 사실만으로 구글이 특정 제품을 따라 했다고 말할 수는 없습니다.[^49][^65]

## 4. 그래서 지금 무엇을 옮겨야 하나요?

구글은 자동 이전을 예고했지만, 도움말에는 직접 skill로 옮기는 절차도 있습니다.[^2][^3][^15][^16] 그래서 마감일만 기다리기보다 어떤 Gem을 자주 쓰는지와 그 안의 자료가 새 방식에서도 필요한지 먼저 정리해 두시길 권합니다.[^22][^26]

- **자주 쓰는 Gems를 적어 둡니다.** Gem 이름과 맡기던 일을 기록해 두면 이전 뒤 무엇을 확인할지 놓치지 않습니다.[^16]
- **지시문과 Knowledge 파일을 따로 보관합니다.** 도움말은 Knowledge 아래 파일을 각각 내려받고, Gem의 이름·설명·지시문을 새 skill에 복사하는 방법을 안내합니다.[^15][^16][^20]
- **참고 파일과 형식을 확인합니다.** 파일을 함께 옮기려면 `SKILL.md`가 포함된 ZIP을 내려받아 폴더에 합치는 절차가 있고, 폴더 이름은 skill 이름과 같아야 합니다.[^18][^19] 다른 플랫폼에서 만든 skill은 `SKILL.md` 파일을 올려 가져올 수 있습니다.[^25]
- **이전 뒤 기능을 살펴봅니다.** 특히 Gem에서 영상·음악·Canvas·Deep Research·Guided Learning을 사용했다면 같은 기능을 바로 쓸 수 있다고 가정하지 않는 편이 좋습니다.[^26] 공유, Drive, Gemini Notebook 기능도 현재가 아니라 “coming weeks”에 제공될 예정입니다.[^28]
- **Workspace에서는 관리자와 확인합니다.** Gemini 앱과 Workspace 앱 사이에서 skills가 동기화되지 않으며, Workspace Studio의 새 흐름에는 Ask a Gem 단계를 추가할 수 없지만 기존 흐름은 2027년까지 작동한다고 안내됐습니다.[^29][^30]

예를 들어 수업 준비용 Gem을 만들어 두었다면, 이름·설명·지시문을 복사하고 Knowledge 파일을 각각 내려받을 수 있습니다.[^15][^16][^20] 자동 이전을 기다리는 경우에도 지원 파일의 범위가 한정돼 있으니, 새 skill에서 필요한 자료와 결과가 이어졌는지 확인하는 절차를 권합니다.[^22][^26]

## 5. 같은 주 구글의 또 다른 결정: Gemini 4 Argon은 왜 「방어자 먼저」인가요?

구글은 Gemini 4 Argon을 Fairwind Program을 통해 신뢰된 사이버 방어자에게 우선 제공한다고 밝혔습니다.[^N1] 구글은 이 수준의 첨단 기능을 안전하게 공개하려면 단계적 접근이 필요하다고 설명했습니다.[^N2]

구글은 신뢰된 방어자와 자사 내부 팀에 사이버 가드레일을 적용하지 않은 Argon을 제공해 방어 역량을 온전히 활용하게 한다고 밝혔습니다.[^N5] Google DeepMind 공식 X 계정도 Fairwind Program의 신뢰된 테스터에게 “rolling out today”라고 알렸습니다.[^N11]

일반 개발자·기업·소비자에게 공개할 날짜는 제시되지 않았습니다. 구글은 초기 테스터의 의견을 모으고 안전장치를 다듬은 뒤 “as soon as possible” 제공하겠다고 했으며, 미국 정부의 자발적 사전 공개 접근 절차에도 참여 중이라고 밝혔습니다.[^N3][^N4][^N6]

성능과 가격은 구글 발표로 한정해 읽어야 합니다. 구글은 Argon이 DeepSWE v1.1에서 77.9%로 최고 수준을 새로 세웠다고 밝혔고, 출력 토큰 한도를 기존 64K에서 1M으로 늘린다고 설명했습니다.[^N8][^N9] 구글은 Argon이 실무 소프트웨어 개발, 법률·금융 등 기업 지식 업무, 사이버 방어에서 성능을 낸다고 소개했습니다.[^N10]

도입 기간 가격은 입력 토큰 100만 개당 $2, 출력 토큰 100만 개당 $10이며, 캐시 입력 토큰은 입력 가격에서 95% 할인된다고 구글은 밝혔습니다.[^N13] 도입 기간이 끝난 뒤에는 입력 $4, 출력 $20이 적용된다는 것이 구글의 안내이며, Logan Kilpatrick의 공식 X 게시물도 도입가를 “$2 in and $10 out”으로 제시했습니다.[^N7][^N12]

제 해석으로는 두 발표는 기능을 공개하는 폭과 속도를 다르게 정한 사례입니다. 구글은 skills를 Gemini 채팅에 전 세계 출시한다고 표현했지만 Workspace 제공은 몇 주 안으로 안내했고, Argon은 방어자 시험과 안전장치 보강을 거쳐 확대하겠다고 밝혔습니다.[^40][^42][^N1][^N4][^N6]

## 6. X 공식 계정에서는 어떻게 알렸나요?

skills와 Gems 종료는 구글 공식 블로그와 Gemini 릴리스 노트에 실렸고, 같은 날 Gemini 앱 공식 계정(@GeminiApp)과 구글 계정(@Google)도 X에 알렸습니다.[^58][^44][^X1][^X3] 시각은 X가 표시하는 협정 세계시(UTC) 기준입니다.

| 계정 | 게시 시각(UTC) | 원문 | 요지 |
|---|---|---|---|
| @GeminiApp | 2026-09-30 16:04 | “… Skills are saved sets of instructions for specific tasks that you do time and time again.”[^X1] | skills는 자주 하는 일을 위한 지시문 모음 |
| @GeminiApp | 2026-09-30 16:05 | “Gems will automatically migrate into Skills.”[^X2] | Gems는 skills로 자동 이전 |
| @GeminiApp | 2026-09-30 16:05 | “Skills are rolling out globally in Gemini today, and expanding to @GoogleWorkspace business, enterprise, nonprofit, and education customers in the coming weeks.”[^X3] | 오늘 전 세계 출시, Workspace 고객에게는 몇 주 안에 확대 |
| @Google | 2026-09-30 16:18 | “We're introducing skills in @GeminiApp to help you automate your most repetitive tasks.”[^X4] | 반복 작업을 자동화하는 skills 소개 |
| @Google | 2026-09-30 16:18 | “… we’ll automatically migrate your Gems into skills when Gems go away.”[^X5] | Gems가 사라질 때 skills로 자동 이전 |

X 게시물도 블로그와 같은 내용입니다. 계정 유형별 정확한 일정과 옮겨지지 않는 항목은 X보다 구글 블로그와 도움말에 자세히 나옵니다.[^1][^4][^7]

Argon은 같은 날 약 네 시간 뒤 여러 공식 계정이 알렸습니다.

| 계정 | 게시 시각(UTC) | 원문 | 요지 |
|---|---|---|---|
| @GoogleDeepMind | 2026-09-30 20:03 | “Introducing Gemini 4 Argon – our new frontier model. It’s built for complex workflows across coding, enterprise knowledge work, and cybersecurity defense – rolling out today to a set of trusted testers through our Fairwind Program.”[^X6] | 코딩·기업 지식 업무·사이버 방어용 새 모델을 Fairwind Program의 신뢰된 테스터에게 먼저 공개 |
| @GoogleDeepMind | 2026-09-30 20:03 | “… Feedback from early testers will help us strengthen our systems before we roll out more broadly to developers, enterprises, and consumers soon.”[^X7] | 초기 테스터 의견으로 시스템을 보강한 뒤 개발자·기업·소비자에게 넓힐 예정 |
| @GoogleAI | 2026-09-30 20:05 | “Announcing Gemini 4 Argon, our new frontier model. Argon is built to sustain deep reasoning across complex, long-horizon workflows and delivers frontier performance in complex workflows across real-world software engineering, enterprise knowledge work like legal and finance, and …”[^X8] | 복잡하고 긴 작업에서 깊은 추론을 이어 가도록 만든 새 모델이며, 소프트웨어 개발과 법률·금융 같은 기업 지식 업무 성능을 앞세움 |
| @OfficialLoganK | 2026-09-30 20:03 | “… Argon is priced at $2 in and $10 out during introductory pricing!”[^X9] | 도입 기간 가격(입력 $2·출력 $10, 100만 토큰당) |


## 마무리

이번 주에 할 일은 사용 중인 Gems와 그 안의 지시문·Knowledge 파일을 목록으로 정리하는 것입니다.[^15][^16][^20] 이후 계정 유형별 공식 일정과 skills에서 빠진 기능을 대조하면, 자동 이전을 기다릴지 직접 옮길지 판단하는 데 도움이 됩니다.[^1][^4][^5][^6][^22][^26]

## 참고 출처

[^1]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^2]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^3]: https://support.google.com/gemini/answer/18560919?hl=en
[^4]: https://support.google.com/gemini/answer/18560919?hl=en
[^5]: https://support.google.com/gemini/answer/18560919?hl=en
[^6]: https://support.google.com/gemini/answer/18560919?hl=en
[^7]: https://support.google.com/gemini/answer/18560919?hl=en
[^8]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^9]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^10]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^11]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^12]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^13]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^15]: https://support.google.com/gemini/answer/18560919?hl=en
[^16]: https://support.google.com/gemini/answer/18560919?hl=en
[^18]: https://support.google.com/gemini/answer/18560919?hl=en
[^19]: https://support.google.com/gemini/answer/18560919?hl=en
[^20]: https://support.google.com/gemini/answer/18560919?hl=en
[^21]: https://support.google.com/gemini/answer/18560919?hl=en
[^22]: https://support.google.com/gemini/answer/18560919?hl=en
[^23]: https://support.google.com/gemini/answer/18560919?hl=en
[^24]: https://support.google.com/gemini/answer/18560919?hl=en
[^25]: https://support.google.com/gemini/answer/18560919?hl=en
[^26]: https://support.google.com/gemini/answer/18560919?hl=en
[^27]: https://support.google.com/gemini/answer/18560919?hl=en
[^28]: https://support.google.com/gemini/answer/18560919?hl=en
[^29]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^30]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^31]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^32]: https://support.google.com/gemini/answer/18560919?hl=en
[^33]: https://support.google.com/gemini/answer/18560919?hl=en
[^34]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^35]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^36]: https://support.google.com/gemini/answer/18560919?hl=en
[^37]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^38]: https://support.google.com/gemini/answer/18560919?hl=en
[^39]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^40]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^41]: https://support.google.com/gemini/answer/18560919?hl=en
[^42]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^44]: https://gemini.google/release-notes/?hl=en
[^45]: https://gemini.google/release-notes/?hl=en
[^49]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^50]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^51]: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
[^58]: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
[^65]: https://agentskills.io/
[^66]: https://agentskills.io/
[^N1]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N2]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N3]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N4]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N5]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N6]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N7]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N8]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N9]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N10]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^N11]: https://x.com/GoogleDeepMind/status/2105388084154056939
[^N12]: https://x.com/OfficialLoganK/status/2105388054274080946
[^N13]: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
[^X1]: https://x.com/GeminiApp/status/2105327839054835886
[^X2]: https://x.com/GeminiApp/status/2105328195511984523
[^X3]: https://x.com/GeminiApp/status/2105328196816457902
[^X4]: https://x.com/Google/status/2105331451294314809
[^X5]: https://x.com/Google/status/2105331453470900609
[^X6]: https://x.com/GoogleDeepMind/status/2105388084154056939
[^X7]: https://x.com/GoogleDeepMind/status/2105388087367127256
[^X8]: https://x.com/GoogleAI/status/2105388478683119904
[^X9]: https://x.com/OfficialLoganK/status/2105388054274080946
