import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '@lib/constants';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: `${SITE.brandName} — каталог знаний об Эквадоре`,
    description:
      'Статьи независимого консультанта по недвижимости в Эквадоре для русскоязычной аудитории.',
    site: context.site ?? SITE.url,
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: article.data.pubDate,
      description: article.data.description,
      link: `/znaniya/${article.id}`,
      categories: [article.data.category],
    })),
    customData: '<language>ru-ru</language>',
  });
}
