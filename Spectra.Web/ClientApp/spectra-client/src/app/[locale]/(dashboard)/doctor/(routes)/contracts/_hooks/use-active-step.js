'use client';

import { useMemo } from 'react';
import { contractCase as CASE } from '../layout';
import { usePathname } from '@/i18n/routing';
import ROUTES from '@/routes';

export const useActiveStep = (contractCase) => {
  const pathname = usePathname();

  const activeStep = useMemo(() => {
    if (
      pathname === ROUTES.DOCTOR.CONTRACTS.DASHBOARD &&
      contractCase === CASE[0]
    ) {
      return 0;
    }

    if (
      pathname === ROUTES.DOCTOR.CONTRACTS.CONTRACTSNEW &&
      contractCase === CASE[0]
    ) {
      return 1;
    }

    if (contractCase === CASE[1] || contractCase === CASE[2]) {
      return 3;
    }
  }, [contractCase, pathname]);

  return { activeStep };
};
