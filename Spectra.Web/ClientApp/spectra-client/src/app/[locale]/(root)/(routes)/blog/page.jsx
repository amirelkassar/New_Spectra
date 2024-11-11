import { ARTICLES } from '@/lib/demoData';
import { ImportantArticles } from './_components/important-articles';
import { LatestArticles } from './_components/latest-articles';
import { Intro } from './_components/intro';
import { SearchBar } from './_components/search-bar';
import { FeaturesArticles } from './_components/features-articles';
import { ArticlesTabsBar } from './_components/articles-tabs-bar';
import { Container } from '@/guest/_components/ui';

const BlogsPage = ({ searchParams }) => {
  const tab = searchParams?.tab || '';

  return (
    <main>
      <Intro />
      <SearchBar />
      <FeaturesArticles data={ARTICLES} />
      <ArticlesTabsBar />
      <Container className='mdl:grid mdl:grid-cols-4 mdl:gap-5 mdl:py-10 py-5'>
        <ImportantArticles
          data={filterArticlesByTab(ARTICLES, tab)}
        />
        <LatestArticles
          data={filterArticlesByTab(ARTICLES, tab)}
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
