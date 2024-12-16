import { QueryClient } from '@tanstack/react-query';

import {
  getPublicServices,
  initialQueryKey as servicesInitialQueryKey,
} from './services';

import {
  initialQueryKey as providersInitialQueryKey,
  initialQueries as providersInitialQueries,
  getPublicMedicalProviders,
} from './medical-provider';

export const prefetchLandingPageData = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [servicesInitialQueryKey],
      queryFn: getPublicServices,
    }),
    queryClient.prefetchQuery({
      queryKey: [providersInitialQueryKey, providersInitialQueries],
      queryFn: () =>
        getPublicMedicalProviders(providersInitialQueries),
    }),
  ]);

  return queryClient;
};
