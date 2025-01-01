'use client';

import { useCallback } from 'react';

import {
  useUserChatAddMessage,
  useAddMessageLocally,
  useUpdateMessageLocally,
} from '@/hooks/queries/user/chat';
import { CHAT_TYPES } from '@/data';
import { getFormData } from '@/lib/utils';

export const useAddMessage = (
  chatId = '',
  reference = '',
  cb = () => {}
) => {
  const { mutate: sendMessage } = useUserChatAddMessage();

  const { mutate: addMessage } = useAddMessageLocally();

  const { mutate: updateMessage } = useUpdateMessageLocally();

  const onSend = useCallback(
    (formData) => {
      const newMessage = formData?.get('message');
      if (!newMessage) return;

      const tempMessage = addMessage({ newMessage, reference });

      cb(tempMessage);

      const formDataToSend = getFormData({
        chatId,
        content: newMessage,
        type: CHAT_TYPES.text,
      });

      sendMessage(formDataToSend, {
        onSuccess: (realMessage) => {
          updateMessage({
            tempId: tempMessage.id,
            updates: {
              ...realMessage?.data,
              status: 'sent',
            },
            reference,
          });
        },
        onError: () => {
          updateMessage({
            tempId: tempMessage.id,
            updates: {
              status: 'failed',
            },
            reference,
          });
        },
      });
    },
    [chatId, addMessage, cb, reference, sendMessage, updateMessage]
  );

  const onRetry = useCallback(
    (message) => {
      updateMessage({
        tempId: message.id,
        updates: {
          status: 'pending',
        },
        chatId,
      });

      const formDataToSend = getFormData({
        chatId,
        content: message.content,
        type: CHAT_TYPES.text,
      });

      sendMessage(formDataToSend, {
        onSuccess: (realMessage) => {
          updateMessage({
            tempId: message.id,
            updates: {
              ...realMessage?.data,
              status: 'sent',
            },
            chatId,
          });
        },
        onError: () => {
          updateMessage({
            tempId: message.id,
            updates: {
              status: 'failed',
            },
            chatId,
          });
        },
      });
    },
    [chatId, sendMessage, updateMessage]
  );

  return { onSend, onRetry };
};
