'use client';

import { usePathname } from '@/i18n/routing';

import ROUTES from '@/routes';
import MainIcon from '@/assets/icons/main';
import Customer from '@/assets/icons/customer';
import StaffIcon from '@/assets/icons/staff';
import Hand from '@/assets/icons/hand';
import Med from '@/assets/icons/med';
import Star from '@/assets/icons/star';
import Blog from '@/assets/icons/blog';
import Email2 from '@/assets/icons/email2';
import Puzzle from '@/assets/icons/puzzle';

export const useNav = () => {
  const pathName = usePathname();

  const NAVDATA = [
    {
      key: 'home',
      label: 'الرئيسية',
      href: ROUTES.ROOT.HOME,
      icon: <MainIcon className='size-4 lgl:size-6 inline-block' />,
      isActive: pathName === ROUTES.ROOT.HOME,
    },
    {
      key: 'about_us',
      label: 'من نحن',
      href: ROUTES.ROOT.ABOUT,
      icon: <Customer className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName === ROUTES.ROOT.ABOUT,
    },
    {
      key: 'medical_team',
      label: 'فريقنا الطبي',
      href: ROUTES.ROOT.TEAM,
      icon: <StaffIcon className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.TEAM),
    },
    {
      key: 'services',
      label: 'خدمتنا',
      href: ROUTES.ROOT.SERVICES,
      icon: <Hand className='size-4 lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.SERVICES),
    },
    {
      key: 'packages',
      label: 'الباقات',
      href: ROUTES.ROOT.PACKAGES,
      icon: <Puzzle className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.PACKAGES),
    },
    {
      key: 'what_we_cure',
      label: 'ماذا نعالج',
      href: ROUTES.ROOT.TREATMENT,
      icon: <Med className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.TREATMENT),
    },
    {
      key: 'success_stories',
      label: 'قصص النجاح',
      href: ROUTES.ROOT.SUCCESS_STORIES,
      icon: <Star className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.SUCCESS_STORIES),
    },
    {
      key: 'blogs',
      label: 'المدونات',
      href: ROUTES.ROOT.BLOG,
      icon: <Blog className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.BLOG),
    },
    {
      key: 'contact_us',
      label: 'تواصل معنا',
      href: ROUTES.ROOT.CONTACT,
      icon: <Email2 className='size-4  lgl:size-6 inline-block' />,
      isActive: pathName.includes(ROUTES.ROOT.CONTACT),
    },
  ];

  return {
    NAVDATA,
  };
};
