'use client';
import React from 'react';
import SettingsAside from '../_components/settings-aside';
import { usePathname } from '@/i18n/routing';
import ROUTES from '@/routes';

function PermissionsAside() {
  const path = usePathname();

  const pages = [
    {
      name: 'مستويات الصلاحية',
      route: ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD,
      isActive: path === ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD,
    },
    {
      name: 'ادارة المستخدمين',
      route: ROUTES.ADMIN.SETTINGS.PERMISSIONS.USERS,
      isActive: path === ROUTES.ADMIN.SETTINGS.PERMISSIONS.USERS,
    },
  ];
  return <SettingsAside pages={pages} />;
}

export default PermissionsAside;
