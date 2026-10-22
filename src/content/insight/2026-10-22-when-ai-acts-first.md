---
title: "AI가 먼저 찾고 먼저 움직인 하루, 승인 장치도 함께 나왔다"
description: "10월 21~22일 AI 소식. AI가 찾아낸 PHP 취약점 패치, 먼저 챙기는 비서 앱 Claude Duet, OpenAI 모델의 Google Cloud 입점, 공정위 AI 워싱 광고 가이드라인 초안. AI가 먼저 움직이는 만큼 사람이 승인하고 기준을 세우는 장치도 같이 나왔습니다."
category: AI트렌드
pubDate: 2026-10-22
author: "최종학 | Kyle Choi"
tags: ["AI트렌드", "생성형 AI", "AI 보안", "AI 에이전트"]
draft: false
disclaimerRequired: false
factChecked: true
heroImage:
  src: /images/ai-trend/when-ai-acts-first-1022-og.png
  alt: "보랏빛 저녁 하늘 아래, 소포를 실은 작은 배달 로봇이 나무 문 앞 돌계단에 멈춰 서 있고, 문에는 불이 켜진 둥근 황동 손잡이와 체크 표시가 그려진 카드가 붙어 있는 유화풍 그림."
---

필자가 보기에 이번 하루의 AI 소식은 한 방향을 가리켰습니다. AI가 묻기 전에 먼저 찾고 먼저 움직이는 만큼, 사람이 승인하고 기준을 세우는 장치도 함께 나왔습니다. 10월 21일 저녁부터 22일 아침까지, AI가 찾아낸 오래된 보안 결함을 둘러싼 경고와 점검 안내가 이어졌고, 묻기 전에 할 일을 챙기는 비서 앱이 나왔고, 한 회사의 모델이 경쟁 회사의 클라우드로 퍼졌습니다.[^1][^8][^14] 같은 소식들 안에는 행동 전 확인, 구매 승인, 파트너 안전 기준, 광고 기준 초안이 함께 들어 있었습니다.[^8][^12][^17][^18]

## AI가 찾은 PHP 결함, 경고와 점검이 이어지다

PHP는 웹사이트와 웹 애플리케이션을 돌리는 데 쓰이는 오픈소스 프로그래밍 언어입니다.[^1] OpenAI는 10월 21일 오후 4시(한국 시각) 공식 글에서 지난 두 달 동안 PHP의 치명적인 취약점 대응을 이끌었다고 밝혔습니다.[^1] 이 글은 이번 소식 기간(10월 21일 저녁 6시 이후)보다 앞서 나왔고, 패치는 21일에 배포됐다고 연합뉴스가 전했습니다.[^6] 그 뒤 OpenAI의 X 공지와 점검 도구, 보도가 밤사이 이어졌고, 미국 정부 기관의 경고(미국 시각 수요일)도 나왔습니다.

OpenAI에 따르면 보안업체 Calif가 OpenAI의 Patch the Planet 활동 가운데 GPT‑5.6 Sol(원문 표기 그대로)을 써서 치명적 결함 하나를 찾았고, Wiz도 두 취약점(해킹에 악용될 수 있는 보안상 약점)을 독자적으로 발견해 신고했습니다.[^1] 전자신문은 이 결함이 원격 코드 실행, 곧 공격자가 멀리서 남의 서버에 원하는 명령을 실행하게 되는 문제로 이어질 수 있다고 보도했습니다.[^2] TechCrunch는 Google 소속인 Wiz가 자체 에이전트와 Gemini 4 Argon, GPT‑5.6 Sol 등을 써서 여러 취약점을 찾았다고 전했습니다.[^5]

OpenAI는 21일 밤 11시 4분(한국 시각) X에서 PHP가 웹사이트의 약 70%를 돌리는 언어라고 알렸는데, 이 수치는 회사가 밝힌 추정치입니다.[^3] 22일 새벽 1시 35분에는 내 사이트가 영향을 받는지 점검하도록 Codex 스킬(Codex에 붙여 쓰는 작은 기능)을 내놓았습니다.[^4] 공식 글에 따르면 이 스킬은 OpenAI의 코딩 AI인 Codex에서 쓰는 PHP 버전 점검 도구로, 취약할 수 있는 버전을 찾아 줍니다.[^1]

