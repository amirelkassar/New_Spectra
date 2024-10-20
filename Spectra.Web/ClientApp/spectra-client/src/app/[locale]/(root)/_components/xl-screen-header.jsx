'use client';

import { Link } from '@/navigation';

import { RegisterModal } from './register-modal';
import ROUTES from '@/routes';
import { Nav } from './nav';
import { Logo } from '@/components/logo';
import { LangDropdown } from './lang-dropdown';

export const XlScreenHeader = ({
  links = [],
  currentLocale = 'ar',
}) => {
  return (
    <div
      aria-label='Main navigation'
      className='xl:flex hidden flex-1 justify-between items-center gap-x-6'
    >
      <div className='flex items-center gap-x-10'>
        {/* LOGO */}
        <Logo className='h-10' />

        {/* NAV */}
        <Nav navLinks={links} />
      </div>
      {/* AUTH && LOCALE */}
      <div className='flex items-center gap-x-6'>
        <RegisterModal />

        <Link
          href={ROUTES.AUTH.LOGIN}
          className='font-bold leading-6 border-b-2 border-transparent transition hover:border-black'
          aria-label='تسجيل الدخول'
        >
          تسجيل الدخول
        </Link>

        <LangDropdown currentLocale={currentLocale} />
      </div>
    </div>
  );
};
