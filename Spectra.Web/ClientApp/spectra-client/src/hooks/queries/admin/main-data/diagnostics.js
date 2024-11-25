import {
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
  'admin.main-data.diagnostics';

export const getDiagnostics = async (queries) =>
  (await apiAdmin.get(mainData.diagnose.list(queries)))
    .data;

export const prefetchDiagnostics = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getDiagnostics(initialQueries),
  });

  return queryClient;
};

//getAll
export const useDiagnostics = (
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
    queryFn: () => getDiagnostics(queries),
  });
};

//getID
export const GetDiagnosticsID = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.diagnose.actions.get(id)
      );
      return response;
    },
  });
};

//delete
export const DeleteDiagnostics = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.diagnose.actions.delete(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
  });
};

//post
export const useCreateDiagnostics = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.diagnose.actions.add,
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
export const useEditDiagnostics = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.diagnose.actions.update(id),
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
