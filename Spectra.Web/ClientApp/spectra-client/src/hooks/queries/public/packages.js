import {
  keepPreviousData,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

import { apiPublic } from '@/api/axios';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';
import { packages } from '@/api/public';

const initailCustomQueries = {
  skipCount: 0,
  maxCount: 100,
};

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'public.packages';

export const getPublicPackages = async (queries) =>
  (await apiPublic.get(packages.list(queries))).data;

export const prefetchPublicPackages = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getPublicPackages(initialQueries),
  });

  return queryClient;
};

export const usePublicPackages = (
  params = {
    pageNum: null,
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getPublicPackages(queries),
    placeholderData: keepPreviousData,
  });
};

export const usePublicPackagesById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () =>
      (await apiPublic.get(packages.actions.get(id))).data,
  });
};
