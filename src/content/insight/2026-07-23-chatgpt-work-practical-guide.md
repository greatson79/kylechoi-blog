---
title: "AI트렌드 활용법 — 답변 대신 완성물을 받는 법: ChatGPT Work 실전 사용 가이드"
description: "코덱스·챗GPT 워크 활성 사용자가 7월 21일 1000만명을 넘었다. 문서·시트·슬라이드를 실제로 만들어 오는 업무 에이전트를 어떻게 연결하고, 무엇을 맡기고, 어디서 멈춰야 하는지 공식 문서로 정리했다."
category: AI트렌드
pubDate: 2026-07-23
author: 디딤
tags: [AI트렌드, 활용법, ChatGPT Work, 업무자동화, AI에이전트, OpenAI]
draft: true
disclaimerRequired: false
factChecked: false
sourcePath: output/AI트렌드/2026-07-23_howto_리서치소스.md
---

티보 소티오 오픈AI 코덱스 책임자는 7월 21일(현지시간) X에 "코덱스와 챗GPT 워크의 활성 사용자가 1000만명을 돌파했다"고 적었다. 일주일 전인 7월 15일 800만명이었으니 7일 만에 200만명이 늘었다(AI타임스, 2026년 7월 22일). 같은 발표문에서 오픈AI는 "코덱스를 매주 쓰는 사람이 500만명이 넘고, 그중 100만명 이상은 소프트웨어 개발이 아닌 업무에 쓴다"고 밝혔다(OpenAI, 현지시간 2026년 7월 9일).

숫자보다 중요한 건 이 도구가 내놓는 것의 형태다. ChatGPT Work는 오픈AI 공식 설명으로 "여러 앱과 업무 흐름을 가로질러 정보를 모아 시트·슬라이드·문서·웹앱 같은 완성된 결과물을 만드는 ChatGPT 안의 에이전트"다(OpenAI, 2026년 7월 9일). 답변을 읽고 사람이 다시 옮겨 적는 단계가 빠진다는 뜻이다.

## 1단계 — 내 플랜에 들어와 있는지부터 확인

오픈AI는 발표 당시 "오늘 Pro·Enterprise·Edu 플랜에 롤아웃하며, Plus와 Business에는 며칠에 걸쳐 순차 적용한다"고 명시했다(OpenAI, 2026년 7월 9일). 국내 보도도 같은 순서로 전했다(AI타임스, 기사번호 212610).

윈도우·맥 데스크톱 앱은 개편되어 Chat, Work, Codex 세 가지를 한 화면에서 쓰게 됐고, 데스크톱 앱에서는 무료 플랜을 포함한 모든 플랜에서 이 세 가지가 노출된다(OpenAI, 2026년 7월 9일). 웹·모바일에서 Work 탭이 안 보인다면 플랜 문제일 가능성이 크므로, 데스크톱 앱을 먼저 열어보는 게 빠르다.

## 2단계 — 결과물이 나올 자리를 먼저 연결한다

Work가 문서를 "만들어" 오게 하려면 저장될 곳이 연결돼 있어야 한다. 오픈AI 발표문이 연결 대상으로 열거한 것은 Slack, Microsoft Teams, Google Drive, SharePoint, 이메일, 캘린더, CRM, 프로젝트 트래커이며 Outlook Email, Gmail, Salesforce, Adobe Acrobat도 이름이 올라 있다(OpenAI, 2026년 7월 9일).

문서 종류별로 경로가 다르다는 점이 실무에서 걸린다. 오픈AI 헬프센터 기준으로 정리하면 이렇다.

- **구글 문서·시트·슬라이드**: 해당 구글 앱을 연결한 뒤 "Google Doc(또는 Sheet, Slide)을 만들어 달라"고 요청하고, 뜨는 승인 프롬프트를 승인하면 네이티브로 생성·편집된다. 회사 계정이라면 어떤 앱을 쓸 수 있는지는 워크스페이스 관리자가 통제한다.
- **엑셀**: "ChatGPT for Excel"을 설치하고 애드인에 로그인한 뒤, 데스크톱 앱의 Codex에서 `@Microsoft Excel`을 멘션해야 열려 있는 통합문서를 직접 확인·수정한다.
- **파워포인트**: 헬프센터는 "PowerPoint is not included in this Work desktop flow at launch"라고 못 박았다. 출시 시점 기준 이 데스크톱 흐름에 포함되지 않는다.

(이상 OpenAI 헬프센터, "Creating and editing documents, spreadsheets, and presentations with ChatGPT Work")

## 3단계 — 반복되는 일은 예약으로 넘긴다

