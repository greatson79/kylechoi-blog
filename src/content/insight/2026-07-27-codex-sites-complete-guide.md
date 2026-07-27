---
title: "Codex Sites 완전 정복 — 프롬프트 한 줄로 만드는 사내 웹앱, 지금 알아야 할 것"
description: "Codex Sites 완전 정복 — 프롬프트 한 줄로 만드는 사내 웹앱, 지금 알아야 할 것"
category: AI트렌드
pubDate: 2026-07-27
author: 디딤
tags: [AI트렌드, 교육콘텐츠, Codex, OpenAI, ChatGPT, Sites]
draft: false
disclaimerRequired: false
factChecked: true
sourcePath: "output/WaveAI/크리에이티브본부/교육아티클_codex_sites_2026-07-27/본문초안_v1_2026-07-27.md"
heroImage:
  src: /images/ai-trend/codex-sites-complete-guide-01-og.png
  alt: 프롬프트에서 생성과 호스팅 URL 공유로 이어지는 Codex Sites 변환 흐름 개념도
---

## 1. 왜 지금 주목해야 하나

"프롬프트 한 줄이 배포된 웹앱이 되는 시대가 열렸다." OpenAI는 2026년 6월 2일, Codex를 개발자만의 도구에서 모든 지식근로자의 업무 환경으로 확장하는 새 기능들을 발표했다. 매주 500만 명 넘는 사람이 Codex를 쓰고 있고, 그중 비개발자 지식근로자 비중이 약 20%로 개발자보다 3배 빠르게 늘고 있다. 분석가·마케터·운영 담당자·디자이너·투자자·은행가까지 — 코드를 몰라도 Codex로 업무 결과물을 만드는 사람이 늘고 있다는 뜻이다.

이번 발표의 핵심은 역할별 플러그인·Sites·주석(Annotations) 세 가지다. 이 글이 집중하는 것은 그중 **Sites**다. 다만 먼저 분명히 해둘 것이 있다. Sites는 현재 **Business·Enterprise 고객 대상 프리뷰**로만 제공되며, **개인 계정은 아직 쓸 수 없다.** 이 글은 "지금 당장 써보세요"가 아니라, "이것이 무엇이고 왜 중요하며, 내 상황에서 무엇을 준비해야 하는가"를 함께 다룬다.

<img src="/images/ai-trend/codex-sites-complete-guide-01.png" alt="프롬프트에서 생성과 호스팅 URL 공유로 이어지는 Codex Sites 변환 흐름 개념도" width="2400" height="1350" loading="eager" decoding="async" fetchpriority="high" />

## 2. Codex Sites란 무엇인가

Codex Sites는 자연어 프롬프트로 **인터랙티브 웹사이트와 앱을 생성하고, 호스팅된 형태로 워크스페이스에 URL로 공유**하게 해주는 기능이다(공식 발표는 "호스팅된다"고만 밝히고 호스팅 제공 주체는 특정하지 않았다). "앱을 코딩한다"가 아니라 "앱을 요청한다"는 감각에 가깝다. 대시보드·플래너·검토용 워크스페이스·프로젝트 보드·갤러리·경량 내부 툴 등을 문장 하나로 만들어낸다.

거듭 강조하면, Sites는 **2026년 6월 2일 기준 Business·Enterprise 고객 대상 프리뷰**이며, Enterprise 관리자가 관리자 설정에서 활성화한다. **개인용 ChatGPT 계정에는 아직 제공되지 않는다.** 완성된 결과물은 "URL을 통해 워크스페이스 내 누구와도 공유"하는 방식이라, 조직 내부에 닫힌 협업 공간에 가깝다.

<img src="/images/ai-trend/codex-sites-complete-guide-02.png" alt="코딩 도구에서 업무 플랫폼으로 확장되는 Codex의 진화와 주간 사용자 수를 보여주는 개념도" width="2400" height="1350" loading="lazy" decoding="async" />

