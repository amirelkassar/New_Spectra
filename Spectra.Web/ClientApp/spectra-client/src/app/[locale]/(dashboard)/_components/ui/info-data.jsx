import ADHD from '@/assets/icons/adhd';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

export const InfoData = ({
  label = '',
  value = '',
  direction = 'row',
  weight = 'normal',
  labelClassName = '',
  valueClassName = '',
  rootClassName = '',
}) => {
  const locale = useLocale();

  const NoValue = locale === 'ar' ? 'غير متاح' : 'NA';

  return (
    <div
      data-direction={direction}
      data-weight={weight}
      className={cn(
        'group flex items-center gap-x-5 gap-y-3 text-xs mdl:text-base data-[direction=col]:mdl:flex-col data-[direction=col]:mdl:items-start',
        rootClassName
      )}
    >
      <h4
        className={cn(
          'shrink-0 min-w-32 group-data-[direction=col]:mdl:min-w-fit group-data-[weight=reverse]:font-bold',
          labelClassName
        )}
      >
        {label}
      </h4>
      {value && (
        <p
          className={cn(
            'font-bold group-data-[weight=reverse]:font-normal',
            valueClassName
          )}
        >
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
