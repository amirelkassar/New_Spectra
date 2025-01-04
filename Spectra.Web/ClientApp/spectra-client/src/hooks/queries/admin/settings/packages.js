import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { settings } from '@/api/admin';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';

const initailCustomQueries = {
  skipCount: 0,
  maxCount: 10,
};

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'admin.settings.packages';

export const getPackages = async (queries) =>
  (await apiAdmin.get(settings.packages.list(queries))).data;

export const prefetchPackages = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getPackages(initialQueries),
  });

  return queryClient;
};

export const usePackages = (
  params = { pageNum: null, search: '', tags: [] }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getPackages(queries),
    placeholderData: keepPreviousData,
  });
};

export const usePackageById = (id) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await apiAdmin.get(
        settings.packages.actions.get(id)
      );
      return response.data;
    },
  });
};

export const useDeletePackage = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        settings.packages.actions.delete(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
  });
};

export const useAddPackage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        settings.packages.actions.add,
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
    onError: () => {},
  });
};

export const useUpdatePackage = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.put(
        settings.packages.actions.update(id),
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, id],
      });
    },
    onError: () => {},
  });
};
