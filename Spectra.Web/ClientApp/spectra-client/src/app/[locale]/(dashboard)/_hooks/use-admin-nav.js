'use client';

import { usePathname } from '@/i18n/routing';
import { useMemo } from 'react';

import MainIcon from '@/assets/icons/main';
import SettingsIcon from '@/assets/icons/settings';
import StaffIcon from '@/assets/icons/staff';
import ROUTES from '@/routes';
import Appointments from '@/assets/icons/appointments';
import Customer from '@/assets/icons/customer';
import ChatIcon from '@/assets/icons/chat';
import ReportsIcon from '@/assets/icons/reportsIcon';
import DatabaseIcon from '@/assets/icons/database';
import ContractsIcon from '@/assets/icons/contracts';

export const useAdminNav = () => {
  const path = usePathname();

  const links = useMemo(
    () => [
      // {
      //   name: 'الرئيسية',
      //   route: ROUTES.ADMIN.MAIN,
      //   isActive: path === ROUTES.ADMIN.MAIN,
      //   icon: <MainIcon />,
      //   show: true,
      // },
      // {
      //   name: 'المواعيد',
      //   route: ROUTES.ADMIN.APPOINTMENTS,
      //   isActive: path.includes(ROUTES.ADMIN.APPOINTMENTS),
      //   icon: <Appointments />,
      //   show: true,
      // },
      // {
      //   name: "طلبات الاشتراك",
      //   route: ROUTES.ADMIN.REQUESTS,
      //   isActive: path.includes(ROUTES.ADMIN.REQUESTS),
      //   icon: <Subscription />,
      //   type: "subscription",
      // },
      // {
      //   name: 'العملاء',
      //   route: ROUTES.ADMIN.CLIENTS.DASHBOARD,
      //   isActive: path.includes(ROUTES.ADMIN.CLIENTS.DASHBOARD),
      //   icon: <Customer />,
      //   show: true,
      // },
      {
        name: 'الموظفين',
        route: ROUTES.ADMIN.STAFF.HOME,
        isActive: path.includes(ROUTES.ADMIN.STAFF.HOME),
        icon: <StaffIcon />,
        show: true,
      },
      // {
      //   name: 'تقارير',
      //   route: ROUTES.ADMIN.REPORT.DASHBOARD,
      //   isActive: path.includes(ROUTES.ADMIN.REPORT.DASHBOARD),
      //   icon: <ReportsIcon />,
      //   show: true,
      // },
      {
        name: 'البيانات الرئيسية',
        route: ROUTES.ADMIN.DATAMAIN.HOME,
        isActive: path.includes(ROUTES.ADMIN.DATAMAIN.HOME),
        icon: <DatabaseIcon />,
        show: true,
      },
      {
        name: 'العقود',
        route: ROUTES.ADMIN.CONTRACTS.DASHBOARD,
        isActive: path.includes(ROUTES.ADMIN.CONTRACTS.DASHBOARD),
        icon: <ContractsIcon />,
        show: true,
      },
      {
        name: 'محادثات',
        route: ROUTES.ADMIN.CHATS.DASHBOARD,
        isActive: path.includes(ROUTES.ADMIN.CHATS.DASHBOARD),
        icon: <ChatIcon />,
        show: true,
      },
      {
        name: 'الإعدادات',
        route: ROUTES.ADMIN.SETTINGS.DASHBOARD,
        isActive: path.includes(ROUTES.ADMIN.SETTINGS.DASHBOARD),
        icon: <SettingsIcon />,
        type: 'settings',
        show: true,
      },
    ],
    [path]
  );

  return {
    links,
  };
};
