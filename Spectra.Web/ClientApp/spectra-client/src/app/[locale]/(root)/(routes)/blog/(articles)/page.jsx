import { ARTICLES } from '@/lib/demoData';
import { ImportantArticles } from './_components/important-articles';
import { LatestArticles } from './_components/latest-articles';

const BlogsPage = () => {
  return (
    <>
      <div className='mdl:grid mdl:grid-cols-4 mdl:gap-5 max-w-[1600px] mx-auto container mdl:py-10 py-5 w-full text-black'>
        <ImportantArticles data={ARTICLES} />
        <LatestArticles data={ARTICLES} />
      </div>
    </>
  );
};

export default BlogsPage;
