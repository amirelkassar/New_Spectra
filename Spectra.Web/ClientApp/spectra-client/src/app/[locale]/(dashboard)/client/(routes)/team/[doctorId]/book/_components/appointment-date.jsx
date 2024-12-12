'use client';

import { getDate } from '@/lib/utils';
import { useLocale } from 'next-intl';

export const AppointmentDate = () => {
  const date = '2024-10-28T14:20:25.381Z';
  const locale = useLocale();
  const { fullYear, time } = getDate(date, locale);

  return (
    <div className='text-xs mdl:text-base flex mdl:flex-col sml:justify-start justify-around gap-10 mdl:gap-1'>
      <h5 className='font-bold'>ميعاد الحجز</h5>
      <p>{fullYear}</p>
      <p>{time}</p>
    </div>
  );
};
