'use client';

import { Sidebar } from '@/components/dashboard/layouts/sidebar';
import { useNav } from '@/client/_hooks';

export const ClientSidebar = () => {
  const { links } = useNav();

  return <Sidebar links={links} />;
};