Work는 Scheduled Tasks로 일을 계속 굴릴 수 있다. 헬프센터 설명은 "일회성·반복 작업을 예약할 수 있고, 변화를 확인해 의미 있는 업데이트가 있을 때 알려 달라고 요청할 수도 있다"이다. 모니터링 작업은 보고할 가치가 있을 때만 알림을 보낸다.

한도는 플랜에 따라 갈린다. Go 3개, Plus 5개, Pro·Business·Enterprise 15개까지 활성 작업을 둘 수 있다. 실행 주기에도 상한이 있어 "작업은 시간당 한 번을 초과해 실행될 수 없다"(OpenAI 헬프센터, Scheduled Tasks in ChatGPT).

실무 요령은 하나다. 매일 아침 받아야 하는 요약, 주간 리포트, 특정 문서의 변경 감시처럼 **결과물의 형식이 고정된 일**부터 예약으로 옮긴다. 형식이 매번 달라지는 일은 예약에 넣어도 사람이 다시 손대게 된다.

## 넘지 말아야 할 선

기능 목록보다 먼저 알아야 할 것은 제약이다.

**저장 위치가 갈린다.** 클라우드에서 만든 파일은 Library에 저장될 수 있지만, 데스크톱에서 만든 산출물은 로컬에 남고 웹·모바일로 자동 동기화되지 않는다. 임시 채팅(Temporary Chat)에서 만든 파일은 Library에 저장되지 않는다(OpenAI 헬프센터). 중요한 산출물을 임시 채팅에서 만들고 창을 닫는 실수는 복구가 안 된다.

**엑셀 제어가 항상 직접 방식은 아니다.** 헬프센터는 "Codex가 모든 스프레드시트 요청에 대해 직접 엑셀 제어를 쓰지는 않을 수 있다"고 적었다. 셀 단위 정확도가 필요한 작업이라면 결과를 열어 검산해야 한다.

**사용량이 조용히 늘어난다.** 오픈AI는 "필요한 작업량에 따라 사용량이 달라지며, 복잡한 작업일수록 플랜에 포함된 사용량을 더 많이 쓸 수 있다"고 명시했다(OpenAI, 2026년 7월 9일). 플랜별 Work 전용 한도 수치는 공식적으로 공개된 것을 확인하지 못했다. 한 번에 큰 작업을 던지기 전에 작은 범위로 나눠 소모량을 체감해 보는 편이 안전하다.

**작업은 삭제·방치에 취약하다.** 예약 작업은 연결된 채팅을 삭제하면 자동 일시정지되고, 방치된 작업도 일정 기간 후 멈춘다. 웹훅은 지원하지 않아 외부 이벤트로 촉발되는 자동화는 만들 수 없다(OpenAI 헬프센터, Scheduled Tasks).

## 이 흐름은 오픈AI만의 것이 아니다

같은 달 앤스로픽 뉴스룸에도 사용 방식 자체를 다루는 항목이 잇달아 올라왔다. 7월 9일 "Introducing a way to reflect on how you use Claude", 7월 14일 "Introducing Claude for Teachers", 7월 22일 "Ask Claude about the Anthropic Economic Index"가 그것이다(Anthropic Newsroom). 모델 성능 발표에서 "사람이 이걸 어떻게 쓰고 있는가"로 무게중심이 옮겨간 흔적이다. 다만 두 회사 도구의 성능을 직접 비교할 공개 벤치마크는 확인하지 못했으므로, 어느 쪽이 낫다는 판단은 여기서 하지 않는다.

## 한 줄 정리

ChatGPT Work를 제대로 쓰는 순서는 "좋은 프롬프트 쓰기"가 아니라 **결과물이 떨어질 자리(구글 드라이브·엑셀 애드인)를 먼저 연결하고, 형식이 고정된 반복 업무부터 예약으로 넘기고, 임시 채팅·엑셀 정확도·사용량이라는 세 지점에서 사람이 확인하는 것**이다.

---

### 출처

- OpenAI, "ChatGPT is now a partner for your most ambitious work"(현지시간 2026년 7월 9일) — https://openai.com/index/chatgpt-for-your-most-ambitious-work/
- OpenAI Help Center, "Creating and editing documents, spreadsheets, and presentations with ChatGPT Work" — https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work
- OpenAI Help Center, "Scheduled Tasks in ChatGPT" — https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
- AI타임스, "오픈AI, '코덱스·챗GPT 워크' 사용자 1000만 돌파...일주일 만에 200만 추가"(2026년 7월 22일) — https://www.aitimes.com/news/articleView.html?idxno=213027
- AI타임스, "업무용 에이전트 '챗GPT 워크' 출시…코덱스 통합 '슈퍼 앱'도 시동" — https://www.aitimes.com/news/articleView.html?idxno=212610
- Anthropic Newsroom — https://www.anthropic.com/news
