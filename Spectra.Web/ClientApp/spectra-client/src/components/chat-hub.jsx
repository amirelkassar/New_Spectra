'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import * as signalR from '@microsoft/signalr';

import { useToken } from '@/hooks/use-token';
// import { Toast } from '@/components/toast';
import { initialQueryKey } from '@/hooks/queries/user/chat';

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
        const chatReference = newMessage.chatReference;

        queryClient.setQueriesData(
          {
            predicate: (query) =>
              query.queryKey[0] === initialQueryKey &&
              query.queryKey[1]?.reference === chatReference,
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
  }, [token, queryClient]);
};
