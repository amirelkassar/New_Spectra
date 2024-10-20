'use client';

import { useDisclosure } from '@mantine/hooks';

import MenuDash from '@/assets/icons/menuDash';
import { RegisterModal } from './register-modal';
import { Logo } from '@/components/logo';
import { Drawer } from './drawer';
import { cn } from '@/lib/utils';

export const MobileHeader = ({
  currentLocale = 'ar',
  links = [],
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className='xl:hidden flex items-center gap-5 justify-between flex-1 relative'>
      <Drawer
        isOpen={opened}
        onClose={close}
        links={links}
        currentLocale={currentLocale}
      />

      <button
        type='button'
        onClick={open}
        className={cn(
          'size-10 flex items-center justify-center rounded-lg transition-colors hover:bg-greenLight'
        )}
        style={{
          transform:
            currentLocale !== 'ar'
              ? 'rotateY(180deg)'
              : 'rotateY(0)',
        }}
      >
        <MenuDash />
      </button>

      <div className='absolute top-1/2 -translate-y-1/2 start-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2'>
        <Logo className='h-8' />
      </div>

      <RegisterModal />
    </div>
  );
};
