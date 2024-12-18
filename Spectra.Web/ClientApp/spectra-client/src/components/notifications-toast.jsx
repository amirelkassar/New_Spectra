'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import * as signalR from '@microsoft/signalr';

import { useToken } from '@/hooks/use-token';
import { Toast } from '@/components/toast';
import { initialQueryKey } from '@/hooks/queries/user/notifications';

export const NotificationsToast = () => {
  const { token } = useToken();

  const queryClient = useQueryClient();

  useEffect(() => {
    let connection = null;

    const connectSignalR = async () => {
      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/notification`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => token })
        .configureLogging(signalR.LogLevel.Error)
        .build();

      connection.on('Receive', (message) => {
        if (!message) return;
        // return console.log(message);
        Toast.Notification(message?.title);
        queryClient.refetchQueries({
          queryKey: [initialQueryKey],
        });
      });

      try {
        await connection.start();
        // console.log('SignalR connected successfully!');
      } catch {
        // console.error('SignalR connection failed: ', error);
      }

      connection.onclose(() => {
        console.warn('SignalR connection closed. Reconnecting...');
        setTimeout(connectSignalR, 5000);
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
