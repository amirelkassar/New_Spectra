import { ARTICLES } from '@/lib/demoData';
import { Article } from '../_components/article';
import { RelatedArticles } from '../_components/related-articles';
import { RateArticle } from '../_components/rate-article';

const ArticleDetailsPage = ({ params: { articleId } }) => {
  const ARTICLE = ARTICLES.find(
    (article) => article.id == articleId
  );

  return (
    <main>
      <Article data={ARTICLE} />
      <RelatedArticles />
      <RateArticle />
    </main>
  );
};

export default ArticleDetailsPage;
