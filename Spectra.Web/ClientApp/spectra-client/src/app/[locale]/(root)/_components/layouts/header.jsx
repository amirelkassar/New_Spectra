import { getLocale } from 'next-intl/server';

import { NAVDATA } from '@/data';
import {
  MobileHeader,
  XlScreenHeader,
} from '@/guest/_components/layouts';

export const Header = async () => {
  const locale = await getLocale();

  return (
    <header
      role='banner'
      aria-label='Site header'
      className='w-full py-8 absolute top-0 start-0 z-50 px-5 xl:px-10'
    >
      <XlScreenHeader locale={locale} links={NAVDATA} />

      <MobileHeader locale={locale} links={NAVDATA} />
    </header>
  );
};
