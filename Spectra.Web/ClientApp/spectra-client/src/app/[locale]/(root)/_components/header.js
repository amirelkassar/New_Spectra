import { getLocale } from 'next-intl/server';

import { Nav } from './nav';
import { MobileDrawer } from './mobile-drawer';
import Logo from '@/assets/icons/logo';
import ROUTES from '@/routes';

export const Header = async () => {
  const locale = await getLocale();
  const navLinks = [
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
  return (
    <header
      role='banner'
      aria-label='Site header'
      className='py-12 flex justify-between items-center w-full container'
    >
      <MobileDrawer />
      <Logo className='w-[91px] h-[37px]' />
      <Nav currentLocale={locale} navLinks={navLinks} />
    </header>
  );
};
