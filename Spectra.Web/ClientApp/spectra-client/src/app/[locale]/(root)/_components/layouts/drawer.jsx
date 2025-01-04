'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from '@/i18n/routing';
import { Drawer as MantineDrawer } from '@mantine/core';

import { Logo } from '@/components/logo';
import Button from '@/components/button';
import ArrowNav from '@/assets/icons/arrow-nav';
import { cn } from '@/lib/utils';
import { LangDropdown } from '../ui/lang-dropdown';
import LogIn from '@/assets/icons/log-in';
import ROUTES from '@/routes';
import { useNav } from '@/guest/_hooks/use-nav';
import { useToken } from '@/hooks/use-token';

export const Drawer = ({ onClose = () => {}, isOpen = false }) => {
  const t = useTranslations();

  const router = useRouter();

  const currentLocale = useLocale();

  const matches = useMediaQuery('(min-width: 768px)');

  const { NAVDATA } = useNav();

  const { token } = useToken();

  return (
    <MantineDrawer
      withCloseButton={false}
      size={matches ? 'md' : 'xs'}
      dir='ltr'
      classNames={{
        body: 'p-0',
      }}
      position={currentLocale === 'ar' ? 'right' : 'left'}
      opened={isOpen}
      onClose={onClose}
      overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
      transitionProps={{
        transition:
          currentLocale === 'ar' ? 'slide-left' : 'slide-right',
        duration: 200,
        timingFunction: 'ease-in-out',
      }}
    >
      <div dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
        {/* HEADER */}
        <div className='flex py-5 px-7 items-center justify-between'>
          <Logo />

          <Button
            onClick={onClose}
            className={cn(
              'size-9 flex items-center justify-center p-0 rounded-full',
              {
                'rotate-180': currentLocale !== 'ar',
              }
            )}
            variant='blueLight'
          >
            <ArrowNav />
          </Button>
        </div>

        <div>
          {/* NAV */}
          <nav>
            <ul className='space-y-1'>
              {NAVDATA.map((link) => (
                <li
                  role='button'
                  onClick={() => {
                    router.push(link.href);
                    onClose();
                  }}
                  className={cn(
                    'py-4 px-7 flex font-bold text-sm items-center gap-x-2 transition hover:bg-blueLight',
                    {
                      'bg-blueLight': link.isActive,
                    }
                  )}
                  key={link.href}
                >
                  <span
                    className={
                      link.isActive
                        ? '!fill-greenMain !text-greenMain'
                        : '!fill-black !text-black'
                    }
                  >
                    {link?.icon}
                  </span>
                  {t(link.key)}
                </li>
              ))}
            </ul>
          </nav>

          {/* LOCALE */}
          <LangDropdown className='py-4 px-7' />

          {/* AUTH */}
          {!token && (
            <div className='px-7 py-4 mt-12'>
              <Button
                onClick={() => {
                  router.push(ROUTES.AUTH.LOGIN);
                  onClose();
                }}
                className='w-full font-bold gap-2 rounded-md'
                variant='secondary'
              >
                <LogIn />
                تسجيل الدخول
              </Button>
            </div>
          )}
        </div>
      </div>
    </MantineDrawer>
  );
};
