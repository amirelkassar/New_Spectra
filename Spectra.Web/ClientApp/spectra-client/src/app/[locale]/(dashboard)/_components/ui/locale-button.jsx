'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import Button from '@/components/button';

export const LocaleButton = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.replace(pathname, {
          locale: locale === 'en' ? 'ar' : 'en',
          scroll: false,
        });
      }}
      variant='blueLight'
      className='rounded-full shrink-0 text-xs mdl:text-base !p-0 size-9 mdl:size-11 text-greenMain'
    >
      {locale === 'en' ? 'عربي' : 'En'}
    </Button>
  );
};
