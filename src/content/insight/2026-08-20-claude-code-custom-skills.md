---
title: "AI트렌드 — Claude Code에 나만의 스킬 만드는 법"
description: "구글 클라우드 보고서가 보여준 에이전트 자동화 효과, 그리고 Claude Code SKILL.md로 반복 업무를 직접 스킬로 만드는 실전 절차."
category: AI트렌드
pubDate: 2026-08-20
author: 디딤
tags: [AI트렌드, ClaudeCode, Skills, 업무자동화, 에이전트]
draft: true
disclaimerRequired: false
factChecked: false
sourcePath: output/AI트렌드/2026-08-20_howto_리서치소스.md
---

덴마크 산업기기 기업 댄포스(Danfoss)는 거래성 의사결정의 80%를 AI 에이전트에 맡기면서 고객 응답 시간을 평균 42시간에서 거의 실시간 수준으로 줄였다. 캐나다 통신사 텔러스(Telus)는 직원 5만7천여 명이 AI를 쓰면서 상호작용 한 번당 평균 40분의 업무 시간을 아꼈다. 구글 클라우드가 2025년 12월 19일 공개한 '2026 AI 에이전트 트렌드 보고서'에 담긴 수치다(AITimes, 2026).

이런 효과는 거대 기업만의 이야기가 아니다. 매일 반복하는 업무 절차를 에이전트에게 "한 번만 제대로" 가르쳐두면, 개인 작업 환경에서도 비슷한 축소 효과를 낼 수 있다. Claude Code의 Skills 기능이 그 통로다.

## Skill은 무엇을 저장하는 파일인가

Skill의 실체는 `SKILL.md` 하나다. YAML frontmatter(언제 쓸지 알려주는 설명)와 markdown 본문(실행할 지침)으로 이뤄지며, 이 파일이 들어있는 디렉토리 이름이 곧 호출 명령어 `/스킬이름`이 된다(Claude Code 공식 문서, code.claude.com/docs/ko/skills).

저장 위치에 따라 적용 범위가 갈린다.

- Personal: `~/.claude/skills/<이름>/SKILL.md` — 모든 프로젝트에서 사용
- Project: `.claude/skills/<이름>/SKILL.md` — 해당 프로젝트에서만 사용, git으로 버전관리 가능
- Plugin: 플러그인 배포용

같은 이름이 여러 위치에 있으면 enterprise > personal > project 순으로 덮어쓴다. 프로젝트 스킬이 `/code-review`처럼 번들 스킬과 이름이 같으면 프로젝트 쪽이 우선한다.

기존에 쓰던 `.claude/commands/deploy.md` 같은 커맨드 파일도 사실상 스킬과 동일하게 작동한다(둘 다 `/deploy`를 만든다). 다만 스킬은 지원 파일 디렉토리, 호출 권한 제어, 동적 데이터 주입 같은 기능을 추가로 지원한다.

## 5분짜리 예시: 커밋 전 diff 요약 스킬

공식 문서가 제시한 예시는 커밋되지 않은 변경사항을 요약하고 위험 요소를 짚어주는 스킬이다.

```bash
mkdir -p ~/.claude/skills/summarize-changes
```

`~/.claude/skills/summarize-changes/SKILL.md`:

```yaml
---
description: Summarizes uncommitted changes and flags anything risky. Use when the user asks what changed, wants a commit message, or asks to review their diff.
---

## Current changes

!`git diff HEAD`

## Instructions

Summarize the changes above in two or three bullet points, then list any risks you notice such as missing error handling, hardcoded values, or tests that need updating.
```

여기서 `` !`git diff HEAD` `` 줄이 핵심이다. 이건 Claude가 읽는 텍스트가 아니라, Claude가 프롬프트를 보기 전에 셸에서 먼저 실행되는 명령이다. 실행 결과(실제 diff)가 그 자리를 대체한 뒤에야 Claude에게 전달된다. 그래서 Claude는 "diff를 확인해봐"라는 지시가 아니라 이미 채워진 실제 데이터를 받는다.

