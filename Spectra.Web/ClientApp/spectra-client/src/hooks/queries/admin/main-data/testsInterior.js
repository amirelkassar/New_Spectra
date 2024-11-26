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
  'admin.main-data.internalExamination';

export const getInternalExamination = async (queries) =>
  (
    await apiAdmin.get(
      mainData.internalExamination.list(queries)
    )
  ).data;

export const prefetchInternalExamination = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getInternalExamination(initialQueries),
  });

  return queryClient;
};

//getAll
export const useInternalExamination = (
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
    queryFn: () => getInternalExamination(queries),
    placeholderData: keepPreviousData,
  });
};

//getID
export const GetInternalExaminationID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.internalExamination.actions.get(id)
      );
      return response;
    },
  });
};

//delete
export const DeleteInternalExamination = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.internalExamination.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
  });
};

//post
export const useCreateInternalExamination = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.internalExamination.actions.add,
        data
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
export const useEditInternalExamination = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.internalExamination.actions.update(id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};
