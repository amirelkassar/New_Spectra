import ROUTES from '@/routes';
import MainIcon from '@/assets/icons/main';
import Customer from '@/assets/icons/customer';
import StaffIcon from '@/assets/icons/staff';
import Hand from '@/assets/icons/hand';
import Med from '@/assets/icons/med';
import Star from '@/assets/icons/star';
import Blog from '@/assets/icons/blog';
import Email2 from '@/assets/icons/email2';
import CheckHeartIcon from '@/assets/icons/check-heart';

export const NAVDATA = [
  {
    key: 'home',
    label: 'الرئيسية',
    href: ROUTES.ROOT.HOME,
    icon: <MainIcon className='size-4' />,
  },
  {
    key: 'about_us',
    label: 'من نحن',
    href: ROUTES.ROOT.ABOUT,
    icon: <Customer className='size-4' />,
  },
  {
    key: 'medical_team',
    label: 'فريقنا الطبي',
    href: ROUTES.ROOT.TEAM,
    icon: <StaffIcon className='size-4' />,
  },
  {
    key: 'our_services',
    label: 'خدمتنا',
    href: ROUTES.ROOT.SERVICES.HOME,
    icon: <Hand className='w-4' />,
  },
  {
    key: 'packages',
    label: 'الباقات',
    href: ROUTES.ROOT.PACKAGES,
    icon: (
      <CheckHeartIcon fill='#010036' className='size-4' />
    ),
  },
  {
    key: 'what_we_cure',
    label: 'ماذا نعالج',
    href: ROUTES.ROOT.TREATMENT,
    icon: <Med className='size-4' />,
  },
  {
    key: 'success_stories',
    label: 'قصص النجاح',
    href: ROUTES.ROOT.SUCCESS_STORIES,
    icon: <Star className='size-4' />,
  },
  {
    key: 'blogs',
    label: 'المدونات',
    href: ROUTES.ROOT.BLOG,
    icon: <Blog className='size-4' />,
  },
  {
    key: 'contact_us',
    label: 'تواصل معنا',
    href: ROUTES.ROOT.CONTACT,
    icon: <Email2 className='size-4' />,
  },
];
