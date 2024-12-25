import { Article } from '../_components/article';
import { RelatedArticles } from '../_components/related-articles';
// import { RateArticle } from '../_components/rate-article';
import { ARTICLES } from '@/data';

const ArticleDetailsPage = ({ params: { articleId } }) => {
  const ARTICLE = ARTICLES.find((article) => article.id == articleId);

  const FILTERED_ARTICLES = ARTICLES.filter(
    (article) => article.id != articleId
  );

  return (
    <main>
      <Article data={ARTICLE} />
      <RelatedArticles data={FILTERED_ARTICLES} />
      {/* <RateArticle /> */}
    </main>
  );
};

export default ArticleDetailsPage;