## 3. 어떻게 작동하나

공식 발표가 밝힌 사용 흐름은 단순하다. 예정된 고객 리뷰용 Site를 만들어 달라고 요청하면, 관련 업데이트와 다음 단계가 담긴 인터랙티브 웹페이지가 만들어진다. 재무 모델로 시나리오 플래너를 요청하면 여러 탭을 오가지 않고 가정을 비교하는 화면이 나온다. 세부 내용이 바뀔 때마다 "최신 상태로 유지해달라"고 요청하면 Codex가 계속 갱신한다. 즉 한 번 만들고 끝나는 결과물이 아니라, 진행 상황을 계속 반영하는 살아있는 작업 공간이다.

다만 "추가→프롬프트→검증→저장→배포"의 다섯 단계로 나뉜다는 설명이나 특정 클라우드 인프라 호스팅, ChatGPT 계정 로그인 방식 같은 세부는 **공식 원문에는 없고 일부 2차 가이드가 소개한 내용**이다. 참고는 하되 공식 사실처럼 단정하지 않는 것이 안전하다.

<img src="/images/ai-trend/codex-sites-complete-guide-03.png" alt="프롬프트부터 검증과 공개까지의 Codex Sites 작업 흐름을 나타낸 다이어그램" width="2400" height="1350" loading="lazy" decoding="async" />

## 4. 무엇을 만들 수 있나 — 유스케이스

공식 사례만 보아도 활용 폭이 넓다. OpenAI 내부에서는 비기술 팀이 내부 앱·보고 자료·대시보드를 만든다. Zapier는 Slack·Google Docs·Coda의 정보를 사후 분석 보고서로 바꾸고, NVIDIA 연구팀은 실험 워크플로 가속에 활용한다.

일반 조직의 언어로 옮기면 — 팀 주간 업무 트래커, 행사 준비 허브, 매출 예측 플래너, 리뷰 의견 취합 보드, 상시 갱신되는 출시 허브 같은 것들이다. 공통점은 "문서·스프레드시트의 한계에 맞춰 일하는 대신, 업무에 맞는 화면을 그때그때 만든다"는 발상이다.

<img src="/images/ai-trend/codex-sites-complete-guide-04.webp" alt="대시보드와 플래너, 리뷰 보드를 조합한 Codex Sites 유스케이스 콜라주" width="1600" height="900" loading="lazy" decoding="async" />

## 5. 함께 나온 것들 — 주석과 6개 역할 플러그인

같은 발표에서 두 가지가 더 나왔다. 하나는 **주석(Annotations)** — 고치고 싶은 정확한 부분을 지정해 바로 수정을 요청하는 기능이다. 기존엔 코드·Markdown·Codex가 만든 웹사이트에 쓰였는데, 이제 문서·스프레드시트·슬라이드까지 확장됐다. 탐색바를 지정해 글꼴을 바꾸거나, 투자 가설의 특정 문장에 표시하고 근거를 물어보는 식이다.

다른 하나는 **역할별 플러그인 6종**(데이터 분석·크리에이티브 제작·영업·제품 디자인·상장주식 투자·투자은행)으로, 총 62개 인기 앱과 110개 스킬(skill)을 하나로 묶어 제공한다. 데이터 분석 플러그인은 Snowflake·Tableau로 보고서를 만들게 해주고, 크리에이티브 제작 플러그인은 Figma·Canva를 엮어 캠페인 에셋을 만든다. 방향은 하나다 — Codex가 "코딩 도구"에서 "업무 플랫폼"으로 이동하고 있다는 것.

## 6. 정직한 한계 — 이건 아직 못 한다

