'use client';

import { Sidebar } from '@/components/dashboard/layouts/sidebar';
import { useNav } from '@/admin/_hooks/use-nav';

export const AdminSidebar = () => {
  const { links } = useNav();

  return <Sidebar links={links} />;
};
