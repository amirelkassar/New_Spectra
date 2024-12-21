'use client';

import { useTranslations } from 'next-intl';

import { CONTRACT_STATE } from '@/data';

export const useGetContractState = (state) => {
  const t = useTranslations('general_obj');

  if (!state) return '';
  switch (state) {
    case CONTRACT_STATE.canceled:
      return t('rejected');
    case CONTRACT_STATE.contracting:
      return t('contracting');
    case CONTRACT_STATE.accepted:
      return t('accepted');
    default:
      return '';
  }
};
