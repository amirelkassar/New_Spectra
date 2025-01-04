'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { usePathname } from '@/i18n/routing';

import ROUTES from '@/routes';

export const useViewStaffAside = () => {
  const path = usePathname();

  const params = useParams();

  const id = params?.staffId || '';

  const items = useMemo(
    () => [
      {
        name: 'البيانات الشخصية',
        route: ROUTES.DOCTOR.STAFF.VIEW_STAFF(id),
        isActive: path === ROUTES.DOCTOR.STAFF.VIEW_STAFF(id),
        show: true,
      },
    ],
    [path, id]
  );

  return {
    items,
  };
};
