import { Intro } from './_components/intro';
import { SearchBar } from './_components/search-bar';
import { FeaturesArticles } from './_components/features-articles';
import { ARTICLES } from '@/lib/demoData';
import { ArticlesTabsBar } from './_components/articles-tabs-bar';

const BlogLayout = ({ children }) => {
  return (
    <main>
      <Intro />
      <SearchBar />
      <FeaturesArticles data={ARTICLES} />
      <ArticlesTabsBar />

      {children}
    </main>
  );
};

export default BlogLayout;
