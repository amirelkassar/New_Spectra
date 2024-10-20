import { getLocale } from 'next-intl/server';

import { MobileHeader } from './mobile-header';
import ROUTES from '@/routes';
import { XlScreenHeader } from './xl-screen-header';
import MainIcon from '@/assets/icons/main';
import Customer from '@/assets/icons/customer';
import StaffIcon from '@/assets/icons/staff';
import Hand from '@/assets/icons/hand';
import Med from '@/assets/icons/med';
import Star from '@/assets/icons/star';
import Blog from '@/assets/icons/blog';
import Email2 from '@/assets/icons/email2';

export const NAVDATA = [
  {
    label: 'الرئيسية',
    href: ROUTES.ROOT.HOME,
    icon: <MainIcon className='size-4' />,
  },
  {
    label: 'من نحن',
    href: ROUTES.ROOT.ABOUT,
    icon: <Customer className='size-4' />,
  },
  {
    label: 'فريقنا الطبي',
    href: ROUTES.ROOT.TEAM,
    icon: <StaffIcon className='size-4' />,
  },
  {
    label: 'خدمتنا',
    href: ROUTES.ROOT.SERVICES,
    icon: <Hand className='w-4' />,
  },
  {
    label: 'ماذا نعالج',
    href: ROUTES.ROOT.TREATMENT,
    icon: <Med className='size-4' />,
  },
  {
    label: 'قصص النجاح',
    href: ROUTES.ROOT.SUCCESS_STORIES,
    icon: <Star className='size-4' />,
  },
  {
    label: 'المدونات',
    href: ROUTES.ROOT.BLOG,
    icon: <Blog className='size-4' />,
  },
  {
    label: 'تواصل معنا',
    href: ROUTES.ROOT.CONTACT,
    icon: <Email2 className='size-4' />,
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
      <XlScreenHeader
        currentLocale={locale}
        links={NAVDATA}
      />

      <MobileHeader
        currentLocale={locale}
        links={NAVDATA}
      />
    </header>
  );
};
