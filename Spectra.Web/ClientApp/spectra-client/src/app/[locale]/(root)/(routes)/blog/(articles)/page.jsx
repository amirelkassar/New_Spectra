import { ARTICLES } from '@/lib/demoData';
import { ImportantArticles } from './_components/important-articles';
import { LatestArticles } from './_components/latest-articles';
import { Container } from '@/guest/_components/ui';

const BlogsPage = () => {
  return (
    <Container className='mdl:grid mdl:grid-cols-4 mdl:gap-5 mdl:py-10 py-5'>
      <ImportantArticles data={ARTICLES} />
      <LatestArticles data={ARTICLES} />
    </Container>
  );
};

export default BlogsPage;
