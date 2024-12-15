import {
  keepPreviousData,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

import { apiPublic } from '@/api/axios';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';
import { services } from '@/api/public';

const initailCustomQueries = null;

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'public.services';

export const getPublicServices = async (queries) =>
  (await apiPublic.get(services.listDisplay(queries))).data;

export const prefetchPublicServices = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getPublicServices(initialQueries),
  });

  return queryClient;
};

export const usePublicServices = (
  params = {
    pageNum: null,
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getPublicServices(queries),
    placeholderData: keepPreviousData,
  });
};

export const usePublicServicesById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiPublic.get(services.actions.get(id))).data,
  });
};
