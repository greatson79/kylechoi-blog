---
title: "값은 그대로인 새 음성 AI, 사기 문자를 걸러 줄 AI"
description: "xAI가 이전 판과 같은 가격이라고 밝힌 음성 모델 Grok Voice 3.0, 앞으로 몇 주에 걸쳐 배포될 Google 메시지 사기 방지 모드, 미국 중간선거를 앞둔 Anthropic의 발표를 10월 14일(미국 시각) 소식으로 정리했습니다."
category: AI트렌드
pubDate: 2026-10-15
author: "최종학 | Kyle Choi"
tags: ["AI트렌드", "음성 AI", "스마트폰 보안", "생성형 AI"]
draft: false
disclaimerRequired: false
factChecked: true
heroImage:
  src: /images/ai-trend/voice-ai-scam-guard-1015-og.png
  alt: "노란 칸의 휴대전화에서 나온 소리 물결과 말풍선이 오른쪽 초록 칸의 체를 지나가고, 체에는 붉은 갈고리와 번개 모양이 걸려 있는 인쇄풍 그림."
---

10월 14일(미국 시각), xAI는 음성을 듣고 다시 음성으로 답하는 Grok Voice 3.0을 공개했습니다.[^1] 같은 날(미국 시각) Google은 Google Messages의 사기 방지 기능을 발표했고, Anthropic도 10월 14일(미국 시각) 미국 중간선거 대비 계획을 알렸습니다.[^2][^3] 필자가 보기에, 이 세 발표는 음성 대화와 문자 속 사기, 선거 정보라는 서로 다른 자리에서 AI의 쓰임과 안전장치를 함께 다루고 있습니다.

## 목소리로 주고받는 AI

xAI는 Grok Voice 3.0을 음성을 입력받아 음성으로 바로 응답하는 모델, 영어로는 speech-to-speech 모델이라고 소개했습니다.[^1] 문자를 입력하고 읽는 대신 말로 질문하고 음성으로 답을 듣는 방식입니다.[^1] xAI는 응답 지연이 1초 미만이며, API(서로 다른 프로그램이 기능을 연결해 부르는 통로) 요금은 분당 0.08달러로 이전 버전 Grok Voice 2.0과 같다고 밝혔습니다.[^1]

xAI는 독립 분석 기관 Artificial Analysis의 Speech-to-Speech Index에서 Grok Voice 3.0이 86.9점을 받았다고 제시했습니다. 이 지수는 음성 추론, 상담 통화 처리, 사람의 선호와 과제 성공 같은 평가를 묶은 종합 점수이며, 이렇게 성능을 견주는 시험을 벤치마크라고 부릅니다.[^1] 같은 글은 GPT-Live-1(Astra, Medium) 83.2점, Gemini 3.8 Live 82.6점을 비교 대상으로 들었습니다.[^1] 지연 시간과 점수는 모두 xAI가 소개한 수치입니다.[^1] 특히 비교 점수는 xAI가 인용한 제3자 평가이고, 이 글만으로 실제 사용자 경험까지 같다고 단정할 수는 없습니다.[^1]

xAI는 Tesla와 SpaceX에서 하루 수백만 건의 대화에 쓰이고, Starlink 고객센터가 하루 2만 통가량을 처리해 그중 약 70%를 사람 개입 없이 해결한다고도 밝혔습니다.[^1] 이는 회사가 공개한 사용 현황입니다.[^1] 원문 날짜는 10월 14일(미국 시각)이지만 게시 시각은 따로 적혀 있지 않습니다.[^1]

필자가 보기에, 이 소식의 무게는 음성 모델 점수 하나에 있지 않습니다. 음성 기능을 서비스에 붙이려는 개발자가 응답 속도, 분당 가격, 실제 운영 사례를 함께 비교할 수 있게 됐다는 점이 눈에 띕니다. 다만 요금과 활용 사례는 회사가 밝힌 내용이므로, 제품을 도입할 때는 각자의 환경에서 품질과 비용을 따져 봐야 합니다.

## 문자와 낯선 링크를 살피는 Google Messages

