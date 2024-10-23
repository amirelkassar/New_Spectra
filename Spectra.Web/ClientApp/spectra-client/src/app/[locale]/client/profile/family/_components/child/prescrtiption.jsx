'use client';

import PillsIcon from '@/assets/icons/pills';
import { cn } from '@/lib/utils';
import Button from '@/components/button';
import Card from '@/components/card';

export const Prescription = ({
  id = '1',
  date = '20/04/2024',
  doctor = 'احمد محمد كمال',
  proffession = 'اخصائى نفسي',
  drug = 'سيترالين',
  dose = '100mg',
  description = 'اخده طوال الشهر يوميا مع الاكل',
  isNew = true,
  isDetailed = false,
  onView = () => {},
}) => {
  return (
    <Card
      key={id}
      className={cn(
        'w-[200px] mdl:w-[250px] bg-gray/70 text-xs lg:text-base px-5 py-3 lg:py-5 relative',
        isNew && 'bg-greenLight',
        isDetailed && 'mdl:w-1/2 mx-auto'
      )}
    >
      {/* NEW BADGE */}

      {isNew && (
        <span className='text-greenMain font-bold !text-xs absolute top-1 start-2'>
          جديد
        </span>
      )}
      {/* Doctor */}
      <div
        className={cn(
          'flex items-center flex-col justify-between pb-2 border-b border-black/20 !text-xs lg:!text-base text-black mt-1',
          isDetailed && 'flex-row justify-between'
        )}
      >
        <h5 className='font-bold text-xs mdl:text-base'>
          الاخصائى {doctor}
        </h5>
        <p className='text-xs mdl:text-base'>
          {proffession}
        </p>
      </div>

      {/* content */}
      <div
        className={cn(
          'flex flex-col my-3 items-center justify-center gap-1 min-h-40',
          isDetailed && 'flex-row justify-between'
        )}
      >
        <PillsIcon className='text-greenMain size-6 mdl:size-10' />
        <div className='font-bold text-center text-sm mdl:text-xl'>
          <span className='me-5'>{drug}</span>
          <span>{dose}</span>
          <p className='font-normal text-xs mdl:text-base mt-2'>
            {description}
          </p>
        </div>
        <span className='text-xs mdl:text-base'>
          {date}
        </span>
      </div>

      {/* footer */}
      {!isDetailed && (
        <Button
          onClick={() => onView(id)}
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
