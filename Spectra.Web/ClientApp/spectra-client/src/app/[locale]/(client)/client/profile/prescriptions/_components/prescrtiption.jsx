'use client';

import PillsIcon from '@/assets/icons/pills';
import TherapyIcon from '@/assets/icons/therapy';
import { cn } from '@/lib/utils';
import Button from '@/components/button';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import Card from '@/components/card';

export const Prescription = ({
  id = '1',
  date = '20/04/2024',
  doctor = 'احمد محمد كمال',
  proffession = 'اخصائى نفسي',
  drug = 'سيترالين',
  dose = '100mg',
  description = 'اخده طوال الشهر يوميا مع الاكل',
  type = 'medication',
  isNew = true,
  isDetailed = false,
}) => {
  return (
    <Card
      className={cn(
        'w-full bg-gray/70 space-y-3 text-xs lg:text-base px-5 py-3 lg:py-5',
        isNew && 'bg-greenLight',
        isDetailed && 'mdl:w-1/2 mx-auto'
      )}
    >
      {/* Actions */}

      <span
        className={cn(
          'text-greenMain font-bold !text-xs block invisible',
          isNew && 'visible'
        )}
      >
        جديدة
      </span>

      {/* Doctor */}
      <div
        className={cn(
          'flex items-center flex-col justify-between pb-2 border-b border-black !text-xs lg:!text-base text-black',
          isDetailed && 'flex-row justify-between'
        )}
      >
        <h4 className='font-bold'>الاخصائى {doctor}</h4>
        <p>{proffession}</p>
      </div>

      {/* content */}
      {type === 'عقاقير' && (
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-2 min-h-40',
            isDetailed && 'flex-row justify-between'
          )}
        >
          <PillsIcon />
          <div className='font-bold text-center'>
            <span className='me-5'>{drug}</span>
            <span>{dose}</span>
            <p className='font-normal'>{description}</p>
          </div>
          <span>{date}</span>
        </div>
      )}
      {type === 'توصيات' && (
        <div className='flex flex-col items-center justify-center gap-2 min-h-40'>
          <TherapyIcon />
          <p>{description}</p>
          <span>{date}</span>
        </div>
      )}

      {/* footer */}
      {!isDetailed && (
        <Link href={`${ROUTES.CLIENT.PROFILE}/prescriptions/${id}`}>
          <Button className='w-full' variant='secondary'>
            عرض
          </Button>
        </Link>
      )}
    </Card>
  );
};
