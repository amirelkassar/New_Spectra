import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { chat } from '@/api/user';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';

const initailCustomQueries = {
  skipCount: 0,
  maxCount: 500,
};

export const initialQueries =
  initailCustomQueries || initialSiteQueries;

export const initialQueryKey = 'user.chat';

export const getUserChatList = async (queries) =>
  (await apiUser.get(chat.list(queries))).data;

export const prefetchUserChatList = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getUserChatList(initialQueries),
  });

  return queryClient;
};

export const useUserChatList = (
  params = {
    pageNum: null,
    search: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getUserChatList(queries),
    placeholderData: keepPreviousData,
  });
};

export const useUserChatMessages = (
  params = {
    pageNum: null,
    search: '',
    chatId: '',
    reference: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () =>
      (await apiUser.get(chat.messages(queries))).data,
    placeholderData: keepPreviousData,
  });
};

export const useUserChatAddMessage = (
  params = {
    chatId: '',
    reference: '',
  }
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      return (await apiUser.post(chat.actions.addMessage, data)).data;
    },
    onSuccess: () => {
      const { chatId, reference } = params;

      if (chatId) {
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[1]?.chatId === chatId,
        });
      }

      if (reference) {
        queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[1]?.reference === reference,
        });
      }
    },
  });
};

export const useUserChatDeleteMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (messageId) => {
      return (
        await apiUser.delete(chat.actions.deleteMessage(messageId))
      ).data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
    },
  });
};
