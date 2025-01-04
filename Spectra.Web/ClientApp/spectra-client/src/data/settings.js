import LockIcon from '@/assets/icons/lock';
import PrivacyIcon from '@/assets/icons/Privacy';
import QuestionMarkIcon from '@/assets/icons/QuestionMark';
import TermsIcon from '@/assets/icons/terms';
import Wallet2 from '@/assets/icons/wallet2';
import ROUTES from '@/routes';

export const SETTINGS_LIST = [
  {
    id: 1,
    label: 'المحفظة وتحويلاتي البنكية',
    href: ROUTES.CLIENT.WALLET,
    icon: <Wallet2 className='size-4 mdl:size-5' />,
  },
  {
    id: 2,
    label: 'تغيير كلمة المرور',
    href: ROUTES.CLIENT.SETTINGS.CHANGE_PASSWORD,
    icon: <LockIcon className='size-4 mdl:size-5' />,
  },
  {
    id: 3,
    label: 'الشروط و الاحكام',
    href: ROUTES.CLIENT.SETTINGS.TERMS_AND_CONDITIONS,
    icon: <TermsIcon className='size-4 mdl:size-5' />,
  },
  {
    id: 4,
    label: 'سياسة الخصوصية ',
    href: ROUTES.CLIENT.SETTINGS.PRIVACY_POLICY,
    icon: <PrivacyIcon className='size-4 mdl:size-5' />,
  },
  {
    id: 5,
    label: 'الشكاوى',
    href: ROUTES.CLIENT.SETTINGS.COMPLAINTS,
    icon: (
      <QuestionMarkIcon className='size-4 mdl:size-5' />
    ),
  },
];
