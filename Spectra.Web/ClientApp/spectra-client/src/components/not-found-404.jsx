'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';

import NotFound404Icon from '@/assets/icons/404';
import Button from './button';
import { cn } from '@/lib/utils';
import ROUTES from '@/routes';
import { useMemo } from 'react';

export const NotFound404 = ({ className = '', toHome = false }) => {
  const locale = useLocale();
  const router = useRouter();

  const btnLabel = useMemo(() => {
    if (locale === 'ar' && !toHome) return 'الرجوع للصفحة السابقة';
    if (locale === 'ar' && toHome) return 'الصفحة الرئيسية';
    if (locale === 'en' && !toHome) return 'Go back to previous page';
    if (locale === 'en' && toHome) return 'Home page';
  }, [locale, toHome]);

  return (
    <div className={cn('flex-1 h-full', className)}>
      <NotFound404Icon className='block mx-auto max-w-full mb-10' />

      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        {locale === 'ar'
          ? 'الصفحة التي تبحث عنها غير موجودة!'
          : 'Page not found!'}
      </p>

      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (toHome) return router.replace(ROUTES.HOME);
          router.back();
        }}
        variant='secondary'
        className='text-sm mdl:text-xl font-bold w-full mx-auto max-w-sm mt-5 capitalize'
      >
        {btnLabel}
      </Button>
    </div>
  );
};
