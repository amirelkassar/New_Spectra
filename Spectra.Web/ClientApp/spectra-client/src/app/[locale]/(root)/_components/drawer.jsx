'use client';

import { usePathname, useRouter } from '@/navigation';
import { Drawer as MantineDrawer } from '@mantine/core';

import { Logo } from '@/components/logo';
import Button from '@/components/button';
import ArrowNav from '@/assets/icons/arrow-nav';
import { cn } from '@/lib/utils';
import { LangDropdown } from './lang-dropdown';
import LogIn from '@/assets/icons/log-in';
import ROUTES from '@/routes';

export const Drawer = ({
  onClose = () => {},
  isOpen = false,
  links = [],
  currentLocale = 'ar',
}) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <MantineDrawer
      withCloseButton={false}
      size={'xs'}
      dir='ltr'
      classNames={{
        body: 'p-0',
      }}
      position={currentLocale === 'ar' ? 'right' : 'left'}
      opened={isOpen}
      onClose={onClose}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      transitionProps={{
        transition:
          currentLocale === 'ar'
            ? 'slide-left'
            : 'slide-right',
        duration: 300,
        timingFunction: 'ease-in-out',
      }}
    >
      <div dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
        {/* HEADER */}
        <div className='flex p-5 items-center justify-between'>
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
              {links.map((link) => (
                <li
                  role='button'
                  onClick={() => {
                    router.push(link.href);
                    onClose();
                  }}
                  className={cn(
                    'p-4 flex font-bold text-sm items-center gap-x-2 transition hover:bg-blueLight',
                    {
                      'bg-blueLight':
                        pathName === link.href,
                    }
                  )}
                  key={link.href}
                >
                  <span
                    className={
                      pathName === link.href
                        ? '!fill-greenMain !text-greenMain'
                        : '!fill-black !text-black'
                    }
                  >
                    {link?.icon}
                  </span>
                  {link.label}
                </li>
              ))}
            </ul>
          </nav>

          {/* LOCALE */}
          <LangDropdown
            className='p-4'
            currentLocale={currentLocale}
          />

          {/* AUTH */}

          <div className='p-4 mt-12'>
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
        </div>
      </div>
    </MantineDrawer>
  );
};
