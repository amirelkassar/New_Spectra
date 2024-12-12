'use client';

import { useLocale } from 'next-intl';

import { cn } from '@/lib/utils';
import PillsIcon from '@/assets/icons/pills';
import Button from '@/components/button';
import Card from '@/components/card';

export const PrescriptionCard = ({
  data = {},
  isDetailed = false,
  onView = () => {},
}) => {
  const locale = useLocale();

  return (
    <Card
      data-id={data?.id}
      className={cn(
        'w-[200px] mdl:w-[250px] bg-gray/70 text-xs lg:text-base px-5 py-3 lg:py-5 relative',
        data?.isNew && 'bg-blueLight',
        isDetailed &&
          'mx-auto w-full mdl:w-full max-w-[500px]'
      )}
    >
      {/* NEW BADGE */}

      {data?.isNew && (
        <span className='text-greenMain font-bold !text-xs absolute top-1 start-2'>
          {locale === 'ar' ? 'جديد' : 'New'}
        </span>
      )}
      {/* Doctor */}
      <div
        className={cn(
          'flex items-center flex-col justify-between py-2 border-b border-black/20 !text-xs lg:!text-base text-black mt-1',
          isDetailed && 'flex-row justify-between'
        )}
      >
        <h5 className='font-bold text-xs mdl:text-base'>
          {locale === 'ar' ? 'طبيب' : 'Doctor'}{' '}
          {data?.doctor}
        </h5>
        <p className='text-xs mdl:text-base'>
          {data?.proffession}
        </p>
      </div>

      {/* content */}
      <div
        className={cn(
          'flex flex-col my-3 items-center justify-center gap-1 min-h-40',
          isDetailed && 'flex-row justify-between min-h-28'
        )}
      >
        <PillsIcon className='text-greenMain size-6 mdl:size-10' />
        <div className='font-bold text-center text-sm mdl:text-xl'>
          <span className='me-5'>{data?.drugName}</span>
          <span>{data?.dose}</span>
          <p className='font-normal text-xs mdl:text-base mt-2'>
            {data?.description}
          </p>
        </div>
        <span className='text-xs mdl:text-base'>
          {data?.date}
        </span>
      </div>

      {/* footer */}
      {!isDetailed && (
        <Button
          onClick={() => onView(data)}
          type='button'
          className='w-full font-bold py-2 mdl:py-3 max-w-32 mdl:max-w-40 mx-auto'
          variant='secondary'
        >
          عرض
        </Button>
      )}
    </Card>
  );
};