TechCrunch는 미국 국가안보국(NSA)이 수요일(미국 시각) 이 결함을 경고했고 PHP 재단이 패치, 곧 결함을 고친 수정판을 냈다고 보도했습니다.[^5] 연합뉴스는 이 결함이 2024년 독일 STF가 지원한 감사에서 처음 포착됐지만 패치가 미뤄졌고, 8월 11일 PHP 재단에 신고된 뒤 21일 배포됐다고 전했습니다.[^6] 국내에서는 한국인터넷진흥원(KISA)이 업데이트를 권고했다고 같은 기사는 덧붙였습니다.[^6]

실제 악용이 있었는지는 매체마다 말이 달랐습니다. TechCrunch는 OpenAI 설명을 바탕으로 실제 악용 보고는 없었다고 썼고, 전자신문은 외신을 인용해 해커의 공격 시도까지 포착됐다고 보도했습니다.[^5][^2] 두 보도의 시점이 다를 수 있어 어느 한쪽으로 단정하기는 어렵습니다. 전자신문은 네덜란드와 핀란드의 일부 정부기관이 웹사이트를 멈췄다고도 전했습니다.[^2]

OpenAI는 이번 결함을 최근 기억 가운데 가장 영향이 큰 보안 문제의 하나로 본다고 밝혔습니다.[^1] 그러면서 AI가 인터넷 규모의 결함을 찾아낼 수 있지만, 같은 능력이 공격자의 공격 도구 제작도 빠르게 도울 수 있다고 적었습니다.[^1] 별개로 배포 플랫폼 Railway는 10월 21일 공지에서 고객의 환경변수(비밀번호나 API 키처럼 서비스에 필요한 비밀 설정값) 저장 시스템에서 이상 활동을 탐지했고, 이를 AI 추론 업체를 침해하려고 플랫폼 기업들을 노린 공격 시리즈의 일부로 본다고 밝혔습니다(회사 판단).[^7] PHP 결함과 직접 관련이 있다고 밝혀진 것은 아닙니다.

필자가 보기에 이번 일은 AI가 방어 속도와 공격 속도를 함께 끌어올린다는 점을 회사가 스스로 밝힌 사례입니다.

## 먼저 챙기는 개인 비서, Claude Duet

Anthropic은 10월 21일(원문 표기 날짜) Claude Duet을 연구용 미리보기(research preview)로 공개했습니다.[^8] Claude가 먼저 움직이는 에이전트로 일하는 새 앱이라는 설명입니다.[^8] 에이전트는 사람이 맡긴 일을 여러 도구를 써 가며 이어서 처리하는 AI를 뜻합니다.

Anthropic에 따르면 Duet은 신경 써야 할 일을 먼저 알려 주고, 사용자가 자리를 비워도 일을 이어 가며, 사용자를 대신해 행동하기 전에 확인을 받습니다.[^8] 대상은 전문직과 소상공인이고, iOS·Android 앱과 claude.ai에서 쓸 수 있으며, 지금은 미국 Pro·Max 구독자부터 대기자 명단으로 받습니다.[^8] Anthropic의 X 공지는 22일 새벽 4시 9분(한국 시각)에 올라왔습니다.[^9]

The Verge는 Duet이 Claude Opus 5.5를 바탕으로 하고, 매일 아침 요약을 보내며, 결제나 삭제 같은 큰 단계 앞에서는 승인을 요청한다고 보도했습니다.[^10] 초기 버전이라 대화 흐름을 잘못 읽을 수 있다고 Anthropic이 밝혔다는 내용도 같은 기사에 있습니다.[^10] 이 기사는 Duet을 Meta의 Muse, OpenAI의 Dots와 경쟁하는 제품으로 소개했습니다.[^10]

