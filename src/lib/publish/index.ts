import { BrunchAdapter } from './BrunchAdapter';
import { StaticAdapter } from './StaticAdapter';
import { TistoryAdapter } from './TistoryAdapter';
import { WordpressAdapter } from './WordpressAdapter';

import type { PublishAdapter } from './PublishAdapter';

export type {
  PublishAdapter,
  PublishChannel,
  PublishInput,
  PublishResult,
  ValidationResult,
} from './PublishAdapter';

export { StaticAdapter } from './StaticAdapter';
export { WordpressAdapter } from './WordpressAdapter';
export { TistoryAdapter } from './TistoryAdapter';
export { BrunchAdapter } from './BrunchAdapter';

/**
 * 발행 대상 → 어댑터 레지스트리.
 * static 만 enabled; 외부 채널은 stub(주인님 승인 게이트 전까지 동결).
 */
export const ADAPTERS: Record<string, PublishAdapter> = {
  static: new StaticAdapter(),
  wordpress: new WordpressAdapter(),
  tistory: new TistoryAdapter(),
  brunch: new BrunchAdapter(),
};

/**
 * 발행 대상 키로 어댑터를 조회한다.
 * @throws 알 수 없는 대상이면 명시적으로 실패(조용한 fallback 금지).
 */
export function getAdapter(channelTarget: string): PublishAdapter {
  const adapter = ADAPTERS[channelTarget];
  if (!adapter) {
    throw new Error(
      `unknown publish target: "${channelTarget}" (available: ${Object.keys(ADAPTERS).join(', ')})`,
    );
  }
  return adapter;
}
