'use client';

import { Menu } from '@mantine/core';
import { usePathname, Link } from '@/navigation';

import ArrowDownIcon from '@/assets/icons/arrow-down';
import Globe from '@/assets/icons/globe';
import { cn } from '@/lib/utils';

export const LangDropdown = ({
  currentLocale = 'ar',
  className = '',
}) => {
  const pathName = usePathname();

  return (
    <Menu trigger='click' openDelay={100} closeDelay={400}>
      <Menu.Target>
        <button
          className={cn(
            'font-bold flex items-center',
            className
          )}
          aria-haspopup='true'
        >
          <Globe />
          <span className='inline-block ms-2'>
            {currentLocale === 'en' ? 'English' : 'عربي'}
          </span>
          <ArrowDownIcon />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Link
          className='w-full h-full'
          href={pathName}
          locale={currentLocale === 'en' ? 'ar' : 'en'}
          title={
            currentLocale === 'ar'
              ? 'Switch to English'
              : 'التبديل إلى العربي'
          }
        >
          <Menu.Item className='w-fit h-10 font-bold leading-6 text-base'>
            <span>
              {currentLocale === 'ar' ? 'English' : 'عربي'}
            </span>
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
};
