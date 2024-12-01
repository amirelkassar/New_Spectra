'use client';

import ContentIcon from '@/assets/icons/content';
import PermissionsIcon from '@/assets/icons/permissions';
import PlansIcon from '@/assets/icons/plans';
import ROUTES from '@/routes';
import ComplaintsIcon from '@/assets/icons/complaints';

export const useSettingsData = () => {
  const DATA = [
    {
      id: 1,
      icon: (
        <PermissionsIcon className='size-8 mdl:size-16' />
      ),
      title: 'الأذونات',
      link: ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD,
    },
    {
      id: 2,
      icon: <ContentIcon className='size-8 mdl:size-16' />,
      title: 'المحتوى',
      link: ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD,
    },
    {
      id: 3,
      icon: <PlansIcon className='size-8 mdl:size-16' />,
      title: 'الباقات',
      link: ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD,
    },
    {
      id: 4,
      icon: (
        <ComplaintsIcon className='size-8 mdl:size-16' />
      ),
      title: 'الشكاوى',
      link: ROUTES.ADMIN.SETTINGS.COMPLAINTS.DASHBOARD,
    },
  ];

  return { DATA };
};
