'use client';

import { useMemo } from 'react';
import { usePathname } from '@/navigation';

import ROUTES from '@/routes';
import { useParams } from 'next/navigation';

export const UseMainDataAside = () => {
  const path = usePathname();
  const params = useParams();

  const items = useMemo(
    () => [
      {
        name: 'عقاقير',
        route: ROUTES.ADMIN.DATAMAIN.HOME,
        isActive:
          path === ROUTES.ADMIN.DATAMAIN.HOME ||
          path === ROUTES.ADMIN.DATAMAIN.DRUGSADD ||
          path ===
            ROUTES.ADMIN.DATAMAIN.DRUGSDETAILSEDIT(
              params?.drugsID
            ) ||
          path ===
            ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(
              params?.drugsID
            ),
      },
      {
        name: 'تخصصات الاطباء',
        route: ROUTES.ADMIN.DATAMAIN.SPECIALTIES,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.SPECIALTIES
        ),
      },
      {
        name: 'الاقسام',
        route: ROUTES.ADMIN.DATAMAIN.DEPARTMENTS,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.DEPARTMENTS
        ),
      },
      {
        name: 'التحاليل و الاشعة',
        route: ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS
        ),
      },
      {
        name: 'التشخيصات',
        route: ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS
        ),
      },
      {
        name: 'الشكاوى العامة',
        route: ROUTES.ADMIN.DATAMAIN.COMPLAINTS,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.COMPLAINTS
        ),
      },
      {
        name: 'الخدمات',
        route: ROUTES.ADMIN.DATAMAIN.SERVICES,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.SERVICES
        ),
      },
      {
        name: 'الفحوصات الداخلية',
        route: ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR,
        isActive: path.includes(
          ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR
        ),
      },
    ],
    [path, params]
  );

  return {
    items,
  };
};
