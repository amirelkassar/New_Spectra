'use client';

import { useMemo } from 'react';
import { usePathname } from '@/navigation';

import ROUTES from '@/routes';
import { useParams } from 'next/navigation';

export const UseMedicalProviderAside = () => {
  const path = usePathname();
  const params = useParams();
  const staffId = params.staffId;

  const items = useMemo(
    () => [
      {
        name: 'البيانات',
        route: ROUTES.ADMIN.STAFF.STAFF_ID(staffId),
        isActive: path === ROUTES.ADMIN.STAFF.STAFF_ID(staffId),
      },
      {
        name: 'المواعيد',
        route: ROUTES.ADMIN.STAFF.STAFF_ID_APPOINTMENTS(staffId),
        isActive: path.includes(
          ROUTES.ADMIN.STAFF.STAFF_ID_APPOINTMENTS(staffId)
        ),
      },
      {
        name: 'الوصفات الطبية',
        route: ROUTES.ADMIN.STAFF.STAFF_ID_PRESCRIPTIONS(staffId),
        isActive: path.includes(
          ROUTES.ADMIN.STAFF.STAFF_ID_PRESCRIPTIONS(staffId)
        ),
      },
      {
        name: 'العملاء',
        route: ROUTES.ADMIN.STAFF.STAFF_ID_CLIENTS(staffId),
        isActive: path.includes(
          ROUTES.ADMIN.STAFF.STAFF_ID_CLIENTS(staffId)
        ),
      },
      {
        name: 'العقد',
        route: ROUTES.ADMIN.STAFF.STAFF_ID_CONTRACTS(staffId),
        isActive: path.includes(
          ROUTES.ADMIN.STAFF.STAFF_ID_CONTRACTS(staffId)
        ),
      },
      {
        name: 'الفريق الطبي',
        route: ROUTES.ADMIN.STAFF.STAFF_ID_TEAM(staffId),
        isActive: path.includes(
          ROUTES.ADMIN.STAFF.STAFF_ID_TEAM(staffId)
        ),
      },
    ],
    [path, params]
  );

  return {
    items,
  };
};
