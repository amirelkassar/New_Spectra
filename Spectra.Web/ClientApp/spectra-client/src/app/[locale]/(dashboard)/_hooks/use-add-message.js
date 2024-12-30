'use client';

import { useCallback } from 'react';

import { useUserChatAddMessage } from '@/hooks/queries/user/chat';
import { CHAT_TYPES } from '@/data';
import { getFormData } from '@/lib/utils';

export const useAddMessage = (chatId = '', reference = '') => {
  const {
    mutate: addMessage,
    isPending: isAddingMessage,
    isError: isAddingMessageError,
  } = useUserChatAddMessage({ chatId, reference });

  const onSend = useCallback(
    (formData) => {
      const content = formData.get('message');

      const data = {
        chatId,
        content,
        type: CHAT_TYPES.text,
      };

      const formDataToSend = getFormData(data);
      addMessage(formDataToSend);
    },
    [chatId, addMessage]
  );

  return { onSend, isAddingMessage, isAddingMessageError };
};
