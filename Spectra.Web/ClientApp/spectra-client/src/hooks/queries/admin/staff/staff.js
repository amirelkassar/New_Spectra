import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { staff } from '@/api/admin';
import { getQueries } from '@/lib/utils';

export const initialQueries = {
  skipCount: 0,
  maxCount: 5,
};

export const initialQueryKey = 'admin.staff';

export const getStaff = async (queries) =>
  (await apiAdmin.get(staff.list(queries))).data;

export const getMedicalProviders = async (queries) =>
  (await apiAdmin.get(staff.providerList(queries))).data;

export const prefetchStaff = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getStaff(initialQueries),
  });

  return queryClient;
};

export const prefetchMedicalProviders = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getMedicalProviders(initialQueries),
  });

  return queryClient;
};

export const useStaff = (
  params = { pageNum: null, search: '', jobType: '' }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getStaff(queries),
    placeholderData: keepPreviousData,
  });
};

export const useMedicalProviders = (
  params = { pageNum: null, search: '' }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getMedicalProviders(queries),
    placeholderData: keepPreviousData,
  });
};

export const useStaffById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        staff.actions.get(id)
      );
      return response;
    },
  });
};

export const useDeleteStaff = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        staff.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === initialQueryKey,
      });
    },
  });
};

export const useAddStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        staff.actions.add,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};

export const useUpdateStaff = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        staff.actions.update(id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === initialQueryKey,
      });
    },
    onError: () => {},
  });
};
