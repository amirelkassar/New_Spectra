'use client';

import { useDisclosure } from '@mantine/hooks';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Drawer } from '@/guest/_components/layouts';
import { useToken } from '@/hooks/use-token';
import { RegisterModal } from '@/guest/_components/sections';
import MenuDash from '@/assets/icons/menuDash';

export const MobileHeader = ({ locale = 'ar' }) => {
  const t = useTranslations();

  const { token } = useToken();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className='lgl:hidden flex items-center gap-5 justify-between flex-1 relative'>
      <Drawer
        isOpen={opened}
        onClose={close}
        currentLocale={locale}
      />

      <button
        type='button'
        onClick={open}
        className={cn(
          'size-10 flex items-center justify-center rounded-lg transition-colors hover:bg-greenLight'
        )}
        style={{
          transform:
            locale !== 'ar' ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        <MenuDash />
      </button>

      <div className='absolute top-1/2 -translate-y-1/2 start-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2'>
        <Logo className='h-8' />
      </div>

      {!token && <RegisterModal>{t('register')}</RegisterModal>}
    </div>
  );
};
