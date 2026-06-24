/**
 * PublishAdapter — 발행 채널 전략(Strategy) 계약.
 *
 * 각 발행 대상(static / wordpress / tistory / brunch)은 이 인터페이스를
 * 구현한다. 호출부는 구체 어댑터를 모른 채 동일 계약으로 발행/검증한다.
 *
 * ★발행(deploy/외부 발송)은 주인님 승인 게이트(denylist)에 속한다.
 *   어댑터는 콘텐츠 기록·API 호출까지만 책임지며, 빌드·배포는 별도 단계다.
 */

/** 발행 대상 채널 — content collection 이름과 1:1 대응. */
export type PublishChannel = 'ministry' | 'insight';

/** 발행 입력 — 콘텐츠 + 메타데이터의 불변 스냅샷. */
export interface PublishInput {
  readonly slug: string;
  readonly channel: PublishChannel;
  readonly frontmatter: Record<string, unknown>;
  readonly markdown: string;
  readonly html?: string;
  readonly assets: ReadonlyArray<{ path: string; alt: string }>;
}

/** 발행 결과 — 성공 여부 + 대상/URL/외부ID/에러. */
export interface PublishResult {
  readonly ok: boolean;
  readonly target: string;
  readonly url?: string;
  readonly externalId?: string;
  readonly error?: string;
}

/** 검증 결과 — 통과 여부 + 발견된 이슈 목록. */
export interface ValidationResult {
  readonly ok: boolean;
  readonly issues: string[];
}

/** 발행 채널 어댑터 계약. */
export interface PublishAdapter {
  readonly name: string;
  readonly enabled: boolean;
  validate(input: PublishInput): Promise<ValidationResult>;
  publish(input: PublishInput): Promise<PublishResult>;
  unpublish?(externalId: string): Promise<PublishResult>;
}
