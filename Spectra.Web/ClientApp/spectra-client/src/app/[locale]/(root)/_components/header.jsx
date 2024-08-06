import { getLocale } from 'next-intl/server';

import { Nav } from './nav';
import { MobileDrawer } from './mobile-drawer';
import Logo from '@/assets/icons/logo';
import ROUTES from '@/routes';

const NAVDATA = [
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
      className='w-full flex py-8 xl:max-w-7xl mx-auto gap-x-12 items-center max-w-5xl container justify-between xl:justify-normal'
    >
      <Logo className='w-24 h-10' />

      <MobileDrawer />
      <Nav currentLocale={locale} navLinks={NAVDATA} />
    </header>
  );
};
