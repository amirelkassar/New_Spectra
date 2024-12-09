'use client';

import { usePathname } from '@/navigation';
import { useMemo } from 'react';

import Appointments from '@/assets/icons/appointments';
import Customer from '@/assets/icons/customer';
import SettingsIcon from '@/assets/icons/settings';
import ContractsIcon from '@/assets/icons/contracts';
import RatingsIcon from '@/assets/icons/ratings';
import WalletIcon from '@/assets/icons/wallet';
import ProfileIcon from '@/assets/icons/profile';
import ChatsIcon from '@/assets/icons/chats';
import MainIcon from '@/assets/icons/main';
import ROUTES from '@/routes';

export const useNav = () => {
  const path = usePathname();

  const links = useMemo(
    () => [
      {
        name: 'الرئيسية',
        route: ROUTES.DOCTOR.MAIN,
        isActive: path.includes(ROUTES.DOCTOR.MAIN),
        icon: <MainIcon />,
      },
      {
        name: 'المواعيد',
        route: ROUTES.DOCTOR.APPOINTMENTS,
        isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTS),
        icon: <Appointments />,
        nestedLinks: [
          {
            name: 'المواعيد القادمة',
            route: ROUTES.DOCTOR.APPOINTMENTSUPCOMING,
            isActive: path.includes(
              ROUTES.DOCTOR.APPOINTMENTSUPCOMING
            ),
          },
          {
            name: 'المواعيد السابقة',
            route: ROUTES.DOCTOR.APPOINTMENTSPREVIOUS,
            isActive: path.includes(
              ROUTES.DOCTOR.APPOINTMENTSPREVIOUS
            ),
          },
          {
            name: 'المواعيد الملغاة',
            route: ROUTES.DOCTOR.APPOINTMENTSCANCELD,
            isActive: path.includes(
              ROUTES.DOCTOR.APPOINTMENTSCANCELD
            ),
          },
          {
            name: 'المواعيد المؤجلة',
            route: ROUTES.DOCTOR.APPOINTMENTSDEFERRED,
            isActive: path.includes(
              ROUTES.DOCTOR.APPOINTMENTSDEFERRED
            ),
          },
        ],
      },
      {
        name: 'تقييمات',
        route: ROUTES.DOCTOR.RATINGS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.RATINGS.DASHBOARD),
        icon: <RatingsIcon />,
      },
      {
        name: 'العملاء',
        route: ROUTES.DOCTOR.CLIENTS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CLIENTS.DASHBOARD),
        icon: <Customer />,
      },
      {
        name: 'المحفظة',
        route: ROUTES.DOCTOR.WALLET.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.WALLET.DASHBOARD),
        icon: <WalletIcon />,
      },
      {
        name: 'ملف',
        route: ROUTES.DOCTOR.PROFILE.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.PROFILE.DASHBOARD),
        icon: <ProfileIcon />,
      },
      {
        name: 'العقود',
        route: ROUTES.DOCTOR.CONTRACTS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CONTRACTS.DASHBOARD),
        icon: <ContractsIcon />,
      },

      {
        name: 'محادثات',
        route: ROUTES.DOCTOR.CHATS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CHATS.DASHBOARD),
        icon: <ChatsIcon />,
      },

      {
        name: 'الإعدادات',
        route: ROUTES.DOCTOR.SETTINGS.DASHBOARD,
        isActive:
          path === ROUTES.DOCTOR.SETTINGS.DASHBOARD ||
          path === ROUTES.DOCTOR.SETTINGS.CHANGEPASSWORD ||
          path === ROUTES.DOCTOR.SETTINGS.NOTIFICATIONS,
        icon: <SettingsIcon />,
      },
    ],
    [path]
  );

  return {
    links,
  };
};
