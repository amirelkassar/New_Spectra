import { getLocale } from 'next-intl/server';

import { Nav } from './nav';
import { MobileDrawer } from './mobile-drawer';
import { Link } from '@/navigation';
import Logo from '@/assets/icons/logo';
import ROUTES from '@/routes';

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
      className='w-full flex py-8 z-50 xl:max-w-screen-2xl mx-auto gap-x-12 items-center max-w-[1400px] container justify-between xl:justify-normal absolute top-0 end-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2'
    >
      <Link href={ROUTES.ROOT.HOME}>
        <Logo className='w-24 h-10' />
      </Link>

      <MobileDrawer />
      <Nav
        currentLocale={locale}
        navLinks={NAVDATA}
        showAuth
      />
    </header>
  );
};