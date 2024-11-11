import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

import { Nav } from '@/guest/_components/layouts';
import { Logo } from '@/components/logo';
import { LangDropdown } from '@/guest/_components/ui';
import { RegisterModal } from '@/app/[locale]/(root)/_components/sections';
import ROUTES from '@/routes';

export const XlScreenHeader = ({ locale = 'ar' }) => {
  const t = useTranslations();

  return (
    <div
      aria-label='Main navigation'
      className='lgl:flex hidden items-center gap-x-5'
    >
      {/* LOGO */}
      <Logo className='h-10' />

      {/* NAV */}
      <Nav className='2xl:ms-7' />

      {/* REGISTER */}
      <RegisterModal>{t('register')}</RegisterModal>

      {/* LOGIN */}
      <Link
        href={ROUTES.AUTH.LOGIN}
        className='font-bold inline-block after:block after:w-full after:border-b-2 after:border-black after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:hover:scale-100 after:origin-right ltr:after:origin-left after:mt-0.5 whitespace-nowrap'
        aria-label='تسجيل الدخول'
      >
        {t('login')}
      </Link>

      {/* LOCALE */}
      <LangDropdown currentLocale={locale} />
    </div>
  );
};
