'use client';

import { useMemo } from 'react';
import { usePathname } from '@/i18n/routing';

import ROUTES from '@/routes';

export const UseProfileAside = ({ jobType }) => {
  const path = usePathname();

  const items = useMemo(
    () => [
      {
        name: 'البيانات الشخصية',
        route: ROUTES.DOCTOR.PROFILE.DASHBOARD,
        isActive:
          path === ROUTES.DOCTOR.PROFILE.DASHBOARD ||
          path === ROUTES.DOCTOR.PROFILE.EDIT,
        show: true,
      },
      {
        name: 'الشهادات',
        route: ROUTES.DOCTOR.PROFILE.CERTIFICATES,
        isActive: path.includes(ROUTES.DOCTOR.PROFILE.CERTIFICATES),
        show: true,
      },
      {
        name: 'الفريق الطبى',
        route: ROUTES.DOCTOR.PROFILE.TEAM,
        isActive: path.includes(ROUTES.DOCTOR.PROFILE.TEAM),
        show: jobType === 1,
      },
    ],
    [path, jobType]
  );

  return {
    items,
  };
};
