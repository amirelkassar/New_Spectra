'use client';
import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';
import LanguageIcon from '@/assets/icons/language';
import LockIcon from '@/assets/icons/lock';
import NotificationIcon2 from '@/assets/icons/notification2';
import PrivacyIcon from '@/assets/icons/Privacy';
import QuestionMarkIcon from '@/assets/icons/QuestionMark';
import TermsIcon from '@/assets/icons/terms';
import TransfersIcon from '@/assets/icons/transfers';
import { Link, usePathname } from '@/i18n/routing';
import ROUTES from '@/routes';
import { useLocale } from 'next-intl';
import React from 'react';

function Page() {
  const pathname = usePathname();
  const locale = useLocale();

  const contentSetting = [
    {
      title: 'جميع التحويلات',
      icon: (
        <TransfersIcon
          fill='#10B0C1'
          className={'w-full h-auto max-h-5 '}
        />
      ),
      url: ROUTES.DOCTOR.WALLET.DASHBOARD,
      type: 'link',
    },
    {
      title: 'تغيير كلمة المرور',
      icon: <LockIcon className={'w-full h-auto max-h-5'} />,
      url: ROUTES.DOCTOR.SETTINGS.CHANGEPASSWORD,
      type: 'link',
    },
    {
      title: 'التنبيهات',
      icon: <NotificationIcon2 className={'w-full h-auto max-h-5'} />,
      url: ROUTES.DOCTOR.SETTINGS.NOTIFICATIONS,
      type: 'link',
    },
  ];
  const contentSetting2 = [
    {
      title: 'الشروط و الاحكام',
      icon: <TermsIcon className={'w-full h-auto max-h-5 '} />,
      url: ROUTES.DOCTOR.WALLET.DASHBOARD,
      type: 'link',
    },
    {
      title: 'سياسة الخصوصية ',
      icon: <PrivacyIcon className={'w-full h-auto max-h-5'} />,
      url: ROUTES.DOCTOR.SETTINGS.CHANGEPASSWORD,
      type: 'link',
    },
    {
      title: 'الشكاوى',
      icon: <QuestionMarkIcon className={'w-full h-auto max-h-5'} />,
      url: ROUTES.DOCTOR.SETTINGS.COMPLAINTS,
      type: 'link',
    },
  ];
  const LinkSettingPage = ({ item }) => {
    return (
      <Link
        href={item.url}
        className='bg-white duration-300 hover:shadow-md cursor-pointer rounded-xl px-1 mdl:px-8 gap-3 py-4 flex items-center justify-between'
      >
        <div className='flex items-center gap-4'>
          <div className=' size-8 mdl:size-10 rounded-full bg-blueLight flex items-center justify-center p-2 mdl:p-[9px]'>
            {item.icon}
          </div>
          <h3 className='text-base mdl:text-xl font-Bold'>
            {item.title}
          </h3>
        </div>
        <ArrowLeftMainGreen className='w-2 h-auto' />
      </Link>
    );
  };
  return (
    <div>
      <h2 className='font-Bold px-2 text-base mdl:text-xl mb-9 mdl:p-7'>
        الاعدادات
      </h2>
      <div className='flex w-full flex-col gap-4 mdl:gap-7 mdl:px-7'>
        {contentSetting.map((item, i) => {
          return <LinkSettingPage item={item} key={i} />;
        })}
        <Link
          href={pathname}
          locale={locale === 'en' ? 'ar' : 'en'}
          className='bg-white duration-300 hover:shadow-md cursor-pointer rounded-xl px-1 mdl:px-8 gap-3 py-4 flex items-center justify-between'
        >
          <div className='flex items-center gap-4'>
            <div className=' size-8 mdl:size-10 rounded-full bg-blueLight flex items-center justify-center p-2 mdl:p-[9px]'>
              <LanguageIcon
                fill='#10B0C1'
                className={'w-full h-auto'}
              />
            </div>
            <div className='flex items-center gap-6'>
              <h3 className='text-base mdl:text-xl font-Bold'>
                {' '}
                {locale === 'en' ? 'عربي' : 'English'}
              </h3>
            </div>
          </div>
        </Link>
        {contentSetting2.map((item, i) => {
          return <LinkSettingPage item={item} key={i} />;
        })}
      </div>
      <div className='flex items-center space-x-4'></div>
    </div>
  );
}

export default Page;