Meta도 같은 날 숫자를 내놨습니다. TechCrunch에 따르면 Meta는 수요일(미국 시각) 3분기 실적 발표에서 AI 앱 Muse 이용자가 1천만 명을 넘었고 쇼핑이 주요 용도라고 밝혔습니다.[^11]

쇼핑 쪽에서는 Walmart가 에이전트에게 문을 열겠다고 밝혔습니다. The Verge는 22일 새벽(한국 시각) Walmart가 다음 달부터 자사 사이트에서 AI 에이전트의 구매를 허용할 계획이라고 보도했습니다.[^12] 기본값은 에이전트의 모든 구매에 사용자 승인을 받는 것이고, 100달러 같은 지출 한도도 정할 수 있다고 이 매체는 전했습니다.[^12] The Verge는 Amazon이 일부 쇼핑 에이전트를 막아 온 것과 대비된다고 짚었습니다.[^12]

개발자 커뮤니티 해커뉴스의 Duet 글에는 댓글 267개가 달렸고, 비밀번호 관리 앱과 연결하는 것이 위험하지 않으냐는 개인 의견도 나왔습니다.[^13]

필자가 보기에 개인 비서 경쟁의 승부처는 얼마나 똑똑한가 못지않게 어디서 멈추고 묻는가입니다. Duet의 승인 요청과 Walmart의 지출 한도가 같은 날 나란히 나온 점이 그 질문을 잘 보여 줍니다.

## OpenAI 모델, Google Cloud로

OpenAI는 10월 21일 밤 9시(한국 시각) 자사 최신 모델과 Codex 작업 흐름을 Google Cloud의 Model Garden에 들여온다고 발표했습니다.[^14] 클라우드는 기업이 서버와 AI를 인터넷으로 빌려 쓰는 서비스이고, Model Garden은 Google Cloud에서 여러 AI 모델을 골라 쓰는 공간입니다. 기업은 Google Cloud Marketplace에서 구매하고 기존 Google Cloud 약정에서 비용을 차감할 수 있습니다.[^14]

다만 정식 제공은 앞으로 몇 주 안에 하겠다는 계획 단계입니다.[^14] Ars Technica는 지금은 일부 기업을 대상으로 한 비공개 미리보기로 제공된다고 보도했습니다.[^15] OpenAI는 글 끝에 Microsoft가 여전히 OpenAI의 주된 클라우드 파트너라고 적었습니다.[^14]

Google Cloud는 같은 날(원문 표기 날짜) 글에서 GPT-6 Astra, GPT-6.1 Sol(이 글의 표기 그대로), GPT-6 Luna를 제공 모델로 나열했습니다.[^16] 또 세 주요 폐쇄형 언어 모델을 모두 제공하는 유일한 대형 클라우드라고 밝혔는데, 이는 회사의 주장입니다.[^16]

OpenAI는 22일 오전 6시(한국 시각) 「Broad access through consistent standards」라는 글을 올렸습니다.[^17] 자사 모델을 호스팅하거나 재판매하는 파트너도 OpenAI와 같은 수준의 안전장치를 유지하고, 위반이 의심되면 조사하고 조치하도록 정책을 맞췄다는 내용입니다.[^17] 이용 정책(Usage Policies)도 갱신한다고 덧붙였습니다.[^17]

필자가 보기에 두 글은 한 쌍으로 읽힙니다. 모델을 파는 곳이 늘어나는 만큼 안전 기준을 파트너와의 약속으로 묶으려는 움직임입니다.

## 국내 소식: 공정위의 「AI 워싱」 광고 기준 초안

지디넷코리아는 22일 오전 10시 공정거래위원회가 「인공지능 관련 표시·광고 가이드라인」 초안을 마련해 11월 11일까지 의견을 받는다고 보도했습니다.[^18] AI 워싱은 실제로는 AI 기술이 없거나 보조적으로만 쓰는데 전부 AI가 하는 것처럼 광고하는 것을 말합니다.[^18] 초안에는 판단 기준과 16개 사례, 자가점검 항목이 들어 있고, AI 가상 인물이나 딥페이크를 쓴 투자 광고 사례도 포함됐다고 이 매체는 전했습니다.[^18] 기사에 따르면 이 가이드라인은 법적 구속력이 없습니다.[^18] AI를 내세운 광고를 만드는 사람은 초안의 판단 기준과 사례를 미리 읽어 두면 좋습니다. 이 문단은 공정위 보도자료 원문이 아니라 지디넷코리아 보도를 바탕으로 정리했습니다.

