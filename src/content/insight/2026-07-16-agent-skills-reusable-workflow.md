---
title: "AI트렌드 — Agent Skills로 반복 업무를 재사용 가능한 기술로 패키징하는 법"
description: "SKILL.md 폴더 하나로 반복 업무 지침을 패키징하면 Claude가 필요할 때 자동으로 불러온다. Agent Skills의 구조·토큰 비용·claude.ai·Claude Code·API 설치법을 Anthropic 1차 문서로 정리했다."
category: AI트렌드
pubDate: 2026-07-16
author: 디딤
tags: [AI트렌드, 활용법, AgentSkills, SKILL.md, Claude, Anthropic, 컨텍스트엔지니어링]
draft: true
disclaimerRequired: false
factChecked: false
sourcePath: output/AI트렌드/2026-07-16_howto_리서치소스.md
---

같은 지침을 매번 다시 붙여넣고 있다면 — 회사 브랜드 규칙, 데이터 분석 절차, PDF 폼을 채우는 방법 — 그 반복을 없애는 표준 방식이 이미 나와 있다. Anthropic은 이런 절차를 **SKILL.md 파일 하나가 든 폴더**로 묶어 두면, Claude가 관련 작업을 만났을 때 그 폴더를 스스로 찾아 읽는 구조를 공개했다(출처: Anthropic 엔지니어링 블로그 "Equipping agents for the real world with Agent Skills", 2025-10-16). 이것이 Agent Skills다.

정의는 짧다. "스킬은 SKILL.md 파일을 담은 디렉터리로, 에이전트에게 추가 역량을 주는 지침·스크립트·리소스의 정리된 묶음"이다(출처: Claude Platform Docs, Agent Skills Overview). 프롬프트가 대화 한 번짜리 지시라면, 스킬은 파일로 저장돼 여러 대화에서 필요할 때마다 자동으로 로드된다. 한 번 만들고, 반복해서 쓴다.

## 왜 컨텍스트를 잡아먹지 않는가 — 프로그레시브 디스클로저

스킬을 수십 개 설치해도 컨텍스트가 터지지 않는 이유는 로딩을 단계로 나누기 때문이다. Anthropic 공식 문서의 토큰 비용 표는 3단계를 이렇게 규정한다(출처: Claude Platform Docs, Agent Skills Overview).

- **Level 1 — 메타데이터**: 항상, 시작 시 로드. 스킬당 약 100 토큰. YAML 프론트매터의 `name`과 `description`만.
- **Level 2 — 지침**: 스킬이 트리거될 때만 로드. 5,000 토큰 미만. SKILL.md 본문.
- **Level 3+ — 리소스**: 필요할 때만. 접근 전까지 토큰 0. 번들된 참고 파일·스크립트.

핵심은 세 번째 줄이다. 스킬 폴더에 API 문서 수십 장이나 대용량 스키마를 넣어도, 그 작업에 실제로 필요한 파일 하나만 읽는다. 나머지는 파일시스템에 남아 토큰을 쓰지 않는다. 스크립트는 더 효율적이다 — Claude가 `validate_form.py`를 실행하면 코드 자체는 컨텍스트에 들어오지 않고, "Validation passed" 같은 **출력만** 토큰을 소비한다(출처: Claude Platform Docs). "스킬이 트리거되기 전까지는 이름과 설명만 컨텍스트를 차지하므로, 컨텍스트 부담 없이 많은 스킬을 설치할 수 있다"는 것이 문서의 설명이다.

## 만드는 법 — description이 절반이다

SKILL.md의 필수 필드는 단 두 개, `name`과 `description`이다(출처: Claude Platform Docs).

```markdown
---
name: pdf-processing
description: Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction.
---

# PDF Processing
## Instructions
[Claude가 따를 단계별 지침]
```

제약은 명확하다. `name`은 최대 64자, 소문자·숫자·하이픈만 쓰며 예약어 "anthropic"·"claude"는 금지된다. `description`은 최대 1,024자이고, **무엇을 하는지와 언제 쓰는지를 둘 다** 담아야 한다(출처: Claude Platform Docs).

이 `description`이 왜 절반이냐면, Claude가 스킬을 발동할지 결정하는 근거가 바로 그 한 줄이기 때문이다. Anthropic은 직접 이렇게 못박는다. "스킬의 `name`과 `description`에 특별히 주의하라. Claude는 스킬을 트리거할지 판단할 때 이 값을 사용한다"(출처: Anthropic 엔지니어링 블로그, 2025-10-16). 지침을 아무리 잘 써도 설명이 모호하면 스킬은 영영 호출되지 않는다.

