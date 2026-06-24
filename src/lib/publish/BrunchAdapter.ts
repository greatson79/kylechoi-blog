import type {
  PublishAdapter,
  PublishInput,
  PublishResult,
  ValidationResult,
} from './PublishAdapter';

/**
 * BrunchAdapter — STUB (동결, 미구현).
 *
 * ★공개 쓰기 API 부재(역대). UI 발행만. stub 동결
 *   (자동화 = 비공식·ToS 위반 위험). 카카오 브런치는 공개 발행 API를
 *   제공한 적이 없으며, 글쓰기는 웹/앱 UI로만 가능하다.
 */
export class BrunchAdapter implements PublishAdapter {
  readonly name = 'brunch';
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
