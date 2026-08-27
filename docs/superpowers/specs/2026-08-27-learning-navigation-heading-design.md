# Learning 네비게이션·제목 크기 정합 설계

## 목표

1. 글로벌 헤더의 `Learning` 링크를 `Curriculum` 바로 앞으로 이동한다.
2. `/learn/` 화면에서 이미지로 지정된 `AI 학습자료실` H1의 크기를 다른 주요 섹션 H1과 동일하게 맞춘다.

## 현재 상태

- 네비게이션: `Education → Learning → AI Trend → Insight → Curriculum`.
- Learning H1: 페이지 지역값 `clamp(3rem, 10vw, 7rem)`으로 전역 섹션 제목보다 크게 렌더된다.
- 다른 주요 섹션 H1: 전역 타이포그래피 토큰 `var(--text-hero)`를 사용한다.

## 결정

- 네비게이션을 `Education → AI Trend → Insight → Learning → Curriculum`으로 바꾼다.
- `/learn/`의 H1 `font-size`를 `var(--text-hero)`로 명시한다.
- H1의 문구, 줄높이, 자간, 여백과 Learning 화면의 다른 요소는 변경하지 않는다.

명시적 토큰 지정을 선택한 이유는 전역 선언을 암묵적으로 상속시키는 것보다 “다른 섹션 제목과 같은 크기”라는 요구가 코드에 직접 드러나고, 이후 토큰 변경도 함께 따라가기 때문이다.

## 범위

- 변경: `src/components/nav/Header.astro`, `src/pages/learn.astro`.
- 회귀: 네비게이션 배열 순서와 Learning H1의 공통 토큰 사용을 검증한다.
- 제외: 문구, 색상, 레이아웃, 카드, 링크 대상, 다른 페이지 스타일, 모바일 전용 재설계.

## 완료 조건

- `Learning`이 `Curriculum`의 바로 앞에 렌더된다.
- `AI 학습자료실` H1의 계산된 `font-size`가 다른 주요 섹션 H1과 동일하다.
- 기존 Learning Room 테스트와 전체 Astro 빌드가 통과한다.
- 데스크톱·모바일 렌더에서 네비게이션과 제목이 잘리거나 겹치지 않는다.