## 어디에 두는가 — 표면마다 다르다

같은 스킬 개념이지만 설치 위치와 제약은 표면별로 갈린다(모두 출처: Claude Platform Docs).

- **Claude Code**: 파일시스템 기반. 개인용은 `~/.claude/skills/`, 프로젝트용은 `.claude/skills/`에 폴더를 두면 자동 발견된다. API 업로드가 필요 없고, 사용자 컴퓨터의 다른 프로그램과 동일한 **풀 네트워크 액세스**를 가진다.
- **claude.ai**: Settings > Features에서 zip으로 업로드. 코드 실행이 켜진 Pro·Max·Team·Enterprise 플랜에서 동작하며, **사용자 개인 단위**라 팀원마다 따로 올려야 하고 관리자 중앙 배포는 안 된다.
- **Claude API**: 베타 헤더 `skills-2025-10-02`와 code execution tool이 필요하다. 컨테이너는 **네트워크 없음·런타임 패키지 설치 불가**인 샌드박스다. 사전 제작 스킬은 `skill_id`로 `pptx`·`xlsx`·`docx`·`pdf`를 바로 부를 수 있다.

바로 써 볼 스킬이 필요하면 Anthropic이 GitHub `anthropics/skills`에 오픈소스로 공개해 두었다. Claude Code에서는 `/plugin marketplace add anthropics/skills` 후 `/plugin install document-skills@anthropic-agent-skills`로 설치한다(출처: GitHub anthropics/skills). 카테고리는 Creative & Design, Development & Technical, Enterprise & Communication, Document Skills로 나뉘고, 대부분 Apache 2.0이되 문서 스킬(docx·pdf·pptx·xlsx)은 오픈소스가 아닌 source-available 레퍼런스 구현이다.

## 한계와 주의 — 세 가지

편의만큼 함정도 분명하다.

첫째, **표면 간 동기화가 안 된다.** 공식 문서는 "커스텀 스킬은 표면 간에 동기화되지 않는다"고 명시한다(출처: Claude Platform Docs). claude.ai에 올린 스킬은 API에서 안 보이고, 반대도 마찬가지다. 각 표면에 따로 올려야 한다.

둘째, **보안은 소프트웨어 설치처럼 다뤄야 한다.** Anthropic의 권고는 단호하다. "직접 만들었거나 Anthropic에서 받은, 신뢰할 수 있는 출처의 스킬만 사용하라." 스킬은 지침과 코드로 Claude에게 새 역량을 주기 때문에, 악의적 스킬은 명시된 목적과 다르게 도구를 호출하거나 데이터를 유출시킬 수 있다. 외부 URL에서 데이터를 가져오는 스킬은 특히 위험하다(출처: Claude Platform Docs). GitHub 저장소의 예시 스킬조차 "데모·교육 목적이며, 중요 작업에 의존하기 전 자신의 환경에서 충분히 테스트하라"고 못박는다(출처: GitHub anthropics/skills).

셋째, **데이터 보존 정책이 다르다.** Agent Skills는 ZDR(Zero Data Retention) 대상이 아니며, 스킬 정의와 실행 데이터는 Anthropic의 표준 보존 정책을 따른다(출처: Claude Platform Docs). 민감 데이터를 다루는 프로덕션이라면 이 점을 먼저 확인해야 한다.

## 한 줄 정리

Agent Skills는 "매번 설명하던 절차"를 SKILL.md 폴더 하나로 굳혀 Claude가 필요할 때 스스로 불러 쓰게 하는 장치다. 성패는 결국 `description` 한 줄에 달려 있고 — 무엇을 언제 쓰는지 명확히 적을 것 — 표면별 설치 위치와 신뢰 출처 원칙만 지키면, 반복 지침 붙여넣기는 이제 안 해도 된다.

---

*출처: [Anthropic 엔지니어링 블로그 — Equipping agents for the real world with Agent Skills (2025-10-16)](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), [Claude Platform Docs — Agent Skills Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [GitHub — anthropics/skills](https://github.com/anthropics/skills). 리서치노트: output/AI트렌드/2026-07-16_howto_리서치소스.md*
