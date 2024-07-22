'use client';

import ArrowDownIcon from '@/assets/icons/arrow-down';
import Button from '@/components/button';
import { Link, usePathname } from '@/navigation';
import ROUTES from '@/routes';
import { Menu } from '@mantine/core';
import clsx from 'clsx';

export const Nav = ({ currentLocale, navLinks }) => {
  const pathName = usePathname();

  return (
    <nav
      className='xl:flex hidden items-center gap-x-6'
      aria-label='Main navigation'
    >
      <div className='flex items-center gap-x-6'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'font-bold leading-6 pb-2 border-b-2 border-transparent transition hover:border-black',
              pathName === link.href && 'border-black'
            )}
            aria-label={link.label}
            title={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-x-6'>
        <Button
          variant='secondary'
          className='font-bold rounded-[10px] leading-6 !min-w-[140px] !py-1 min-h-[33px] !text-center mb-2'
          aria-label='اشترك الان'
        >
          اشترك الان
        </Button>
        <Link
          href={ROUTES.AUTH.LOGIN}
          className='font-bold leading-6 pb-2 border-b-2 border-transparent transition hover:border-black'
          aria-label='تسجيل الدخول'
        >
          تسجيل الدخول
        </Link>
        <Menu trigger='click-hover' openDelay={100} closeDelay={400}>
          <Menu.Target>
            <button
              className='font-bold leading-6 flex items-center pb-2'
              aria-haspopup='true'
            >
              <span>{currentLocale === 'en' ? 'English' : 'عربي'}</span>
              <ArrowDownIcon />
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item className='w-fit h-10 font-bold leading-6 text-base'>
              <Link
                href={pathName}
                locale={currentLocale === 'en' ? 'ar' : 'en'}
                title={
                  currentLocale === 'ar'
                    ? 'Switch to English'
                    : 'التبديل إلى العربي'
                }
              >
                {currentLocale === 'ar' ? 'English' : 'عربي'}
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  );
};
