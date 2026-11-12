---
title: "Gemini 4 Carbon은 Argon 도입가와 같은 값에 나왔고, DeepMind는 Signal 암호 코드를 4주 만에 증명했다고 밝혔어요"
description: "11월 10일부터 12일까지의 AI 소식이에요. Google은 Gemini 4 Carbon을 Argon 도입가와 같은 값에 공개했고, DeepMind는 Signal 코드 형식 검증을 4주 만에 마쳤다고 밝혔어요. 순위·비용 비교는 모두 회사 발표예요."
category: AI트렌드
pubDate: 2026-11-12
author: "최종학 | Kyle Choi"
tags: ["AI트렌드", "AI 에이전트", "생성형 AI", "AI 정책"]
draft: false
disclaimerRequired: false
factChecked: true
heroImage:
  src: /images/ai-trend/gemini-4-carbon-alphaproof-code-1112-og.png
  alt: "크림색 바탕의 나무 탁자 위에 놋쇠 저울이 수평을 이루고 있고, 왼쪽 접시에는 작은 겨자색 돌 하나, 오른쪽 접시에는 큰 남색 돌 하나가 놓여 있으며, 저울 앞에는 닫힌 놋쇠 자물쇠가 놓인 그림"
---

## 오늘의 한 줄

제가 보기엔 최상위 AI 모델 경쟁이 이번엔 가격으로 옮겨갔어요. Google은 「가장 강한 모델」이라고 소개한 Gemini 4 Carbon을 Gemini 4 Argon 도입가와 같은 입력 100만 토큰당 2달러에 내놓았어요. 한편 AI 회사들은 숫자로 평가받기 시작했어요. Anthropic은 상장 설명회에서 재무를 공식 자료로 냈고, OpenAI 매출은 아직 보도로만 전해져요. AI는 보안의 양쪽에도 등장했어요. 코드를 수학으로 증명하는 데 쓰였고, AI로 만든 앱이 누구나 열 수 있게 공개돼 있다는 보고도 나왔어요. 여기까지는 제 해석이고, 아래는 11월 10일 오후 2시부터 11월 12일 아침까지의 소식이에요.

## 사람들 반응

### [Anthropic이 상장 설명회를 시작하며 3분기 재무 수치를 공개했고, OpenAI 매출은 보도로만 전해졌어요↗](https://www.anthropic.com/news/roadshow-launch)

Anthropic은 미국 날짜 11월 10일, 주식을 처음 증권시장에 내놓는 상장(IPO)을 앞두고 투자자 설명회(로드쇼)를 시작했다고 밝혔어요. 예정 공모가(처음 파는 주식 1주의 가격)는 70~78달러이고 나스닥에 'ANT'로 상장을 신청했어요.

- 같은 날 연 안내 페이지에 따르면 3분기 매출은 170억 달러로 전년 같은 분기의 12배가 넘고, 조정 영업이익률은 15%예요. 순손실 233억 달러에는 회사 가치가 오르며 전환사채 등의 장부 가치가 바뀐 데서 생긴, 현금이 나가지 않는 비용 219억 달러가 들어 있다고 회사 각주가 설명해요.
- TechCrunch는 상장 신청 서류(S-1)를 인용해 공동창업자 7명이 각자 3,378,378주를 팔 예정이고 매각 뒤에도 합쳐서 의결권 51.1%를 가진다고 전했어요.
- 11월 11일 TechCrunch는 Bloomberg가 익명 소식통을 인용해 OpenAI의 3분기 매출이 처음 100억 달러를 넘었다고 보도했다고 전했어요. 2분기 약 67억 달러(WSJ 보도를 인용한 수치)에서 50% 가까이 늘었고, Bloomberg는 조정 영업이익률이 -150%에서 -109%로 좁혀졌다고 했어요. OpenAI가 직접 밝힌 숫자는 아니에요.

**얻는 것** 회사가 낸 숫자와 언론이 전한 숫자를 나눠 읽는 눈을 기를 수 있어요.

