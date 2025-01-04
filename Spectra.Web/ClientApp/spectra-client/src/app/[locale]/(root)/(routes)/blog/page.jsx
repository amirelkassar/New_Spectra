import { ImportantArticles } from './_components/important-articles';
import { LatestArticles } from './_components/latest-articles';
import { Intro } from './_components/intro';
import { FeaturesArticles } from './_components/features-articles';
import { ArticlesTabsBar } from './_components/articles-tabs-bar';
import { Container } from '@/guest/_components/ui';
import { ARTICLES } from '@/data';

const BlogsPage = ({ searchParams }) => {
  const tab = searchParams?.tab || '';

  const importantArticles = ARTICLES;
  const featuresArticles = ARTICLES.slice(0, 5);
  const latestArticles = ARTICLES.reverse().slice(0, 5);

  return (
    <main>
      <Intro />
      <FeaturesArticles data={featuresArticles} />
      <ArticlesTabsBar />
      <Container className='mdl:grid mdl:grid-cols-4 mdl:gap-5 mdl:py-10 py-5'>
        <ImportantArticles
          data={filterArticlesByTab(importantArticles, tab)}
        />
        <LatestArticles
          data={filterArticlesByTab(latestArticles, tab)}
        />
      </Container>
    </main>
  );
};

export default BlogsPage;

function filterArticlesByTab(articles = [], tab = '') {
  if (!tab) return articles;
  return articles.filter((art) => art.type.includes(tab));
}
