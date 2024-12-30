'use client';

import { useCallback } from 'react';

import { useUserChatAddMessage } from '@/hooks/queries/user/chat';
import { CHAT_TYPES } from '@/data';
import { getFormData } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';

export const useAddMessage = (
  chatId = '',
  reference = '',
  setMessages = () => {}
) => {
  const { userId } = useAuth();

  const { mutate: addMessage } = useUserChatAddMessage({
    chatId,
    reference,
  });

  const onSend = useCallback(
    (formData) => {
      const content = formData.get('message');
      const tempId = Date.now();

      const newMessage = {
        tempId,
        content,
        status: 'pending',
        senderId: userId,
        created: new Date(),
      };

      setMessages((prev) => [...prev, newMessage]);

      const data = {
        chatId,
        content,
        type: CHAT_TYPES.text,
      };

      const formDataToSend = getFormData(data);

      addMessage(formDataToSend, {
        onSuccess: (data) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.tempId === tempId
                ? {
                    ...msg,
                    id: data?.data?.id,
                    status: 'sent',
                    created: data?.data?.created,
                  }
                : msg
            )
          );
        },
        onError: () => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.tempId === tempId
                ? { ...msg, status: 'failed' }
                : msg
            )
          );
        },
      });
    },
    [chatId, addMessage, setMessages, userId]
  );

  return { onSend };
};
