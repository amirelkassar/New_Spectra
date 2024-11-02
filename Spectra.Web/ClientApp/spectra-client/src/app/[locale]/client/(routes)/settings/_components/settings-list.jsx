import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';
import LockIcon from '@/assets/icons/lock';
import PrivacyIcon from '@/assets/icons/Privacy';
import QuestionMarkIcon from '@/assets/icons/QuestionMark';
import TermsIcon from '@/assets/icons/terms';
import Wallet2 from '@/assets/icons/wallet2';
import Card from '@/components/card';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

const DATA = [
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

export const SettingsList = () => {
  return (
    <section className='space-y-5'>
      <ul className='space-y-5'>
        {DATA.map((item) => (
          <List key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

const List = ({ icon = null, label = '', href = '' }) => {
  return (
    <li>
      <Link href={href}>
        <Card className='flex items-center gap-5 border border-transparent transition hover:border-greenMain'>
          <div className='flex items-center gap-3 flex-1'>
            <span className='size-9 mdl:size-10 rounded-full flex items-center justify-center bg-blueLight shrink-0 text-greenMain'>
              {icon}
            </span>

            <span className='font-bold text-base mdl:text-xl'>
              {label}
            </span>
          </div>

          <ArrowLeftMainGreen className='ltr:rotate-180 size-3 mdl:size-4' />
        </Card>
      </Link>
    </li>
  );
};
