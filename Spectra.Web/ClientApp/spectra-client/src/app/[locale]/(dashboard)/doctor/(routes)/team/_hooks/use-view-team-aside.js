'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { usePathname } from '@/i18n/routing';

import ROUTES from '@/routes';

export const useViewTeamAside = () => {
  const path = usePathname();

  const params = useParams();

  const doctorId = params?.doctorId || '';

  const items = useMemo(
    () => [
      {
        name: 'البيانات الشخصية',
        route: ROUTES.DOCTOR.TEAM.VIEW_TEAM(doctorId),
        isActive: path === ROUTES.DOCTOR.TEAM.VIEW_TEAM(doctorId),
        show: true,
      },
    ],
    [path, doctorId]
  );

  return {
    items,
  };
};
