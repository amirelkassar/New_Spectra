'use client';

import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';

import ROUTES from '@/routes';

export const useContractVersionActions = ({ contractId, id }) => {
  const router = useRouter();

  const onEdit = useCallback(
    () =>
      router.push(
        ROUTES.ADMIN.CONTRACTS.UPDATE_VERSION(contractId, id)
      ),
    [router, contractId, id]
  );

  const onReject = useCallback(() => {}, []);

  const onAccept = useCallback(
    () =>
      router.push(
        ROUTES.ADMIN.CONTRACTS.ACCEPT_VERSION(contractId, id)
      ),
    [router, contractId, id]
  );

  return {
    onEdit,
    onReject,
    onAccept,
  };
};
