'use client';

import { usePathname } from '@/i18n/routing';
import { useMemo } from 'react';

import { ClockIcon2 } from '@/assets/icons/clock';
import MainIcon from '@/assets/icons/main';
import SettingsIcon from '@/assets/icons/settings';
import StaffIcon from '@/assets/icons/staff';
import ControlIcon from '@/assets/icons/control';
import ProfileIcon from '@/assets/icons/profile';
import ChatIcon from '@/assets/icons/chat';
import HeartIcon from '@/assets/icons/heart-checked';
import WalletIcon from '@/assets/icons/wallet';
import ROUTES from '@/routes';
import Hand from '@/assets/icons/hand';

export const useClientNav = () => {
  const path = usePathname();

  const links = useMemo(
    () => [
      {
        name: 'الرئيسية',
        route: ROUTES.CLIENT.MAIN.HOME,
        isActive: path.includes(ROUTES.CLIENT.MAIN.HOME),
        icon: <MainIcon />,
      },
      {
        name: 'قائمة التحكم',
        route: ROUTES.CLIENT.CONTROL_MENU,
        isActive: path.includes(ROUTES.CLIENT.CONTROL_MENU),
        icon: <ControlIcon />,
      },
      {
        name: 'ملفي',
        route: ROUTES.CLIENT.PROFILE.FAMILY,
        isActive:
          path.includes(ROUTES.CLIENT.PROFILE.FAMILY) ||
          path.includes(ROUTES.CLIENT.PROFILE.ORG),
        icon: <ProfileIcon />,
      },
      {
        name: 'الباقات',
        route: ROUTES.CLIENT.PACKAGES,
        isActive: path.includes(ROUTES.CLIENT.PACKAGES),
        icon: <HeartIcon />,
      },
      {
        name: 'طلب الخدمة',
        route: ROUTES.CLIENT.SERVICE_REQUEST.HOME,
        isActive: path.includes(ROUTES.CLIENT.SERVICE_REQUEST.HOME),
        icon: <Hand />,
      },
      {
        name: 'المواعيد',
        route: ROUTES.CLIENT.SCHEDULES,
        isActive: path.includes(ROUTES.CLIENT.SCHEDULES),
        icon: <ClockIcon2 />,
      },

      {
        name: 'الفريق',
        route: ROUTES.CLIENT.TEAM.HOME,
        isActive: path.includes(ROUTES.CLIENT.TEAM.HOME),
        icon: <StaffIcon />,
      },
      // {
      //   name: 'تقارير',
      //   route: ROUTES.CLIENT.REPORTS,
      //   isActive: path.includes(ROUTES.CLIENT.REPORTS),
      //   icon: <ReportsIcon />,
      // },
      {
        name: 'محادثات',
        route: ROUTES.CLIENT.CHATS,
        isActive: path.includes(ROUTES.CLIENT.CHATS),
        icon: <ChatIcon />,
      },
      {
        name: 'المحفظة',
        route: ROUTES.CLIENT.WALLET,
        isActive: path.includes(ROUTES.CLIENT.WALLET),
        icon: <WalletIcon />,
      },
      {
        name: 'الإعدادات',
        route: ROUTES.CLIENT.SETTINGS.HOME,
        isActive: path.includes(ROUTES.CLIENT.SETTINGS.HOME),
        icon: <SettingsIcon />,
      },
    ],
    [path]
  );

  return {
    links,
  };
};