Google은 10월 14일(미국 시각) Google Messages에 Enhanced protection mode를 발표했습니다.[^2] 이 기능을 켜면 클라우드, 곧 인터넷 너머 서버에서 작동하는 Gemini가 모르는 발신자와 대화할 때 사기 의도를 더 빨리 파악하도록 돕습니다.[^2] Google은 이 처리에 Private AI Compute를 사용한다고 설명했습니다.[^2]

낯선 링크는 휴대전화 안에서 직접 작동하는 Gemini Nano가 실시간 웹 신호를 참고해 신뢰도를 살핍니다.[^2] Google은 낯선 번호가 보낸 링크를 누르기 전 보여 주는 경고 화면도 개선했다고 밝혔습니다.[^2] 즉 메시지 안의 대화 맥락과 링크를 각각 살펴보는 구성입니다.[^2]

기능은 발표 즉시 모든 이용자에게 적용되는 것이 아닙니다.[^2] Google은 Enhanced protection mode가 앞으로 몇 주에 걸쳐 배포될 예정이라고 밝혔습니다.[^2] Google은 별도로 Phone by Google과 Messages의 AI 사기 탐지가 매달 500만 건 넘는 의심 통화와 문자를 표시한다고 설명했습니다. Google이 밝힌 회사 수치입니다.[^2]

필자가 보기에, 이 발표에서 확인할 것은 ‘AI가 사기를 완벽하게 막는다’는 약속이 아니라 어떤 접점을 검사하는지, 내 기기에는 언제 도착하는지입니다. 대화 맥락과 링크 검사 기능이 함께 제시됐지만, 배포는 몇 주에 걸쳐 진행된다고 했으므로 설정 화면에서 사용 가능 여부를 확인할 필요가 있습니다.[^2]

## Anthropic의 미국 중간선거 대비

Anthropic은 10월 14일(미국 시각) 미국 중간선거를 앞둔 대응 계획을 공개했습니다.[^3] 회사는 Claude.ai 미국 이용자 대화의 무작위 표본 약 25만 건을 개인정보 보호 방식으로 분석했으며, 표본 기간은 9월 21일부터 27일까지라고 밝혔습니다.[^3]

Anthropic의 분석에서 정치·공공정책·사회 이슈 대화는 약 5.75%, 선거와 투표 자체를 다룬 대화는 약 0.51%였습니다.[^3] 누구에게 또는 무엇에 투표할지 추천해 달라는 요청은 약 0.01%, 선거 무결성 정책을 위반하는 요청은 약 0.002%였다고 회사는 보고했습니다.[^3] 모두 Anthropic이 분석해 공개한 표본 수치입니다.[^3]

Anthropic은 이달 후반부터 미국 Claude.ai 응답에 Democracy Works의 공식 투표 정보를 반영하고, 개표 당일과 직후에는 최신 공식 개표 결과도 보여 줄 계획이라고 밝혔습니다.[^3] 또 Opus 5.5, Sonnet 5.5, Haiku 5.5가 정치적 균형 평가에서 99%를 기록했다고 했는데, 이는 Anthropic 자체 평가 결과입니다.[^3]

안전 점검 결과도 함께 공개했습니다.[^3] ISD와 McCain Institute의 외부 시험에서 Claude는 단일한 유해 요청을 거절하기도 했지만, 작은 요청을 여러 번으로 나눈 캠페인은 놓칠 수 있었다고 Anthropic은 설명했습니다.[^3] 회사는 새롭거나 단계적으로 진행되는 오용을 더 잘 가려내기 위한 분류기, 곧 요청을 유형별로 나누어 가려내는 장치를 추가했다고 밝혔습니다.[^3] Anthropic은 가짜 뉴스 사이트 운영자들이 러시아·이란·북한을 지지하는 중간선거 기사를 Claude로 만든 사례를 찾아 계정을 차단했다고도 알렸습니다.[^3]

필자가 보기에, 선거 질문에 공식 정보를 연결하겠다는 계획과 쪼개진 악용 요청을 놓칠 수 있었다는 공개는 함께 읽을 만합니다. AI 답변이 투표 정보에 닿을수록 정보의 출처뿐 아니라 오용을 어떻게 찾고 고치는지도 중요해집니다.

## 그 밖에 묶어 볼 발표

Anthropic은 10월 14일(미국 시각) Claude Code 2.1.300의 트레이스(시간순 작업 기록)에 OpenTelemetry(모니터링 도구가 함께 읽을 수 있는 공통 기록 규격) 생성형 AI 규약의 제공자·대화·도구·오류 정보를 추가했다고 밝혔습니다.[^4]

