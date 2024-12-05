'use client';

import ADHD from '@/assets/icons/adhd';
import { useLocale } from 'next-intl';

export const InfoData = ({
  label = '',
  value = '',
  direction = 'row',
  weight = 'normal',
}) => {
  const locale = useLocale();

  const NoValue = locale === 'ar' ? 'غير متاح' : 'NA';

  return (
    <div
      data-direction={direction}
      data-weight={weight}
      className='group flex items-center gap-x-5 gap-y-3 text-xs mdl:text-base data-[direction=col]:mdl:flex-col data-[direction=col]:mdl:items-start'
    >
      <h4 className='shrink-0 min-w-32 group-data-[direction=col]:mdl:min-w-fit group-data-[weight=reverse]:font-bold'>
        {label}
      </h4>
      {value && (
        <p className='font-bold group-data-[weight=reverse]:font-normal'>
          {value}
        </p>
      )}
      {!value && (
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          {NoValue}
        </p>
      )}
    </div>
  );
};
