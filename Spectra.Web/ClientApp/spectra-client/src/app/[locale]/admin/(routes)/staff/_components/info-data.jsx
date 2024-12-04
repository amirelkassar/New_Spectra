'use client';

import ADHD from '@/assets/icons/adhd';
import { useLocale } from 'next-intl';

export const InfoData = ({ label = '', value = '' }) => {
  const locale = useLocale();

  const NoValue = locale === 'ar' ? 'غير متاح' : 'NA';

  return (
    <div className='flex items-center gap-5 text-xs mdl:text-base'>
      <h4 className='shrink-0 min-w-32'>{label}</h4>
      {value && <p className='font-bold'>{value}</p>}
      {!value && (
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          {NoValue}
        </p>
      )}
    </div>
  );
};