테스트는 두 가지 방식으로 가능하다. `What did I change?`처럼 description과 맞아떨어지는 질문을 던져 Claude가 자동으로 호출하게 하거나, `/summarize-changes`로 직접 부른다.

## 호출 권한을 나누는 이유

스킬은 기본적으로 사용자와 Claude 모두 호출할 수 있다. 하지만 배포(`/deploy`)처럼 부작용이 있는 작업은 타이밍을 사람이 직접 통제해야 한다. 이때 frontmatter에 `disable-model-invocation: true`를 추가하면 Claude가 알아서 실행하지 못하고, 사용자가 명시적으로 `/deploy`를 입력할 때만 작동한다. 반대로 `user-invocable: false`는 사용자가 직접 부를 일은 없지만 Claude가 배경지식으로 참고해야 하는 스킬(예: 레거시 시스템 설명)에 쓴다.

스크립트를 실행하는 스킬이라면 `allowed-tools`로 특정 도구를 미리 승인해둘 수 있다. 예를 들어 커밋 스킬에 `allowed-tools: Bash(git add *) Bash(git commit *)`를 걸어두면, 스킬이 활성화될 때마다 매번 권한을 묻지 않는다.

## 만들고 끝이 아니라 측정한다

스킬이 트리거되는 것과, 트리거됐을 때 원하는 출력을 내는 것은 별개 문제다. 공식 문서는 새 세션에서 스킬을 켠 상태와 끈 상태로 같은 프롬프트를 각각 실행해 비교하라고 권한다. 이 비교를 자동화해주는 것이 공식 `skill-creator` 플러그인이다.

```
/plugin install skill-creator@claude-plugins-official
```

설치 후 "evaluate my summarize-changes skill with skill-creator"라고 요청하면, 테스트 케이스를 `evals/evals.json`에 저장하고, 케이스마다 격리된 서브에이전트로 실행해 토큰·시간을 기록하고, 스킬 유무에 따른 통과율을 벤치마크로 뽑아준다.

## Skills는 지금도 계속 업데이트되는 영역이다

Claude Code는 2026년 8월에만 여러 차례 스킬 관련 업데이트를 냈다. v2.1.232(8월 14일)에서는 기본 서브에이전트 포킹이 활성화됐고, v2.1.233(8월 15일)에서는 기본 제공 스킬(`/checkup`, `/review`) 관련 버그가 수정됐으며, v2.1.234(8월 18일)에서는 forked skill의 모델 제한 경고가 추가됐다(releasebot.io 업데이트 로그 기준). 스킬을 서브에이전트에서 격리 실행하는 `context: fork` 옵션처럼, 최근 몇 주 사이 나온 기능일수록 문서와 실제 동작을 한 번 더 확인하고 쓰는 게 안전하다.

## 한계와 주의

- SKILL.md는 호출될 때마다 대화 컨텍스트에 그대로 실려서 세션 내내 유지된다. 500줄을 넘기지 않고, 큰 참고자료는 별도 파일로 분리해 필요할 때만 읽히게 하는 편이 토큰 비용 면에서 낫다.
- `disableSkillShellExecution` 설정이 켜진 조직 환경에서는 `` !`command` `` 형태의 동적 주입이 아예 차단된다는 점도 감안해야 한다.
- 이번 글에서 다룬 수치와 기능 설명은 모두 공식 문서·1차 보도로 확인한 것만 실었다. 워터마킹이나 MCP 신규 스펙처럼 검색 스니펫에는 나왔지만 1차 출처로 재확인하지 못한 내용은 의도적으로 뺐다.

한 줄로 정리하면, Skills는 "채팅창에 매번 붙여넣던 지시문"을 파일 하나로 응고시키는 도구다. 반복되는 절차가 있다면, 그 절차를 오늘 SKILL.md로 옮겨보는 것부터가 활용법의 전부다.
