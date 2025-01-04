'use client';

import { Menu } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useNav } from '@/guest/_hooks/use-nav';

import ArrowNav from '@/assets/icons/arrow-nav';
import { useMemo } from 'react';

export const Nav = ({ className = '' }) => {
  const t = useTranslations();

  const matchXll = useMediaQuery('(min-width: 1400px)');

  const { NAVDATA } = useNav();

  const NAV = useMemo(() => {
    if (!NAVDATA) return null;

    if (matchXll) return [NAVDATA, []];

    return [NAVDATA.slice(0, 6), NAVDATA.slice(6)];
  }, [NAVDATA, matchXll]);

  if (!NAV) return null;
  return (
    <nav
      className={cn(
        'flex items-center flex-1 justify-start gap-x-4 xll:gap-x-7',
        className
      )}
    >
      {NAV[0]?.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'font-bold whitespace-nowrap inline-block after:block after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:hover:scale-100 after:origin-right ltr:after:origin-left after:mt-0.5',
            link.isActive && 'after:scale-x-100 after:origin-center'
          )}
          aria-label={link.label}
        >
          {t(link.key)}
        </Link>
      ))}

      <MoreDropdown data={NAV[1]} />
    </nav>
  );
};

const MoreDropdown = ({ data = [] }) => {
  const t = useTranslations();

  if (!data.length) return null;
  return (
    <Menu trigger='click-hover' openDelay={100} closeDelay={400}>
      <Menu.Target>
        <button
          className='font-bold flex items-center border-b-2 border-transparent group whitespace-nowrap'
          aria-haspopup='true'
        >
          <span className='inline-block me-2'>{t('more')}</span>
          <ArrowNav
            fill='#010036'
            className='rotate-90 group-aria-expanded:rotate-[-90deg] transition size-3'
          />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        {data?.map((l) => (
          <Link key={l.href} href={l.href}>
            <Menu.Item className='h-10 font-bold leading-6 text-base hover:bg-blueLighter whitespace-nowrap transition'>
              {t(l.key)}
            </Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
