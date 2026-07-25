import { pathToFileURL } from 'node:url';

export const SITE = 'https://kylechoi.com';
export const KEY = 'b627807824f13cf09e83c293b6ac0c92';
export const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

export function normalizeUrls(urls) {
  const normalized = urls.map((value) => {
    const url = new URL(value);
    if (url.protocol !== 'https:') throw new Error('IndexNow URL은 HTTPS여야 합니다.');
    if (url.hostname !== 'kylechoi.com') {
      throw new Error('IndexNow URL은 kylechoi.com 소속이어야 합니다.');
    }
    return url.href;
  });
  return [...new Set(normalized)];
}

export async function submitIndexNow(
  urls,
  { fetchImpl = fetch, endpoint = ENDPOINT, allowDeleted = false } = {},
) {
  const urlList = normalizeUrls(urls);
  if (urlList.length === 0) throw new Error('IndexNow 전송 URL이 없습니다.');

  for (const url of urlList) {
    const response = await fetchImpl(url, { redirect: 'follow' });
    const allowed = allowDeleted
      ? [200, 404, 410].includes(response.status)
      : response.status === 200;
    if (!allowed) {
      throw new Error(`라이브 검증 실패: ${url} HTTP ${response.status}`);
    }
  }

  const response = await fetchImpl(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'kylechoi.com',
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow 전송 실패: HTTP ${response.status}`);
  }
  return { status: response.status, submitted: urlList.length };
}

async function main() {
  const args = process.argv.slice(2);
  const allowDeleted = args[0] === '--deleted';
  const selected = normalizeUrls(allowDeleted ? args.slice(1) : args);
  const result = await submitIndexNow(selected, { allowDeleted });
  console.log(`IndexNow: HTTP ${result.status}, submitted ${result.submitted}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
