'use client';

import { useTranslations } from 'next-intl';
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

  const t = useTranslations();

  const links = useMemo(
    () => [
      {
        name: t('home'),
        route: ROUTES.CLIENT.MAIN.HOME,
        isActive: path.includes(ROUTES.CLIENT.MAIN.HOME),
        icon: <MainIcon />,
        show: true,
      },
      {
        name: t('control'),
        route: ROUTES.CLIENT.CONTROL_MENU,
        isActive: path.includes(ROUTES.CLIENT.CONTROL_MENU),
        icon: <ControlIcon />,
        show: true,
      },
      {
        name: t('profile'),
        route: ROUTES.CLIENT.PROFILE.FAMILY,
        isActive:
          path.includes(ROUTES.CLIENT.PROFILE.FAMILY) ||
          path.includes(ROUTES.CLIENT.PROFILE.ORG),
        icon: <ProfileIcon />,
        show: true,
      },
      {
        name: t('packages'),
        route: ROUTES.CLIENT.PACKAGES,
        isActive: path.includes(ROUTES.CLIENT.PACKAGES),
        icon: <HeartIcon />,
        show: true,
      },
      {
        name: t('service_request'),
        route: ROUTES.CLIENT.SERVICE_REQUEST.HOME,
        isActive: path.includes(ROUTES.CLIENT.SERVICE_REQUEST.HOME),
        icon: <Hand />,
        show: true,
      },
      {
        name: t('appointments'),
        route: ROUTES.CLIENT.SCHEDULES,
        isActive: path.includes(ROUTES.CLIENT.SCHEDULES),
        icon: <ClockIcon2 />,
        show: true,
      },

      {
        name: t('team'),
        route: ROUTES.CLIENT.TEAM.HOME,
        isActive: path.includes(ROUTES.CLIENT.TEAM.HOME),
        icon: <StaffIcon />,
        show: true,
      },
      // {
      //   name: 'تقارير',
      //   route: ROUTES.CLIENT.REPORTS,
      //   isActive: path.includes(ROUTES.CLIENT.REPORTS),
      //   icon: <ReportsIcon />,
      // },
      {
        name: t('chat'),
        route: ROUTES.CLIENT.CHATS,
        isActive: path.includes(ROUTES.CLIENT.CHATS),
        icon: <ChatIcon />,
        show: true,
      },
      {
        name: t('wallet'),
        route: ROUTES.CLIENT.WALLET,
        isActive: path.includes(ROUTES.CLIENT.WALLET),
        icon: <WalletIcon />,
        show: true,
      },
      {
        name: t('settings'),
        route: ROUTES.CLIENT.SETTINGS.HOME,
        isActive: path.includes(ROUTES.CLIENT.SETTINGS.HOME),
        icon: <SettingsIcon />,
        show: true,
      },
    ],
    [path, t]
  );

  return {
    links,
  };
};
