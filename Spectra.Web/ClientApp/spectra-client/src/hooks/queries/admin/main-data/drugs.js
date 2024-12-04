import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { mainData } from '@/api/admin';
import { getQueries } from '@/lib/utils';

export const initialQueries = {
  skipCount: 0,
  maxCount: 5,
};

export const initialQueryKey = 'admin.main-data.drugs';

export const getDrugs = async (queries) =>
  (await apiAdmin.get(mainData.drugs.list(queries))).data;

export const prefetchDrugs = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getDrugs(initialQueries),
  });

  return queryClient;
};

export const useDrugs = (
  params = {
    pageNum: null,
    search: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getDrugs(queries),
    placeholderData: keepPreviousData,
  });
};

export const GetDrugsID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(mainData.drugs.actions.get(id));
      return response.data;
    },
  });
};

export const DeleteDrugs = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.drugs.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
  });
};

export const useCreateDrug = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.drugs.actions.add,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
    onError: () => {},
  });
};

export const useEditDrug = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.drugs.actions.update(id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};
