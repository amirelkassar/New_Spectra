'use client';

import { useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';

import ROUTES from '@/routes';

export const useContractTermsActions = () => {
  const router = useRouter();

  const params = useParams();

  const { contractId, versionId } = params;

  const onEdit = useCallback(
    () =>
      router.push(
        ROUTES.ADMIN.CONTRACTS.UPDATE_TERMS(contractId, versionId),
        {
          scroll: false,
        }
      ),
    [router, contractId, versionId]
  );

  const onSave = useCallback(
    () =>
      router.push(
        ROUTES.ADMIN.CONTRACTS.ACCEPT_VERSION(contractId, versionId),
        {
          scroll: false,
        }
      ),
    [router, contractId, versionId]
  );

  const onSend = useCallback(() => {}, []);

  return {
    onEdit,
    onSend,
    onSave,
  };
};
