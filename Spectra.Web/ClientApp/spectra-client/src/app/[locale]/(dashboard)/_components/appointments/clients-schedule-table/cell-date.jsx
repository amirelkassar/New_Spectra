'use client';

import { useLocale } from 'next-intl';

import { getDate } from '@/lib/utils';

export const CellDate = ({ date }) => {
  const locale = useLocale();
  const { fullYear, time } = getDate(date, locale);
  return (
    <>
      <span className='mdl:block bg-blueLight px-3 py-1 rounded-xl mdl:bg-transparent mdl:px-0 mdl:py-0 mdl:rounded-none'>
        {fullYear}
      </span>
      <span className='mdl:block bg-blueLight px-3 py-1 rounded-xl mdl:bg-transparent mdl:px-0 mdl:py-0 mdl:rounded-none'>
        {time}
      </span>
    </>
  );
};
