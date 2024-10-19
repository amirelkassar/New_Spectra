import { getLocale } from 'next-intl/server';

import { Nav } from './nav';
import { MobileDrawer } from './mobile-drawer';
import ROUTES from '@/routes';
import { Logo } from '@/components/logo';

export const NAVDATA = [
  {
    label: 'الرئيسية',
    href: ROUTES.ROOT.HOME,
  },
  {
    label: 'من نحن',
    href: ROUTES.ROOT.ABOUT,
  },
  {
    label: 'فريقنا الطبي',
    href: ROUTES.ROOT.TEAM,
  },
  {
    label: 'خدمتنا',
    href: ROUTES.ROOT.SERVICES,
  },
  {
    label: 'ماذا نعالج',
    href: ROUTES.ROOT.TREATMENT,
  },
  {
    label: 'قصص النجاح',
    href: ROUTES.ROOT.SUCCESS_STORIES,
  },
  {
    label: 'المدونات',
    href: ROUTES.ROOT.BLOG,
  },
  {
    label: 'تواصل معنا',
    href: ROUTES.ROOT.CONTACT,
  },
];

export const Header = async () => {
  const locale = await getLocale();

  return (
    <header
      role='banner'
      aria-label='Site header'
      className='w-full flex py-8 z-50 px-3 mdl:px-5 xl:px-10 mx-auto gap-x-12 items-center justify-between xl:justify-normal absolute top-0 end-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2'
    >
      <div className='hidden xl:block'>
        <Logo />
      </div>

      <MobileDrawer />

      <Nav
        currentLocale={locale}
        navLinks={NAVDATA}
        showAuth
      />
    </header>
  );
};
