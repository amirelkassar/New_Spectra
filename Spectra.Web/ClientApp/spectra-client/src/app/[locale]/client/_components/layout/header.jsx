'use client';

// GLOBAL IMPORTS
import { useLocale } from 'next-intl';
import { useCallback } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { usePathname, Link } from '@/navigation';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { useSidebarStore } from '../../_hooks/use-sidebar-store';
import ROUTES from '@/routes';
import Button from '@/components/button';
import ArrowNav from '@/assets/icons/arrow-nav';
import MenuDash from '@/assets/icons/menuDash';
import SearchIcon from '@/assets/icons/search';
import NotificationIcon from '@/assets/icons/notification';

// COMPONENT
export const Header = () => {
  const { toggle, isOpen } = useSidebarStore();
  const locale = useLocale();
  const pathname = usePathname();
  const match = useMediaQuery('(min-width: 768px)');

  //  HANDLE OPEN & CLOSE SIDEBAR BUTTON ON BOTH LANGUAGES
  const handleOpenNavButton = useCallback(() => {
    if (!isOpen && locale === 'ar') {
      return {
        transform: 'rotateY(180deg)',
      };
    }

    if (isOpen && locale === 'en') {
      return {
        transform: 'rotateY(180deg)',
      };
    }

    return {};
  }, [isOpen, locale]);

  return (
    <header className='h-9 lg:h-16 flex items-center gap-3 lg:gap-5'>
      {/* OPEN & CLOSE SIDEBAR */}

      {/* MOBILE */}
      <button
        className={`size-9 items-center justify-center rounded-full flex lg:hidden bg-blueLight`}
        onClick={toggle}
      >
        <MenuDash />
      </button>

      {/* DESKTOP */}
      <button
        className='hidden lg:flex size-9 rounded-full items-center justify-center transition bg-blueLight'
        style={handleOpenNavButton()}
        onClick={toggle}
      >
        <ArrowNav />
      </button>

      {/* LOGO */}
      <Logo
        className='h-8 mdl:h-9'
        href={ROUTES.CLIENT.MAIN.HOME}
      />

      {/* SEARCH INPUT  */}
      <div className='flex items-center justify-end grow gap-3 lg:gap-5'>
        <Button
          variant={match ? 'secondary' : 'blueLight'}
          className={cn(
            'shrink-0 p-0 size-9 mdl:size-11 rounded-full text-greenMain rotate-90 transition-none',
            match && 'text-white rotate-0'
          )}
        >
          <SearchIcon className='size-4 mdl:size-5' />
        </Button>

        <input
          name='search'
          type='text'
          className='grow hidden mdl:block h-10 bg-grayLight rounded-full px-5 focus:outline-greenMain caret-greenMain'
        />
      </div>

      {/* LANGUAGE BUTTON */}
      <Link
        href={pathname}
        locale={locale === 'en' ? 'ar' : 'en'}
      >
        <Button
          variant='blueLight'
          className='rounded-full shrink-0 text-xs mdl:text-base p-0 size-9 mdl:size-11 text-greenMain'
        >
          {locale === 'en' ? 'عربي' : 'En'}
        </Button>
      </Link>

      {/* NOTIFICATION BUTTON */}
      <Button
        variant='blueLight'
        className='shrink-0 p-0 size-9 mdl:size-11 rounded-full'
      >
        <NotificationIcon className='size-4 mdl:size-5' />
      </Button>
    </header>
  );
};
