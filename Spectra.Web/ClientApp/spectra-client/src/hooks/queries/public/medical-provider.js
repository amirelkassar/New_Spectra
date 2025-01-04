import {
  keepPreviousData,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

import { apiPublic } from '@/api/axios';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';
import { medicalProviders } from '@/api/public';

const initailCustomQueries = {
  skipCount: 0,
  maxCount: 12,
};

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'public.medical-provider';

export const getPublicMedicalProviders = async (queries) =>
  (await apiPublic.get(medicalProviders.list(queries))).data;

export const prefetchPublicMedicalProviders = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getPublicMedicalProviders(initialQueries),
  });

  return queryClient;
};

export const usePublicMedicalProviders = (
  params = {
    pageNum: null,
    search: '',
    mainSpecializationId: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getPublicMedicalProviders(queries),
    placeholderData: keepPreviousData,
  });
};

const getPublicMedicalProvidersById = async (id) =>
  (await apiPublic.get(medicalProviders.actions.get(id))).data;

export const prefetchPublicMedicalProvidersById = async (id) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, id],
    queryFn: () => getPublicMedicalProvidersById(id),
  });

  return queryClient;
};

export const usePublicMedicalProvidersById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: () => getPublicMedicalProvidersById(id),
  });
};
