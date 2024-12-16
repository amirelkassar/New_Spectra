import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { notifications } from '@/api/user';
import { initialSiteQueries } from '../initials';
import { getQueries } from '@/lib/utils';

export const initialQueries = initialSiteQueries;

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

export const useNotifications = (
  params = {
    pageNum: null,
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getNotifications(queries),
  });
};

export const useMakeNotificationRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) =>
      (await apiUser.put(notifications.actions.makeItRead(id))).data,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, initialQueries],
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
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    },
  });
};