과대광고를 걷어내면 지금 시점의 한계가 뚜렷하다. 첫째, **Sites는 Business·Enterprise 전용 프리뷰이고 개인 사용자에게는 제공되지 않는다.** 둘째, 일부 2차 가이드에 따르면 커스텀 도메인·완전 공개 배포는 "곧 지원 예정"이고, 라이브 편집 대신 재프롬프트→재배포 방식이라는 설명도 있다 — 공식 확인 사항은 아니다. 셋째, 가장 중요한 구분: **Codex Sites는 공개 마케팅 웹사이트 빌더가 아니다.** 이미 쓰는 웹빌더를 대체하려는 도구가 아니라, 조직 내부 협업·의사결정용 워크스페이스에 가깝다. 실제로 OpenAI는 공식 발표에서 Sites 파트너 에코시스템 구축을 위해 Wix·Base44·Replit·Lovable·Figma·Webflow·Emergent 등 초기 파트너들과 협력하고 있다고 밝혔다 — 경쟁이 아니라 역할 분담에 가까운 신호다.

<img src="/images/ai-trend/codex-sites-complete-guide-05.png" alt="Codex Sites의 강점과 현재 한계를 비교한 대비표" width="2400" height="1350" loading="lazy" decoding="async" />

## 7. 지금 무엇을 할까 — 상황별 행동

**Business·Enterprise 플랜을 이미 쓰는 조직**이라면, 관리자가 워크스페이스 설정에서 Sites를 활성화한 뒤, 작은 내부 업무 하나(주간 보고 대시보드 등)로 시험해보는 것으로 충분하다. 완벽한 결과보다, 무엇을 요청했을 때 무엇이 나오는지 감을 잡는 데 목적을 둔다.

**아직 접근 권한이 없는 개인·소규모 조직**이라면 할 수 있는 준비가 있다. 우선 "내가 반복해서 만드는 화면이 무엇인가"를 목록으로 정리해본다 — 주간 업무표, 행사 체크리스트, 리뷰 취합 문서 같은 것들이다. 그다음 요구사항을 구체적으로 적는 프롬프트 연습을 기존 도구에서 미리 해두면 정식 확대 시 바로 활용할 수 있다. 교회 사무국·소규모 조직이라면, 지금 쓰는 스프레드시트·문서 협업 중 무엇이 "상시 갱신되는 화면"으로 바뀌면 도움이 될지 미리 생각해두면 된다.

<img src="/images/ai-trend/codex-sites-complete-guide-06.webp" alt="플랜 보유 여부에 따라 Codex Sites 활용 행동을 나눈 상황별 분기 일러스트" width="1600" height="900" loading="lazy" decoding="async" />

## 8. 완전 정복 체크리스트 + 다음 스텝

핵심을 다섯 줄로 정리하면 이렇다.

1. Codex는 이제 개발자 도구를 넘어 업무 플랫폼으로 확장 중이다(비개발자 20%, 3배속 성장).
2. Sites는 프롬프트로 인터랙티브 웹앱을 만들고 URL로 공유하는 기능이다.
3. 지금은 Business·Enterprise 전용 프리뷰이며 개인은 아직 쓸 수 없다.
4. 주석(문서·시트·슬라이드까지 확장)과 역할별 플러그인 6종이 함께 나왔다.
5. 공개 웹빌더의 대체재가 아니라, 조직 내부 협업 워크스페이스로 이해하는 것이 정확하다.

내 상황 진단: (1)우리 조직이 Business·Enterprise 플랜인가 (2)반복해서 만드는 업무 화면이 있는가 (3)프롬프트로 요구사항을 구체적으로 적어본 적이 있는가. 셋 중 비어 있는 것이 다음 행동을 정한다.

Wave AI Networks 교육 시리즈는 이런 최신 AI 업무 도구를 비개발자 눈높이에서 계속 풀어드린다. 다음 편에서 만나자.

<img src="/images/ai-trend/codex-sites-complete-guide-07.webp" alt="Codex Sites 교육 아티클을 위한 블로그 대표 썸네일" width="1600" height="900" loading="lazy" decoding="async" />
