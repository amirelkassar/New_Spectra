import {
  keepPreviousData,
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { apiUser } from '@/api/axios';
import { chat } from '@/api/user';
import { getQueries } from '@/lib/utils';
import { initialSiteQueries } from '@/hooks/queries/initials';
import { useCallback } from 'react';
import { useAuth } from '@/hooks/use-auth';

const initailCustomQueries = {
  skipCount: 0,
  maxCount: 10,
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
    search: '',
    chatId: '',
    reference: '',
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useInfiniteQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async ({ pageParam = 1 }) => {
      const newParams = {
        ...params,
        pageNum: pageParam,
      };

      const queries = getQueries({
        params: newParams,
        initialQueries,
      });

      const response = await apiUser.get(chat.messages(queries));
      return response.data?.data;
    },
    initialPageParam: 1,
    getNextPageParam: (initialData, pages) => {
      const totalCount = initialData?.messages?.totalCount;
      const pageSize = initialData?.messages?.pageSize;

      const totalPages = Math.ceil(totalCount / pageSize);

      return pages.length < totalPages ? pages.length + 1 : undefined;
    },
  });
};

export const useUserChatAddMessage = () => {
  return useMutation({
    mutationFn: async (data) => {
      return (await apiUser.post(chat.actions.addMessage, data)).data;
    },
  });
};

export const useAddMessageLocally = () => {
  const queryClient = useQueryClient();

  const { userId, firstName } = useAuth();

  const addMessageLocally = useCallback(
    (
      params = {
        newMessage: '' || {},
        chatId: '',
        reference: '',
      }
    ) => {
      if (
        (!params?.newMessage && !params?.chatId) ||
        (!params?.newMessage && !params?.reference)
      ) {
        throw new Error(
          'Invalid params, newMessage and chatId or reference are required'
        );
      }

      const { newMessage, chatId, reference } = params;

      const tempMessage =
        typeof newMessage === 'string'
          ? {
              id: Date.now(),
              senderId: userId,
              senderName: firstName,
              senderImage: '',
              created: new Date().toISOString(),
              content: newMessage,
              status: 'pending',
            }
          : newMessage;

      queryClient.setQueriesData(
        {
          predicate: (query) =>
            (query.queryKey[0] === initialQueryKey &&
              query.queryKey[1]?.reference === reference) ||
            (query.queryKey[0] === initialQueryKey &&
              query.queryKey[1]?.chatId === chatId),
        },
        (oldData) => {
          if (!oldData) return;

          const updatedPages = oldData.pages.map((page, index) =>
            index === 0
              ? {
                  ...page,
                  messages: {
                    ...page.messages,
                    items: [tempMessage, ...page.messages.items],
                  },
                }
              : page
          );

          return { ...oldData, pages: updatedPages };
        }
      );

      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, initialQueries],
      });

      return tempMessage;
    },
    [queryClient, firstName, userId]
  );

  return { mutate: addMessageLocally };
};

export const useUpdateMessageLocally = () => {
  const queryClient = useQueryClient();

  const updateMessageLocally = useCallback(
    (
      params = {
        tempId: '',
        updates: {},
        chatId: '',
        reference: '',
      }
    ) => {
      if (
        (!params?.tempId && params?.updates && !params?.chatId) ||
        (!params?.tempId && params?.updates && !params?.reference)
      ) {
        throw new Error(
          'Invalid params, tempId, updates and chatId or reference are required'
        );
      }

      const { tempId, updates, chatId, reference } = params;

      queryClient.setQueriesData(
        {
          predicate: (query) =>
            (query.queryKey[0] === initialQueryKey &&
              query.queryKey[1]?.reference === reference) ||
            (query.queryKey[0] === initialQueryKey &&
              query.queryKey[1]?.chatId === chatId),
        },
        (oldData) => {
          if (!oldData) return;

          const updatedPages = oldData.pages.map((page) => ({
            ...page,
            messages: {
              ...page.messages,
              items: page.messages.items.map((msg) =>
                msg.id === tempId ? { ...msg, ...updates } : msg
              ),
            },
          }));

          return { ...oldData, pages: updatedPages };
        }
      );
    },
    [queryClient]
  );

  return { mutate: updateMessageLocally };
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