**지금 할 일** →안내 페이지의 각주 달린 숫자 하나를 읽고 회사가 한 말과 TechCrunch가 한 말을 나눠 읽어 봐요. 투자 조언이 아니에요.

**왜 지금** 공모가는 예정 범위이고, 등록 서류의 효력이 생기기 전에는 주식을 사고팔 수 없다고 회사 글에 적혀 있어요. Bloomberg 원문은 열지 못했어요.

출처: Anthropic 공식 글과 IPO 안내 페이지, TechCrunch(S-1·Bloomberg 인용 보도) · 7/10

### [뉴욕주가 AI 안전법 집행을 시작하며 대형 AI 개발사 등록 포털을 열었다고 TechCrunch가 전했어요↗](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/)

TechCrunch는 뉴욕주가 미국 시각 11월 10일 등록 포털을 열었고, Anthropic과 OpenAI 같은 대형 프런티어(가장 앞선 수준의) AI 개발사는 2027년 1월 1일까지 등록해야 한다고 전했어요.

- RAISE Act는 연 매출 5억 달러가 넘는 개발사에게 안전 계획 공개, 심각한 안전 사고 72시간 안 보고, 모델 투명성 보고서를 요구해요.
- 새 기관 DIGIT이 집행을 맡고, 위반하면 1건에 최대 100만 달러, 이후 위반에는 최대 300만 달러가 붙을 수 있다고 해요.

**얻는 것** 주 정부가 AI 개발사에게 요구하는 의무의 모양을 알 수 있어요.

**지금 할 일** →TechCrunch 글에서 법이 요구하는 세 가지를 찾아 봐요.

**왜 지금** 등록 기한은 2027년 1월 1일이에요. 뉴욕주 발표문은 열지 못해서 TechCrunch 보도에만 기대고 있어요.

출처: TechCrunch · 6/10

### [한국이 IMD 세계 디지털·AI 경쟁력 평가에서 70개국 중 10위를 했다고 과기정통부가 밝혔어요↗](https://www.aitimes.com/news/articleView.html?idxno=217238)

AI타임스는 과학기술정보통신부가 11일, 스위스 국제경영개발원(IMD)의 2026년 평가에서 한국이 70개국 중 10위로 지난해보다 8계단 올랐다고 밝혔다고 전했어요. 이 평가는 여러 나라를 디지털·AI 관련 지표로 견줘 순위를 매겨요.

- 기술인프라와 효율성은 각각 3위, 올해 새로 생긴 'AI 도입 지수'는 8위예요. 반면 '기업의 AI 보안위험 이해'는 25위, '법제화된 AI 정책'은 30위로 상대적으로 낮다고 기사가 짚었어요.
- 같은 날 중소벤처기업부가 2030년까지 AI 유니콘 20곳과 데카콘 1곳을 키우겠다는 전략을 발표했다고 AI타임스가 따로 전했어요.

**얻는 것** AI 도입은 상위권인데 보안 이해와 법제는 낮다는 점을 숫자로 볼 수 있어요.

**지금 할 일** →내가 쓰는 AI 서비스의 보안 설정 화면을 열어 켜진 항목을 하나 확인해 봐요.

**왜 지금** IMD 원문과 보도자료는 열지 못했어요. 높은 회복력과 정부 의지가 반영됐다는 해석은 과기정통부 담당자의 말이에요.

출처: AI타임스(과기정통부·중기부 발표 인용) · 5/10

## 새로 나왔어요

### [Google이 가장 강한 모델 Gemini 4 Carbon을 정식 출시했고, 가격은 Argon의 도입가와 같아요↗](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/)

Google은 한국 시각 11월 11일 새벽 1시(미국 날짜 11월 10일) 글에서 Gemini 4 Carbon을 개발자, 기업, 과학자, 일반 사용자에게 공개한다고 밝혔어요. 회사 설명으로는 가장 강한 모델이고, 사이버보안과 길게 이어지는 에이전트(스스로 여러 단계를 이어서 일하는 AI) 작업에 강해요.

