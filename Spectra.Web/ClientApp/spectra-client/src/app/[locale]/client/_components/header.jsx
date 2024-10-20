'use client';

// GLOBAL IMPORTS
import { useCallback } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/navigation';

// STORE
import { useSidebar } from '@/store/client/sidebar/menu-slice';

// ICONS
import Logo from '@/assets/icons/logo';
import ArrowNav from '@/assets/icons/arrow-nav';
import MenuDash from '@/assets/icons/menuDash';
import NotificationIcon from '@/assets/icons/notification';
import SearchIcon from '@/assets/icons/search';
import Button from '@/components/button';

// COMPONENT
export const Header = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const locale = useLocale();
  const pathname = usePathname();

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
    <header className='h-9 lg:h-16 flex items-center gap-[10px] lg:gap-[28px]'>
      {/* OPEN & CLOSE SIDEBAR */}

      {/* MOBILE */}
      <button
        className={`size-9 items-center justify-center rounded-full flex lg:hidden bg-blueLight`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuDash />
      </button>

      {/* DESKTOP */}
      <button
        className='hidden lg:flex size-9 rounded-full items-center justify-center transition bg-blueLight'
        style={handleOpenNavButton()}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowNav />
      </button>

      {/* LOGO */}
      <Link href={'#'} className='block w-fit '>
        <Logo className={'w-[91px] h-9'} />
      </Link>

      {/* SEARCH INPUT  */}
      <div className='flex items-center justify-end grow'>
        <button className='p-[9px] md:p-0 size-[34px] md:size-[45px] bg-greenMain mx-[10p] md:mx-[20px] rounded-full flex items-center justify-center shrink-0'>
          <SearchIcon />
        </button>

        <input
          type='text'
          className='grow hidden md:block h-10 bg-gray rounded-full px-5 focus:outline-greenMain'
          placeholder='بحث...'
        />
      </div>

      {/* LANGUAGE BUTTON */}
      <Button
        variant='blueLight'
        className='!rounded-full shrink-0 text-xs lg:text-base p-0 size-12'
      >
        <Link
          href={pathname}
          locale={locale === 'en' ? 'ar' : 'en'}
        >
          {locale === 'en' ? 'عربي' : 'En'}
        </Link>
      </Button>

      {/* NOTIFICATION BUTTON */}
      <Button
        variant='blueLight'
        className='relative shrink-0 p-0 size-12 !rounded-full'
      >
        <span
          className={
            'size-5 text-sm p-1 rounded-full bg-red absolute bottom-0 -start-1 text-white flex items-center justify-center font-bold'
          }
        >
          1
        </span>
        <NotificationIcon />
      </Button>
    </header>
  );
};
