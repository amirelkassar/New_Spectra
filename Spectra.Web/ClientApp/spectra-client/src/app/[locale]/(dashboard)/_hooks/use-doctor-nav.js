'use client';

import { useMemo } from 'react';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { useAuth } from '@/hooks/use-auth';
import Appointments from '@/assets/icons/appointments';
import Customer from '@/assets/icons/customer';
import SettingsIcon from '@/assets/icons/settings';
import ContractsIcon from '@/assets/icons/contracts';
import RatingsIcon from '@/assets/icons/ratings';
import WalletIcon from '@/assets/icons/wallet';
import ProfileIcon from '@/assets/icons/profile';
import ChatsIcon from '@/assets/icons/chats';
import MainIcon from '@/assets/icons/main';
import StaffIcon from '@/assets/icons/staff';
import ROUTES from '@/routes';
import ContractsPlus from '@/assets/icons/contracts-plus';
import { ROLES } from '@/data';

export const useDoctorNav = () => {
  const t = useTranslations();

  const path = usePathname();

  const { roles } = useAuth();

  const links = useMemo(
    () => [
      // {
      //   name: 'الرئيسية',
      //   route: ROUTES.DOCTOR.MAIN,
      //   isActive: path.includes(ROUTES.DOCTOR.MAIN),
      //   icon: <MainIcon />,
      //   show: true,
      // },
      // {
      //   name: 'المواعيد',
      //   route: ROUTES.DOCTOR.APPOINTMENTS,
      //   isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTS),
      //   icon: <Appointments />,
      //   show: true,

      //   nestedLinks: [
      //     {
      //       name: 'المواعيد القادمة',
      //       route: ROUTES.DOCTOR.APPOINTMENTSUPCOMING,
      //       isActive: path.includes(
      //         ROUTES.DOCTOR.APPOINTMENTSUPCOMING
      //       ),
      //     },
      //     {
      //       name: 'المواعيد السابقة',
      //       route: ROUTES.DOCTOR.APPOINTMENTSPREVIOUS,
      //       isActive: path.includes(
      //         ROUTES.DOCTOR.APPOINTMENTSPREVIOUS
      //       ),
      //     },
      //     {
      //       name: 'المواعيد الملغاة',
      //       route: ROUTES.DOCTOR.APPOINTMENTSCANCELD,
      //       isActive: path.includes(
      //         ROUTES.DOCTOR.APPOINTMENTSCANCELD
      //       ),
      //     },
      //     {
      //       name: 'المواعيد المؤجلة',
      //       route: ROUTES.DOCTOR.APPOINTMENTSDEFERRED,
      //       isActive: path.includes(
      //         ROUTES.DOCTOR.APPOINTMENTSDEFERRED
      //       ),
      //     },
      //   ],
      // },
      // {
      //   name: 'تقييمات',
      //   route: ROUTES.DOCTOR.RATINGS.DASHBOARD,
      //   isActive: path.includes(ROUTES.DOCTOR.RATINGS.DASHBOARD),
      //   icon: <RatingsIcon />,
      //   show: true,
      // },
      // {
      //   name: 'العملاء',
      //   route: ROUTES.DOCTOR.CLIENTS.DASHBOARD,
      //   isActive: path.includes(ROUTES.DOCTOR.CLIENTS.DASHBOARD),
      //   icon: <Customer />,
      //   show: true,
      // },
      {
        name: t('wallet'),
        route: ROUTES.DOCTOR.WALLET.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.WALLET.DASHBOARD),
        icon: <WalletIcon />,
        show: true,
      },
      {
        name: t('profile'),
        route: ROUTES.DOCTOR.PROFILE.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.PROFILE.DASHBOARD),
        icon: <ProfileIcon />,
        show: true,
      },
      {
        name: t('staff'),
        route: ROUTES.DOCTOR.STAFF.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.STAFF.DASHBOARD),
        icon: <StaffIcon />,
        show: roles.includes(ROLES.departmentHead),
      },
      {
        name: t('contract'),
        route: ROUTES.DOCTOR.CONTRACT.DASHBOARD,
        isActive:
          path.includes(ROUTES.DOCTOR.CONTRACT.DASHBOARD) &&
          !path.includes(ROUTES.DOCTOR.CONTRACTS.DASHBOARD),
        icon: <ContractsIcon />,
        show: true,
      },
      {
        name: t('contracts'),
        route: ROUTES.DOCTOR.CONTRACTS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.CONTRACTS.DASHBOARD),
        icon: <ContractsPlus />,
        show: roles.includes(ROLES.departmentHead),
      },
      // {
      //   name: 'محادثات',
      //   route: ROUTES.DOCTOR.CHATS.DASHBOARD,
      //   isActive: path.includes(ROUTES.DOCTOR.CHATS.DASHBOARD),
      //   icon: <ChatsIcon />,
      //   show: true,
      // },

      {
        name: t('settings'),
        route: ROUTES.DOCTOR.SETTINGS.DASHBOARD,
        isActive: path.includes(ROUTES.DOCTOR.SETTINGS.DASHBOARD),
        icon: <SettingsIcon />,
        show: true,
      },
    ],
    [path, roles, t]
  );

  return {
    links,
  };
};