- 가격은 입력 100만 토큰(AI가 글을 읽고 쓰는 조각 단위)당 2달러, 출력 100만 토큰당 10달러로, Google은 Gemini 4 Argon의 도입가와 같다고 밝혔어요. 글 아래 주석에는 도입 기간이 11월 30일에 끝나면 입력 4달러, 출력 20달러가 적용된다고 적혀 있어요.
- API는 유료 개발자와 기업 모두에게 열렸고, Gemini 앱과 검색 AI 모드, 개발 도구 Antigravity는 Google AI Ultra 구독자에게 순차 적용 중이에요. Antigravity의 /swarm(프롬프트 하나를 에이전트 팀으로 바꾸는 기능)은 미리보기예요.
- Google이 든 성능 표(벤치마크, 같은 문제로 AI 성능을 재는 시험)에서 CursorBench 4.0, Perplexity의 WANDR, Zapier의 AutomationBench는 1위이고 다음 외부 모델보다 작업당 비용이 2배 이상 낮다고 해요. Artificial Analysis와 함께 만든 새 시험 MKA는 2위이고, 1위보다 작업당 평균 비용이 6배 이상 낮다고 했어요.

**얻는 것** 어려운 일에는 Carbon, 보통 일에는 Argon이라는 Google의 모델 고르는 기준을 알 수 있어요.

**지금 할 일** →내 일이 아주 어려운 여러 단계 작업인지 보통 업무인지 나눠 봐요. Google은 Carbon이 Argon보다 토큰을 더 쓰며 깊이 따지고, 대부분의 업무에는 Argon이 알맞다고 설명했어요.

**왜 지금** 순위와 비용 비교는 모두 Google이 밝힌 내용이에요. 앱과 검색은 순차 적용 중이라 아직 안 보일 수 있어요.

출처: Google 공식 블로그 · 8/10

### [Anthropic이 Claude Sheets, Whiteboards, Data를 내놨고 회의에 참여하는 Claude Meetings는 곧 출시된다고 예고했어요↗](https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors)

Anthropic은 미국 날짜 11월 10일 글에서 팀이 Claude와 함께 만드는 새 결과물 형식(아티팩트) 세 가지를 소개했어요.

- Claude Sheets는 팀과 Claude가 스프레드시트를 함께 만들고, Claude Whiteboards는 회의에서 아이디어를 펼쳐 놓고 정리를 Claude에게 맡기는 화이트보드예요. Claude Data(옛 이름 Dashboards)는 Snowflake나 Salesforce 같은 도구에 연결해 대시보드를 만들어요.
- Anthropic의 안내 글에 따르면 세 가지는 모든 유료 요금제에서 쓸 수 있어요. Whiteboards와 Sheets는 베타이고, Enterprise 요금제에서는 이 둘이 기본으로 꺼져 있어요.
- Adobe, Atlassian 같은 앱을 Claude 안에서 바로 쓰는 interactive connectors도 넓어졌고, 회사는 커넥터와 플러그인이 9,000개 넘는다고 설명했어요. 회의에 Claude를 넣는 Claude Meetings는 글에 '곧 출시'라고만 적혀 있고 시점은 없어요.

**얻는 것** 개발자가 아니어도 표와 화이트보드, 대시보드를 Claude와 만드는 방향을 볼 수 있어요.

**지금 할 일** →자주 만드는 표 하나, 예를 들어 월별 지출표를 Claude와 같이 만들어 봐요.

**왜 지금** 일부 언론은 Claude Meetings를 이미 출시한 것처럼 전했지만, 회사 글에는 '곧 출시'(coming soon)라고 적혀 있어요.

출처: Anthropic 공식 안내 글(claude.com) · 6/10

