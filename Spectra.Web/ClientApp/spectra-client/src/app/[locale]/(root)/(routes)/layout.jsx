import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Header, Footer } from '@/guest/_components/layouts';
import { prefetchLandingPageData } from '@/hooks/queries/public/landing-page';

const Layout = async ({ children }) => {
  const queryClient = await prefetchLandingPageData();

  return (
    <div className='overflow-hidden relative'>
      <Header />
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
      <Footer />
    </div>
  );
};

export default Layout;
