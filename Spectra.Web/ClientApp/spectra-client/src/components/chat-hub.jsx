'use client';

import { useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

import { useToken } from '@/hooks/use-token';
// import { Toast } from '@/components/toast';
import { useAddMessageLocally } from '@/hooks/queries/user/chat';

const LISTENERS = {
  chatCreated: 'ChatCreated',
  chatDeleted: 'ChatDeleted',
  messageAdded: 'MessageAdded',
  messageRemoved: 'MessageRemoved',
  participantAdded: 'ParticipantAdded',
  participantRemoved: 'ParticipantRemoved',
};

export const ChatHub = () => {
  const { token } = useToken();

  const { mutate: addMessage } = useAddMessageLocally();

  useEffect(() => {
    let connection = null;
    // const audio = new Audio('/notification-received.mp3');

    const connectSignalR = async () => {
      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/chat`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => token })
        .configureLogging(signalR.LogLevel.Error)
        .build();

      connection.on(LISTENERS.chatCreated, () => {});
      connection.on(LISTENERS.chatDeleted, () => {});
      connection.on(LISTENERS.messageAdded, (newMessage) => {
        const reference = newMessage?.chatReference || '';
        const chatId = newMessage?.id || '';

        addMessage({
          newMessage,
          reference,
          chatId,
        });
      });

      connection.on(LISTENERS.messageRemoved, () => {});
      connection.on(LISTENERS.participantAdded, () => {});
      connection.on(LISTENERS.participantRemoved, () => {});

      try {
        await connection.start();
        // console.log('SignalR CHAT connected successfully!');
      } catch {
        // console.error('SignalR CHAT connection failed: ');
      }

      connection.onclose(() => {
        console.warn('SignalR Chat connection closed.');
      });
    };

    connectSignalR();

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, [token, addMessage]);
};
