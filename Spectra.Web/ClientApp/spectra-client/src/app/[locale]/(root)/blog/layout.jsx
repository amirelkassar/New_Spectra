import { Intro } from './_components/intro';
import { SearchBar } from './_components/search-bar';
import { ArticlesTabsBar } from './_components/articles-tabs-bar';

const BlogLayout = ({ children }) => {
  return (
    <main>
      <Intro />
      <SearchBar />
      <ArticlesTabsBar />
      {children}
    </main>
  );
};

export default BlogLayout;
