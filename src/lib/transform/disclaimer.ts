/**
 * disclaimer.ts — 투자/시장 키워드 스캔(순수 함수).
 *
 * ★조건부 면책: 투자/시장 다룰 때만 true. 기본 false.
 *   agy 법적 게이트가 최종 확정·강제. (이 함수는 1차 휴리스틱 플래깅일 뿐,
 *   notInvestmentAdvice/factChecked 등 법적 확정은 별도 게이트가 강제한다.)
 */

import type { DisclaimerResult } from '../ingest/types.js';

/**
 * 투자/시장 관련 키워드 목록(한국어 + 영어).
 * 대소문자 무시. 한글은 단어 경계가 불명확하므로 부분일치, 영어는 단어 경계 매칭.
 */
export const INVESTMENT_KEYWORDS: ReadonlyArray<string> = [
  // ── 한국어: 투자 행위·상품 ──
  '투자', '주식', '종목', '매수', '매도', '매매', '수익률', '손실',
  '포트폴리오', '자산배분', '배당', '시가총액', '공매도', '레버리지',
  '펀드', '채권', '선물', '옵션', '파생상품', '가상자산', '암호화폐', '코인',
  // ── 한국어: 시장·거시 ──
  '시장', '증시', '금리', '환율', '인플레이션', '경기침체', '유동성',
  '코스피', '코스닥', '나스닥', '다우', 'S&P', '연준', '한국은행',
  // ── 영어 ──
  'ETF', 'stock', 'stocks', 'equity', 'equities', 'invest', 'investment',
  'investing', 'portfolio', 'dividend', 'bond', 'bonds', 'futures',
  'options', 'derivative', 'derivatives', 'crypto', 'cryptocurrency',
  'bitcoin', 'NASDAQ', 'Dow', 'interest rate', 'inflation', 'recession',
  'bull market', 'bear market', 'yield', 'valuation',
];

/** 영어 알파벳/숫자로만 이뤄진 키워드인지(단어 경계 적용 대상). */
function isAsciiWord(keyword: string): boolean {
  return /^[A-Za-z0-9 &]+$/.test(keyword);
}

/** 정규식 메타문자 이스케이프. */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 텍스트에서 투자/시장 키워드를 스캔한다.
 * @returns disclaimerRequired(하나라도 매칭 시 true) + matched(중복 제거된 매칭 키워드).
 */
export function flagInvestment(text: string): DisclaimerResult {
  const haystack = text ?? '';
  const lower = haystack.toLowerCase();
  const matched: string[] = [];

  for (const keyword of INVESTMENT_KEYWORDS) {
    const found = isAsciiWord(keyword)
      ? new RegExp(`\\b${escapeRegExp(keyword.toLowerCase())}\\b`).test(lower)
      : haystack.includes(keyword);
    if (found) matched.push(keyword);
  }

  return {
    disclaimerRequired: matched.length > 0,
    matched: Object.freeze(matched),
  };
}
