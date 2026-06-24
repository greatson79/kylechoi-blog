import type {
  PublishAdapter,
  PublishInput,
  PublishResult,
  ValidationResult,
} from './PublishAdapter';

/**
 * TistoryAdapter — STUB (동결, 미구현).
 *
 * ★Tistory Open API 2024-02 종료(공식) → 공식 발행 경로 없음. stub 동결.
 *   (과거 OAuth 기반 글쓰기 API가 있었으나 공식 폐지됨. 비공식 우회는
 *    ToS 위반 위험으로 채택하지 않는다.)
 */
export class TistoryAdapter implements PublishAdapter {
  readonly name = 'tistory';
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