### [OpenAI가 기업이 ChatGPT 안에서 자기 회사 정보를 관리하는 Businesses in ChatGPT를 베타로 시작했어요↗](https://openai.com/index/introducing-businesses-chatgpt)

OpenAI는 한국 시각 11월 10일 저녁 7시 글에서, ChatGPT를 매주 12억 명이 쓴다고 밝히며 기업이 자기 회사를 ChatGPT 안에서 직접 관리하는 서비스를 베타(정식 출시 전 시험 단계)로 시작한다고 소개했어요.

- 기업은 Business Hub에서 자기 회사를 'claim'(내 회사로 등록)하고 인증을 마치면 주요 정보와 가격, 재고 목록을 직접 고칠 수 있어요. 언급된 횟수, 웹사이트 클릭 수, 자주 인용되는 주제는 집계로 볼 수 있고, OpenAI는 사용자 대화는 기업과 공유하지 않는다고 설명했어요.
- Business Agent는 기업이 만들어 두는 상담 AI로, 고객이 원하면 대화를 시작해 상품을 물어볼 수 있어요. 지금은 미국의 조건에 맞는 전자상거래와 온라인 서비스 기업이 대상이에요.

**얻는 것** 챗봇이 가게와 상품을 찾는 창구가 되어 가는 모습을 볼 수 있어요.

**지금 할 일** →가게를 운영한다면 ChatGPT에 내 가게 이름을 물어보고 어떻게 소개되는지 확인해 봐요.

**왜 지금** 베타이고, 회사 등록은 ChatGPT가 제공되는 지역의 조건에 맞는 기업이 대상이에요. 12억 명은 OpenAI가 밝힌 수치예요.

출처: OpenAI 공식 글 · 6/10

### [Google이 예·아니오나 점수 같은 닫힌 판단만 하는 모델 Gemini Decision 1과 Decisions API를 내놨어요↗](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)

Google은 한국 시각 11월 12일 새벽 3시 글에서 Gemini Decision 1 모델과 이를 쓰는 Decisions API(프로그램이 모델을 불러다 쓰는 연결 통로)를 소개하며 Google AI Studio의 Gemini API로 쓸 수 있다고 밝혔어요. 닫힌 판단은 글을 새로 쓰지 않고 정해진 보기 중에서 고르거나 점수를 매기는 판단이에요.

- 입력 하나(글, 이미지, 오디오, 영상, PDF, 최대 256K 토큰)에 질문을 최대 1,000개 붙일 수 있어요. 예·아니오, 보기 2~255개 중 고르기, 단계별 점수 매기기 중에서 고르고, 답마다 0부터 1 사이의 신뢰도 점수가 붙어요.
- 보기를 한 번에 채점해서 응답이 150~250밀리초(끝에서 끝까지)이고, 입력 100만 토큰당 0.10달러에 출력 토큰은 요금이 없어요. Google은 같은 시험 모음에서 Gemini 3.5 Flash-Lite와 Interactions API 조합보다 거의 5배 싸다고 밝혔어요.

**얻는 것** 에이전트가 작은 결정을 싸고 빠른 전용 모델에 맡기는 설계를 볼 수 있어요.

**지금 할 일** →AI에 맡기는 일 중 예·아니오로 답이 나오는 판단 하나, 예를 들어 이 문의가 환불 요청인지를 골라 봐요.

**왜 지금** 5배 싸다는 비교는 Google이 자기 모델 조합과 견준 결과예요.

출처: Google 공식 블로그 · 6/10

## 한 입 지식

### [형식 검증이란 무엇일까요? DeepMind가 Signal 암호 코드를 4주 만에 증명했다고 밝혔어요↗](https://deepmind.google/blog/introducing-alphaproof-code/)

Google DeepMind는 11월 10일 글에서, 메신저 Signal 등이 쓰는 암호 규칙(Signal 프로토콜)의 실제 코드가 핵심 보안 성질을 지킨다는 것을 AI 에이전트와 사람이 함께 수학으로 증명했다고 밝혔어요. 형식 검증은 코드가 결함 없이 돌아간다는 것을 수학으로 증명하는 일이에요.

