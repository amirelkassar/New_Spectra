import { ARTICLES } from '@/lib/demoData';
import { ImportantArticles } from '../_components/important-articles';
import { LatestArticles } from '../_components/latest-articles';

const ArticlesPage = ({ params: { articles } }) => {
  return (
    <>
      <div className='mdl:grid mdl:grid-cols-4 mdl:gap-5 max-w-6xl mx-auto container mdl:py-10 py-5 w-full text-black'>
        <ImportantArticles
          data={ARTICLES.filter((article) =>
            article.type.includes(articles)
          )}
        />
        <LatestArticles
          data={ARTICLES.filter((article) =>
            article.type.includes(articles)
          )}
        />
      </div>
    </>
  );
};

export default ArticlesPage;
