import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeUrls,
  submitIndexNow,
} from '../scripts/indexnow.mjs';

test('같은 URL을 한 번만 전송하도록 정규화한다', () => {
  assert.deepEqual(normalizeUrls([
    'https://kylechoi.com/ai-trend/new-article/',
    'https://kylechoi.com/ai-trend/new-article/',
    'https://kylechoi.com',
    'https://kylechoi.com/',
  ]), [
    'https://kylechoi.com/ai-trend/new-article/',
    'https://kylechoi.com/',
  ]);
});

test('외부 도메인과 HTTP URL을 거부한다', () => {
  assert.throws(
    () => normalizeUrls(['https://example.com/post/']),
    /kylechoi\.com/,
  );
  assert.throws(
    () => normalizeUrls(['http://kylechoi.com/post/']),
    /HTTPS/,
  );
});

test('라이브 200 확인 후 IndexNow payload를 전송한다', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (options.method === 'POST') return new Response('', { status: 202 });
    return new Response('', { status: 200 });
  };

  const result = await submitIndexNow(
    ['https://kylechoi.com/ai-trend/new-article/'],
    { fetchImpl },
  );

  assert.equal(result.status, 202);
  assert.equal(calls.length, 2);
  const payload = JSON.parse(calls[1].options.body);
  assert.equal(payload.host, 'kylechoi.com');
  assert.deepEqual(payload.urlList, [
    'https://kylechoi.com/ai-trend/new-article/',
  ]);
});

test('라이브 URL이 200이 아니면 IndexNow를 전송하지 않는다', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    return new Response('', { status: 404 });
  };

  await assert.rejects(
    submitIndexNow(['https://kylechoi.com/missing/'], { fetchImpl }),
    /HTTP 404/,
  );
  assert.equal(calls.length, 1);
});

test('삭제 통보는 404와 410을 허용한다', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (options.method === 'POST') return new Response('', { status: 200 });
    return new Response('', { status: 410 });
  };
  const result = await submitIndexNow(
    ['https://kylechoi.com/removed/'],
    { fetchImpl, allowDeleted: true },
  );
  assert.equal(result.submitted, 1);
  assert.equal(calls.length, 2);
});
