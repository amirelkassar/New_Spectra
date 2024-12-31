'use client';

import { useCallback } from 'react';

import {
  useUserChatAddMessage,
  initialQueryKey,
} from '@/hooks/queries/user/chat';
import { CHAT_TYPES } from '@/data';
import { getFormData } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { useQueryClient } from '@tanstack/react-query';

export const useAddMessage = (
  chatId = '',
  reference = '',
  cb = () => {}
) => {
  const queryClient = useQueryClient();

  const { userId, firstName } = useAuth();

  const { mutate: addMessage } = useUserChatAddMessage({
    chatId,
    reference,
  });

  const updateMessageStatus = useCallback(
    (tempId, updates) => {
      queryClient.setQueriesData(
        {
          predicate: (query) =>
            query.queryKey[0] === initialQueryKey &&
            query.queryKey[1]?.reference === reference,
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
    [queryClient, reference]
  );

  const addMessageLocally = useCallback(
    (newMessage) => {
      queryClient.setQueriesData(
        {
          predicate: (query) =>
            query.queryKey[0] === initialQueryKey &&
            query.queryKey[1]?.reference === reference,
        },
        (oldData) => {
          if (!oldData) return;

          const updatedPages = oldData.pages.map((page, index) =>
            index === 0
              ? {
                  ...page,
                  messages: {
                    ...page.messages,
                    items: [newMessage, ...page.messages.items],
                  },
                }
              : page
          );

          return { ...oldData, pages: updatedPages };
        }
      );
    },
    [queryClient, reference]
  );

  const onSend = useCallback(
    (formData) => {
      const content = formData?.get('message');
      if (!content) return;

      const tempMessage = {
        id: Date.now(),
        senderId: userId,
        senderName: firstName,
        senderImage: '',
        created: new Date().toISOString(),
        content,
        status: 'pending',
      };

      addMessageLocally(tempMessage);

      cb(tempMessage);

      const data = {
        chatId,
        content,
        type: CHAT_TYPES.text,
      };

      const formDataToSend = getFormData(data);

      addMessage(formDataToSend, {
        onSuccess: (realMessage) => {
          updateMessageStatus(tempMessage.id, {
            ...realMessage?.data,
            status: 'sent',
          });
        },
        onError: () => {
          updateMessageStatus(tempMessage.id, { status: 'failed' });
        },
      });
    },
    [
      chatId,
      addMessage,
      addMessageLocally,
      cb,
      userId,
      firstName,
      updateMessageStatus,
    ]
  );

  const onRetry = useCallback(
    (message) => {
      updateMessageStatus(message.id, {
        status: 'pending',
      });

      const data = {
        chatId,
        content: message.content,
        type: CHAT_TYPES.text,
      };

      const formDataToSend = getFormData(data);

      addMessage(formDataToSend, {
        onSuccess: (realMessage) => {
          updateMessageStatus(message.id, {
            ...realMessage?.data,
            status: 'sent',
          });
        },
        onError: () => {
          updateMessageStatus(message.id, { status: 'failed' });
        },
      });
    },
    [chatId, addMessage, updateMessageStatus]
  );

  return { onSend, onRetry };
};
