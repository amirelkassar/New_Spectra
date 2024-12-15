import { QueryClient } from '@tanstack/react-query';

import {
  getPublicServices,
  initialQueryKey as servicesInitialQueryKey,
} from './services';

export const prefetchLandingPageData = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [servicesInitialQueryKey],
      queryFn: getPublicServices,
    }),
  ]);

  return queryClient;
};
