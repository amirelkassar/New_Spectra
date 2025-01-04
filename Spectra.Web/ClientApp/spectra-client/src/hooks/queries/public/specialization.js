import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { apiPublic } from '@/api/axios';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';
import { specialization } from '@/api/public';

const initailCustomQueries = null;

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'public.specialization';

export const getSpecialization = async (queries) =>
  (await apiPublic.get(specialization.list(queries))).data;

export const usePublicSpecialization = (
  params = {
    pageNum: null,
    search: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getSpecialization(queries),
    placeholderData: keepPreviousData,
  });
};

export const useGetPublicSpecializationById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiPublic.get(
        specialization.actions.get(id)
      );
      return response.data;
    },
  });
};