- 사람 전문가가 코드가 지켜야 할 약속(명세)을 모두 검토했고, Gemini Carbon 기반 에이전트가 Lean(컴퓨터가 증명의 모든 단계를 직접 검사하는 언어)으로 600만 줄이 넘는 증명을 만들었어요. 사람이 다시 볼 곳은 코드의 1%로 좁혔다고 해요.
- 4주가 걸렸고, DeepMind는 보통 전문가 팀이 수년 걸리는 일이라고 설명했어요. 예전에 고쳐진 실제 버그 2개를 격리된 사본에 되살렸더니 두 경우 모두 안전하지 않다는 기계 검증 증명이 나왔다고 해요.

**얻는 것** AI가 코드를 만드는 일뿐 아니라 코드가 맞는지 증명하는 일에도 쓰이는 모습을 볼 수 있어요.

**지금 할 일** →DeepMind 글에서 사람이 맡은 일과 AI가 맡은 일을 나눠 찾아 봐요.

**왜 지금** 널리 쓰이는 프로토콜의 구현을 이 깊이로 검증한 것은 처음이라는 말은 DeepMind의 주장이고, 대상은 Signal의 핵심 암호 코드예요. 기술 논문은 읽지 못했어요.

출처: Google DeepMind 공식 글 · 7/10

### [AI로 만든 앱이 링크만 있으면 열리는 상태로 공개됐다는 Claroc 보고서를 The Decoder가 전했어요↗](https://the-decoder.com/grok-built-apps-exposed-patient-data-plaintext-passwords-and-spacexsis-own-sales-pipeline/)

The Decoder는 11월 11일 보안업체 Claroc의 보고서를 인용해, 대화로 앱을 만들어 주는 Grok(SpaceXSI의 AI, 옛 xAI)의 '빌드' 모드로 만든 앱 중 점검한 37,571개 가운데 35,578개(94.7%)가 로그인 없이 링크만 알면 열렸다고 전했어요.

- Claroc은 원인으로 시험에 쓴 유료 계정의 게시 창에 '링크가 있는 누구나'가 이미 선택돼 있었고, 앱마다 따로 주소가 생겨 검색으로 찾기 쉬웠고, Grok이 쓴 코드에 접근 통제(누가 열 수 있는지 가르는 장치)의 결함이 있었다는 점을 꼽았어요.
- 열린 앱은 대부분 게임, 소개 페이지, 계산기였다고 해요. 약 10분의 1에는 민감한 자료나 개인정보가 들어 있었고, 환자의 검사 수치와 평문 비밀번호(암호화하지 않고 저장한 비밀번호)가 든 사례가 확인됐다고 Claroc이 밝혔어요.

**얻는 것** AI가 만든 앱이든 문서든 공개 범위를 직접 확인해야 하는 이유를 알 수 있어요.

**지금 할 일** →AI로 만든 내 앱이나 문서의 공유 설정이 '링크가 있는 누구나'인지 '나만'인지 확인해 봐요.

**왜 지금** 보고서 원문은 열지 못했고 The Decoder 기사 한 곳에 기대고 있어요. 수치는 모두 Claroc의 주장이에요.

출처: The Decoder(Claroc 보고서 인용) · 6/10

## 이거 써보세요

### [차에서 Gemini와 말로 대화해요, Gemini가 Apple CarPlay에서 쓸 수 있게 됐어요↗](https://blog.google/innovation-and-ai/products/gemini-app/gemini-on-apple-carplay/)

Google은 한국 시각 11월 12일 새벽 2시(미국 날짜 11월 11일) 글에서, 음성 대화 기능 Gemini Live를 Apple CarPlay에서 손을 쓰지 않고 쓸 수 있다고 밝혔어요.

