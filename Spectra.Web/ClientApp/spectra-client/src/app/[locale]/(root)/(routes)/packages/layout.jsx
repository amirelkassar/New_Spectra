import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchPublicPackages } from '@/hooks/queries/public/packages';

const PackagesLayout = async ({ children }) => {
  const queryClient = await prefetchPublicPackages();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default PackagesLayout;
