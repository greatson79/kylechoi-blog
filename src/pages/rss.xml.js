import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Kyle Choi Notes RSS 피드 — 전 카테고리(ministry·교육·시대분석·AI트렌드) 최신글 통합.
// 정적 빌드 시 /rss.xml 로 출력(build.format='directory'라도 확장자 경로는 파일로 생성).
//
// ★공개 규칙과 일치:
//   - ministry 컬렉션: !draft (ministry/education 목록 페이지와 동일)
//   - education 컬렉션: !draft (/education 목록 페이지와 동일 — 목록도 factChecked를 안 건다)
//     같은 id의 미이관 ministry(category=교육)는 education이 이긴다(URL 중복 방지 — 목록 페이지와 동일).
//   - insight 컬렉션: !draft && factChecked (agy 법적 게이트 통과분만 — 미검증 노출 차단)

// 카테고리 → 라우트 세그먼트 매핑(insight 컬렉션은 2채널로 분기).
const ROUTE = {
  ministry: 'ministry',
  교육: 'education',
  시대분석: 'insight',
  AI트렌드: 'ai-trend',
};

export async function GET(context) {
  const live = ({ data }) => !data.draft && data.pubDate <= new Date();
  const education = await getCollection('education', live);
  const ministry = (await getCollection('ministry', live)).filter(
    (p) => !education.some((e) => e.id === p.id)
  );
  const insight = await getCollection('insight', (p) => live(p) && p.data.factChecked);

  const items = [...ministry, ...education, ...insight]
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      // 상대 경로 — @astrojs/rss가 site(https://kylechoi.com) 기준 절대 URL로 해소.
      link: `/${ROUTE[post.data.category]}/${post.id}/`,
      categories: [post.data.category, ...(post.data.tags ?? [])],
    }))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Kyle Choi Notes',
    description: 'Faith · AI · Learning — 신앙·AI·배움에 관한 기록',
    site: context.site,
    items,
    customData: '<language>ko</language>',
  });
}
