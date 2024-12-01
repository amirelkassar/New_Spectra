'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/navigation';
import Button from '@/components/button';

export const LocaleButton = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      locale={locale === 'en' ? 'ar' : 'en'}
    >
      <Button
        variant='blueLight'
        className='rounded-full shrink-0 text-xs mdl:text-base !p-0 size-9 mdl:size-11 text-greenMain'
      >
        {locale === 'en' ? 'عربي' : 'En'}
      </Button>
    </Link>
  );
};
