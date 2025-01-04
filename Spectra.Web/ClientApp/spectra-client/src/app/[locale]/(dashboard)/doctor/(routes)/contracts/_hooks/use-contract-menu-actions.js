'use client';

import { useCallback } from 'react';
import { useRouter } from '@/i18n/routing';

import ROUTES from '@/routes';

export const useContractMenuActions = (contractId = '') => {
  const router = useRouter();

  const onView = useCallback(() => {
    if (!contractId) return;
    router.push(ROUTES.DOCTOR.CONTRACTS.VIEW_CONTRACT(contractId));
  }, [router, contractId]);

  return {
    onView,
  };
};
