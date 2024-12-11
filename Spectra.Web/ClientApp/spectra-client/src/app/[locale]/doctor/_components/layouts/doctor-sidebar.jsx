'use client';

import { Sidebar } from '@/components/dashboard/layouts/sidebar';
import { useNav } from '../../_hooks/use-nav';

export const DoctorSidebar = () => {
  const { links } = useNav();

  return <Sidebar links={links} />;
};