Claude Platform의 에이전트 추적 기능도 공개 베타, 곧 정식 출시 전에 일반에 먼저 열어 두는 시험 단계로 소개됐지만, 원문은 날짜를 10월 14일로만 표기했고 게시 시각은 확인되지 않았습니다.[^5] 에이전트는 사용자를 대신해 도구를 써 가며 일을 이어 가는 AI를 뜻합니다. 이 기능은 Claude의 관리형 에이전트(Claude Managed Agents), Messages API, 개발 도구 모음(Claude SDK)의 작업 단계·모델 호출·도구 사용을 지연 시간, 토큰, 식별 정보와 함께 OpenTelemetry 형식으로 내보내 여러 모니터링 도구에서 살펴볼 수 있게 합니다.[^5]

Google은 10월 14일(미국 시각) Research@ 2026 발표에서 기술 문서를 분석하는 도구 Deep Review를 공개 출시한다고 밝혔습니다.[^6] STOC, ICML, NeurIPS, ICLR의 제출물 1만 5천 건 이상에 걸쳐 성공적으로 활용된 뒤 공개 출시한다고 소개했지만, 해당 발표문에는 가격과 이용 대상 등 상세 조건이 나오지 않습니다.[^6]

카카오는 10월 15일 보도자료에서 AI 윤리 원칙 SPIRIT의 여섯 기준인 안전·프라이버시·포용·책임·이용자 주체성·투명성과 신뢰성, 그리고 에이전트 위험 관리의 다섯 영역을 공개했습니다.[^7] 위험 영역은 통제 주도권·목표·권한·참조 자원·상호작용이며, 세 단계 체크리스트를 연내 적용해 사람 감독·비상 제어·권한 통제·데이터 보호를 설계에 넣겠다는 방향입니다.[^7]

팀네이버는 10월 15일 보도자료에서 EMNLP 2026에 논문 24편이 채택됐다고 알렸으며, 학회는 10월 24일부터 29일까지 헝가리 부다페스트에서 열릴 예정입니다.[^8] 소개된 논문에는 긴 영상에서 장면을 찾는 벤치마크, 곧 성능을 견주는 시험 등이 포함됐으며, 이번 소식은 제품 출시가 아니라 학회 논문 채택입니다.[^8]

필자가 보기에, 이번 발표 묶음은 더 자연스럽게 말하고 더 빨리 답하는 기능과 함께, 사기·선거 정보·에이전트의 작업 과정을 다루는 장치도 등장했음을 보여 줍니다. AI가 전화와 메시지에 가까이 들어올수록 편리함의 기준에는 출처 확인과 통제 가능성도 포함돼야 합니다.

## 활용 팁

- Google Messages 설정에서 Enhanced protection mode가 배포됐는지, 켜져 있는지 확인해 보세요.[^2]
- 선거·투표 관련 답변은 Democracy Works 등 공식 출처를 직접 열어 확인해 보세요.[^3]

[^1]: [xAI, Introducing Grok Voice 3.0](https://x.ai/news/grok-voice-3)
[^2]: [Google, New Android protections to help keep you safe from mobile scams](https://blog.google/security/new-android-scam-protections/)
[^3]: [Anthropic, Preparing for the 2026 US midterms](https://www.anthropic.com/news/2026-us-midterms)
[^4]: [Claude Code, Changelog (2.1.300)](https://code.claude.com/docs/en/changelog)
[^5]: [Claude, Agent observability on the Claude Platform](https://www.claude.com/blog/agent-observability-on-the-claude-platform)
[^6]: [Google, Research@ 2026: Novel capabilities and intelligence](https://blog.google/innovation-and-ai/technology/research/research-capabilities-intelligence-2026/)
[^7]: [카카오, 자율 에이전트 시대 AI 윤리 원칙·이행 가이드 공개](https://www.kakaocorp.com/page/detail/12163)
[^8]: [팀네이버, 세계 최정상 자연어처리 학회 EMNLP서 논문 24편 채택…글로벌 AI 연구 경쟁력 재확인](https://www.navercorp.com/media/pressReleasesDetail?seq=10034754)
