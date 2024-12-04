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

export const initialQueryKey = 'admin.main-data.analysis';

export const getAnalysis = async (queries) =>
  (await apiAdmin.get(mainData.medicalTestsAndXray.list(queries))).data;

export const prefetchMedicalTests = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getAnalysis(initialQueries),
  });

  return queryClient;
};

//getAll
export const useMedicalTests = (
  params = {
    pageNum: null,
    search: null,
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getAnalysis(queries),
    placeholderData: keepPreviousData,
  });
};

//getID
export const GetMedicalTestsID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.medicalTestsAndXray.actions.get(id)
      );
      return response.data;
    },
  });
};

//delete
export const DeleteMedicalTests = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.medicalTestsAndXray.actions.delete(id)
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

//post
export const useCreateMedicalTests = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.medicalTestsAndXray.actions.add,
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

//put
export const useEditMedicalTests = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.medicalTestsAndXray.actions.update(id),
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