- 일정 확인, 이메일 요약, 주변 장소 추천, 발표 연습에 쓸 수 있다고 소개했어요. 이메일과 일정은 Gmail, Google Calendar 같은 Google Workspace 앱과 연결하고, 대화는 아이폰의 Gemini 앱에 동기화돼요.
- 시작하려면 아이폰의 Gemini 앱을 최신 버전으로 올리고, 마이크 권한을 켜고, 폰에서 Gemini Live를 한 번 써 본 뒤 차에 연결해 화면의 Gemini 아이콘을 누르면 돼요.

**얻는 것** 운전 중에 손을 쓰지 않고 일정을 챙기는 방법을 알 수 있어요.

**지금 할 일** →아이폰 Gemini 앱을 업데이트하고 폰에서 Gemini Live를 한 번 써 봐요. 차에서는 안전을 먼저 챙겨요.

**왜 지금** Google은 전 세계에 순차 적용 중이고 지원되는 Gemini Live 언어를 쓰는 모든 iOS 사용자가 대상이라고 했어요. 한국 포함 여부는 글에 없고, Daily Brief 같은 일부 개인화 기능은 18세 미만과 유럽경제지역, 나이지리아에서 쓸 수 없어요.

출처: Google 공식 블로그 · 5/10

## 신기한 AI

### [공장 조립 라인에서 휴머노이드가 부품 집기와 포장을 96% 성공했다고 DeepMind가 밝혔어요↗](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/)

Google DeepMind는 11월 10일 글에서 로봇용 AI 모델 Gemini Robotics 2.5를 소개했어요. 보고 말을 알아듣고 행동까지 하는 비전-언어-행동(VLA) 모델이고, DeepMind는 지금까지 가장 뛰어난 모델이라고 설명했어요.

- 메르세데스-벤츠의 헝가리와 독일 생산 라인에서 Apptronik의 휴머노이드 Apollo 2가 통에 담긴 부품을 차량별 순서대로 트레이에 정리하는 일을 했고, DeepMind는 이 실증에서 부품 집기와 포장 성공률이 96%였다고 밝혔어요.
- 200개가 넘는 작업으로 시험했고 이전 기준 모델보다 성공률이 작업에 따라 30~100% 높고 20~30% 빠르다고 해요. 이 모델은 로봇 파트너에게 순차적으로 제공 중이에요.

**얻는 것** 휴머노이드가 실제 공장 라인의 숫자로 평가받기 시작한 모습을 볼 수 있어요.

**지금 할 일** →DeepMind 글에서 로봇이 한 일(부품 분류)과 사람 기술자가 맡는 일(복잡한 조립)을 짚어 봐요.

**왜 지금** 아직 실증 단계이고 96%는 DeepMind가 밝힌 수치예요. 파트너 기업에게만 제공돼서 일반 사용자는 쓸 수 없어요.

출처: Google DeepMind 공식 글 · 6/10

### [Anthropic이 AMD 칩 이식을 사흘 만에 끝냈다고 투자자 설명에서 말했다고 The Decoder가 전했어요↗](https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/)

The Decoder는 11월 11일 기사에서, Anthropic 공동창업자 Tom Brown이 상장 투자자 설명에서 한 말을 전했어요. Claude를 주요 칩 4계열에서 학습하고 서비스하며, 올해 처음 쓴 AMD GPU로 옮길 때 자사 최상위 모델 Mythos가 칩용 프로그램(커널)의 거의 100%를 직접 쓰거나 옮겨 보통 6~12개월 걸리는 일을 사흘에 끝냈다고 했다는 내용이에요.

- 기사는 CUDA를 엔비디아 GPU에 개발자를 묶어 두는 소프트웨어 생태계로 설명하고, 그림 설명에 따르면 이 수치는 AMD MI355X에서 Anthropic 모델의 프롬프트 처리 기준이에요.
- 숫자가 맞다면 엔비디아의 소프트웨어 장벽이 AI 때문에 크게 줄 수 있다는 해석은 The Decoder의 것이에요. 저는 판단할 근거가 아직 없어요.