## 짧게 본 소식: ChatGPT 광고 89개국으로

OpenAI는 10월 21일 밤 10시(한국 시각) ChatGPT 광고를 26개국에 더해 모두 89개국으로 넓힌다고 밝혔습니다.[^19] 광고는 Free와 Go 요금제에만 붙고 Plus·Pro·Enterprise에는 붙지 않습니다.[^19] 광고주가 10만 곳을 넘었고 매주 12억 명 넘는 사람이 ChatGPT를 쓴다는 것은 회사가 밝힌 수치입니다.[^19] 무료·저가 요금제 이용자는 앞으로 대화 화면 안에서 광고를 만날 수 있다는 뜻입니다(회사 발표 기준).

## 활용 팁

- 내 사이트나 쇼핑몰이 PHP로 돌아간다면 호스팅 업체의 업데이트 안내부터 확인해 보세요.[^1]
- AI 비서에 결제나 계정을 연결하기 전에 승인 단계가 있는지 먼저 살펴보세요.[^8][^12]

[^1]: [OpenAI, Patch the Planet: global response coordination as agents uncover critical vulnerabilities](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/)
[^2]: [전자신문, AI가 발견한 PHP 치명적 취약점 보도](https://www.etnews.com/20261022000012)
[^3]: [OpenAI X 게시, PHP 취약점 공지](https://x.com/OpenAI/status/2112907856018309586)
[^4]: [OpenAI X 게시, PHP 점검용 Codex 스킬](https://x.com/OpenAI/status/2112945805686604033)
[^5]: [TechCrunch, OpenAI와 Wiz가 찾은 PHP 취약점 보도](https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/)
[^6]: [연합뉴스, 2년 묵은 PHP 보안 구멍 보도](https://www.yna.co.kr/view/AKR20261022053600017)
[^7]: [Railway, Security Disclosure: Wednesday October 21st](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)
[^8]: [Anthropic, Introducing Claude Duet](https://claude.com/resources/articles/claude-duet)
[^9]: [Claude X 게시, Claude Duet 공개](https://x.com/claudeai/status/2112984664256241837)
[^10]: [The Verge, Anthropic takes on Muse with Claude Duet](https://www.theverge.com/ai-artificial-intelligence/1015843/anthropic-claude-duet-ai-agent)
[^11]: [TechCrunch, Meta says Muse has over 10M users](https://techcrunch.com/2026/10/21/meta-says-muse-has-over-10m-users-with-shopping-a-top-activity/)
[^12]: [The Verge, Walmart is inviting AI agents to shop for you](https://www.theverge.com/ai-artificial-intelligence/1015715/walmart-ai-shopping-agents)
[^13]: [Hacker News, Claude Duet 토론](https://news.ycombinator.com/item?id=50186037)
[^14]: [OpenAI, OpenAI models are coming to Google Cloud](https://openai.com/index/openai-models-google-cloud)
[^15]: [Ars Technica, OpenAI's latest AI models are coming to Google Cloud and Antigravity](https://arstechnica.com/ai/2026/10/openais-latest-ai-models-are-coming-to-google-cloud-and-antigravity/)
[^16]: [Google Cloud, Google Cloud brings OpenAI models to customers](https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers)
[^17]: [OpenAI, Broad access through consistent standards](https://openai.com/index/broad-access-through-consistent-standards)
[^18]: [지디넷코리아, 공정위 AI 워싱 광고 기준 보도](https://zdnet.co.kr/view/?no=20261022093913)
[^19]: [OpenAI, ChatGPT Ads expands to 26 new countries](https://openai.com/index/chatgpt-ads-expands-26-new-countries)
