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

export const initialQueryKey = 'admin.main-data.services';

export const getServices = async (queries) =>
  (await apiAdmin.get(mainData.services.list(queries)))
    .data;

export const prefetchServices = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getServices(initialQueries),
  });

  return queryClient;
};

//getAll
export const useServices = (pageNum = 1, search = '') => {
  const queries = getQueries(
    pageNum,
    search,
    initialQueries
  );

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getServices(queries),
  });
};

//getAll
export const useServicesForListing = (
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
    queryFn: async () => {
      return (
        await apiAdmin.get(
          mainData.services.forListing(queries)
        )
      ).data;
    },
  });
};

//getID
export const useServicesById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        mainData.services.actions.get(id)
      );
      return response.data;
    },
  });
};

//delete
export const useDeleteService = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        mainData.services.actions.delete(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
    },
  });
};

//post
export const useAddNewService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        mainData.services.actions.add,
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
export const useUpdateService = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        mainData.services.actions.update(id),
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
