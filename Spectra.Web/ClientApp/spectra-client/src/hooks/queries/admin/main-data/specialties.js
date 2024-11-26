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
  search: '',
  skipCount: 0,
  maxCount: 5,
};

export const initialQueryKey =
  'admin.main-data.specialization';

export const getSpecialization = async (queries) =>
  (
    await apiAdmin.get(
      mainData.specialization.list(queries)
    )
  ).data;

export const prefetchSpecialization = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getSpecialization(initialQueries),
  });

  return queryClient;
};

//getAll
export const useSpecialization = (
  pageNum = 1,
  search = ''
) => {
  const queries = getQueries(
    pageNum,
    search,
    initialQueries
  );

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getSpecialization(queries),
    placeholderData: keepPreviousData,
  });
};

//getID
export const GetSpecializationID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.specialization.actions.get(id)
      );
      return response.data;
    },
  });
};

//delete
export const DeleteSpecialization = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.specialization.actions.delete(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
  });
};

//post
export const useCreateSpecialization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.specialization.actions.add,
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};

//put
export const useEditSpecialization = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.specialization.actions.update(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};
