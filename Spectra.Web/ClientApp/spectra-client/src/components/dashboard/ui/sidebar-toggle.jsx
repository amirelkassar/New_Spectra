'use client';

import { cn } from '@/lib/utils';
import { useSidebarStore } from '../../../hooks/use-sidebar-store';
import ArrowNav from '@/assets/icons/arrow-nav';
import MenuDash from '@/assets/icons/menuDash';

export const SidebarToggle = () => {
  const { toggle, isOpen } = useSidebarStore();

  return (
    <>
      {/* MOBILE */}
      <button
        className={`size-9 items-center justify-center rounded-full flex lg:hidden bg-blueLight`}
        onClick={toggle}
      >
        <MenuDash />
      </button>

      {/* DESKTOP */}
      <button
        className={cn(
          'hidden lg:flex size-9 rounded-full items-center justify-center transition bg-blueLight rtl:rotate-180',
          isOpen && 'rotate-180 rtl:rotate-0'
        )}
        onClick={toggle}
      >
        <ArrowNav />
      </button>
    </>
  );
};
