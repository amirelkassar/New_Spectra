'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import * as signalR from '@microsoft/signalr';

import { useToken } from '@/hooks/use-token';
import { Toast } from '@/components/toast';

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

  const queryClient = useQueryClient();

  useEffect(() => {
    let connection = null;
    const audio = new Audio('/notification-received.mp3');

    const connectSignalR = async () => {
      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/chat`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => token })
        .configureLogging(signalR.LogLevel.Error)
        .build();

      connection.on(LISTENERS.chatCreated, () => {
        console.log('chatCreated');
      });
      connection.on(LISTENERS.chatDeleted, () => {
        console.log('chatDeleted');
      });
      connection.on(LISTENERS.messageAdded, (message) => {
        const chatReference = message.chatReference;

        queryClient.refetchQueries({
          predicate: (query) =>
            query.queryKey[1]?.reference === chatReference,
        });

        // queryClient.refetchQueries({
        //   queryKey: ['user.chat', { reference: chatReference }],
        // });
        console.log(message);
      });
      connection.on(LISTENERS.messageRemoved, () => {
        console.log('messageRemoved');
      });
      connection.on(LISTENERS.participantAdded, () => {
        console.log('participantAdded');
      });
      connection.on(LISTENERS.participantRemoved, () => {
        console.log('participantRemoved');
      });

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
  }, [token, queryClient]);
};
