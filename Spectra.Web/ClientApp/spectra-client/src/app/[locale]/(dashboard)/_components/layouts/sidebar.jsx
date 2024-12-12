'use client';

import { usePathname } from '@/i18n/routing';

import { Sidebar as SidebarComponent } from '@/dashboard/_components/ui/sidebar';

import { useClientNav } from '@/dashboard/_hooks/use-client-nav';
import { useAdminNav } from '@/dashboard/_hooks/use-admin-nav';
import { useDoctorNav } from '@/dashboard/_hooks/use-doctor-nav';

export const Sidebar = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/client')) return <ClientSidebar />;
  if (pathname.startsWith('/admin')) return <AdminSidebar />;
  if (pathname.startsWith('/doctor')) return <DoctorSidebar />;
};

const ClientSidebar = () => {
  const { links } = useClientNav();
  return <SidebarComponent links={links} />;
};

const AdminSidebar = () => {
  const { links } = useAdminNav();

  return <SidebarComponent links={links} />;
};

const DoctorSidebar = () => {
  const { links } = useDoctorNav();
  return <SidebarComponent links={links} />;
};
