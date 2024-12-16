'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useToken } from '@/hooks/use-token';
import { Toast } from '@/components/toast';
import { startSignalR, stopSignalR } from '@/lib/signalr';
import {
  initialQueryKey,
  initialQueries,
} from '@/hooks/queries/user/notifications';

export const NotificationsToast = () => {
  const { token } = useToken();

  const queryClient = useQueryClient();

  useEffect(() => {
    const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/notification`;

    startSignalR(HUB_URL, token, (message) => {
      if (!message) return;
      Toast.Notification(message);
      queryClient.invalidateQueries({
        queryKey: [initialQueryKey, initialQueries],
      });
    });

    return () => {
      stopSignalR();
    };
  }, [token, queryClient]);
};
