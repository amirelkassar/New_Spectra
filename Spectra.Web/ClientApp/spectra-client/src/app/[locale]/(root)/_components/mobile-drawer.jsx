import MenuDash from '@/assets/icons/menuDash';
import React from 'react';
import { RegisterModal } from './register-modal';
import { Logo } from '@/components/logo';

export const MobileDrawer = () => {
  return (
    <nav className='xl:hidden flex items-center gap-5 justify-between flex-1 relative'>
      <button className='size-10 flex items-center justify-center rounded-lg transition-colors hover:bg-greenLight'>
        <MenuDash />
      </button>

      <div className='absolute top-1/2 -translate-y-1/2 start-1/2 translate-x-1/2'>
        <Logo className='h-8' />
      </div>

      <RegisterModal />
    </nav>
  );
};
