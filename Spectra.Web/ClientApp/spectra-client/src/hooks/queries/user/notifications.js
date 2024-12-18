import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { notifications } from '@/api/user';
import { initialSiteQueries } from '../initials';
import { getQueries } from '@/lib/utils';

const customQueries = {
  skipCount: 0,
  maxCount: 10,
};

export const initialQueries = customQueries || initialSiteQueries;

export const initialQueryKey = 'user.notifications';

export const getNotifications = async (queries) =>
  (await apiUser.get(notifications.list(queries))).data;

export const prefetchNotifications = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getNotifications(initialQueries),
  });

  return queryClient;
};

export const useNotifications = () => {
  return useInfiniteQuery({
    queryKey: [initialQueryKey],
    queryFn: async ({ pageParam = 1 }) => {
      const queries = getQueries({
        params: { pageNum: pageParam },
        initialQueries,
      });
      return await getNotifications(queries);
    },
    initialPageParam: 1,
    getNextPageParam: (initialData, pages) => {
      const totalCount = initialData?.data?.totalCount;
      const pageSize = initialData?.data?.pageSize;

      const totalPages = Math.ceil(totalCount / pageSize);

      return pages.length < totalPages ? pages.length + 1 : undefined;
    },
  });
};

export const useMakeNotificationRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) =>
      (await apiUser.put(notifications.actions.makeItRead(id))).data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
    onError: () => {},
  });
};

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) =>
      (await apiUser.delete(notifications.actions.delete(id))).data,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};
