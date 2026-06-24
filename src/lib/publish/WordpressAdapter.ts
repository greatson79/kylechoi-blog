import type {
  PublishAdapter,
  PublishInput,
  PublishResult,
  ValidationResult,
} from './PublishAdapter';

/**
 * WordpressAdapter — STUB (인터페이스 예약, 미구현).
 *
 * 발행 경로(검증된 사실, 2026):
 *  - REST API: `POST /wp-json/wp/v2/posts` 로 글을 생성한다.
 *  - 인증: self-host = Application Password(Basic Auth over HTTPS),
 *          WordPress.com = OAuth2.
 *  - stub — interface reserved, 외부 채널 1순위(유일 공식 API).
 *    (외부 발행은 주인님 승인 게이트(denylist) — 구현 시에도 별도 승인 필요.)
 */
export class WordpressAdapter implements PublishAdapter {
  readonly name = 'wordpress';
  readonly enabled = false;

  async validate(_input: PublishInput): Promise<ValidationResult> {
    return { ok: false, issues: ['not implemented — interface reserved'] };
  }

  async publish(_input: PublishInput): Promise<PublishResult> {
    return {
      ok: false,
      target: this.name,
      error: 'not implemented — interface reserved',
    };
  }
}
