'use client';

import { useMemo } from 'react';
import { CONTRACT_STATE } from '@/data';
import { usePathname } from '@/i18n/routing';
import ROUTES from '@/routes';

export const useActiveStep = ({ hasData, state }) => {
  const pathname = usePathname();

  const activeStep = useMemo(() => {
    if (!hasData && pathname === ROUTES.DOCTOR.CONTRACT.DASHBOARD)
      return 0;

    if (!hasData && pathname === ROUTES.DOCTOR.CONTRACT.CONTRACTSNEW)
      return 2;

    if (hasData) return 3;

    if (hasData && CONTRACT_STATE.accepted === state) return 4;
  }, [state, pathname, hasData]);

  return { activeStep };
};
