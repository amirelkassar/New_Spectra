import {
  keepPreviousData,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { services } from '@/api/user';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';

const initailCustomQueries = null;

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'user.services';

export const getUserServices = async (queries) =>
  (await apiUser.get(services.list(queries))).data;

export const prefetchServices = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getUserServices(initialQueries),
  });

  return queryClient;
};

export const useUserServices = (
  params = {
    pageNum: null,
    search: '',
    serviceType: '',
    freeLancerOnly: '',
    spectraTeamOnly: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getUserServices(queries),
    placeholderData: keepPreviousData,
  });
};