**얻는 것** AI가 칩을 갈아타는 비용을 낮춘다는 주장의 출처를 알 수 있어요.

**지금 할 일** →기사에서 Anthropic이 말한 부분과 The Decoder가 해석한 부분을 나눠 읽어 봐요.

**왜 지금** 로드쇼 영상 원문은 열지 못해서 Tom Brown의 정확한 표현은 확인하지 못했어요. 상장을 앞둔 회사가 투자자에게 한 설명이라는 점도 봐야 해요.

출처: The Decoder(Anthropic 투자자 설명 인용) · 6/10

## 출처

점수(n/10)는 필자가 정한 편집상의 중요도예요. 글의 날짜는 원문에 표시된 날짜를 따랐고, 미국 날짜는 미국 시각으로 적었어요.

**1차 출처**
- Anthropic, 상장 설명회 시작(11월 10일): https://www.anthropic.com/news/roadshow-launch
- Anthropic, 상장 안내 페이지: https://ipo.anthropic.com/
- Google, Gemini 4 Carbon(11월 10일): https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
- Anthropic, Claude Sheets·Whiteboards·Data(11월 10일): https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors
- Anthropic, Sheets·Whiteboards·Data 제공 요금제 안내(11월 10일): https://claude.com/resources/articles/sheets-whiteboards-data
- OpenAI, Businesses in ChatGPT(11월 10일): https://openai.com/index/introducing-businesses-chatgpt
- Google, Gemini Decisions API(11월 11일): https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
- Google DeepMind, AlphaProof Code(11월 10일): https://deepmind.google/blog/introducing-alphaproof-code/
- Google, Gemini의 Apple CarPlay 지원(11월 11일): https://blog.google/innovation-and-ai/products/gemini-app/gemini-on-apple-carplay/
- Google DeepMind, Gemini Robotics 2.5(11월 10일): https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/

**언론 보도(1차 원문을 열지 못한 것)**
- TechCrunch, 창업자 7명 주식 매각(11월 10일): https://techcrunch.com/2026/11/10/all-7-anthropic-founders-will-each-cash-out-about-250m-in-ipo/
- TechCrunch, OpenAI 분기 매출 보도(11월 11일): https://techcrunch.com/2026/11/11/openais-quarterly-revenue-reportedly-crosses-10b-for-the-first-time/
- TechCrunch, 뉴욕주 AI 안전법(11월 10일): https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/
- AI타임스, 한국 IMD 평가: https://www.aitimes.com/news/articleView.html?idxno=217238
- AI타임스, 중기부 AI 유니콘 전략: https://www.aitimes.com/news/articleView.html?idxno=217284
- The Decoder, Grok 앱 공개 보고서(11월 11일): https://the-decoder.com/grok-built-apps-exposed-patient-data-plaintext-passwords-and-spacexsis-own-sales-pipeline/
- The Decoder, Anthropic AMD 이식 발언(11월 11일): https://the-decoder.com/anthropic-says-ai-is-eroding-nvidias-cuda-lead-cutting-an-amd-chip-switch-from-months-to-three-days/

**Anthropic, OpenAI, Google, xAI 확인 결과(11월 12일 아침 조회)**
- Anthropic은 11월 10일 상장 설명회 글이 이 기간의 새 글이고, 새 모델 발표는 없었어요. 가장 최근 모델 글은 11월 9일 Fable 5.2와 Mythos 5.2예요. OpenAI는 이 기간에 새 모델 글이 없었고, 11월 10일 Businesses in ChatGPT가 제품 소식이에요. Google은 11월 10일 Gemini 4 Carbon 정식 출시와 11월 11일 Gemini Decision 1이 새 모델이에요. xAI는 공식 뉴스에서 11월 2일 Grok Bot 글이 가장 최근이었고 이 기간의 새 글은 없었어요.
- X 계정 게시물은 인용하지 않았어요.
