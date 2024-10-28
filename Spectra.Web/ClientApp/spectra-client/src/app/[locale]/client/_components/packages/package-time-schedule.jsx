import { cn, getDate } from '@/lib/utils';
import Card from '@/components/card';
import CheckIcon from '@/assets/icons/check';

export const PackageTimeSchedule = ({
  title = '',
  schedule = [],
}) => {
  if (!schedule.length) return null;

  return (
    <div className='space-y-5'>
      {title && (
        <h2 className='text-base mdl:text-xl font-bold ps-7'>
          {title}
        </h2>
      )}

      <Card className='!p-0 max-h-[400px] mdl:max-h-[460px] overflow-y-auto border-2 border-greenMain/20 mdl:border-transparent'>
        <ul className='max-h-full'>
          {schedule?.map((item, index) => (
            <Schedule key={index} index={index} {...item} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

const Schedule = ({
  label = '',
  date = '',
  status = '',
  locale = 'ar',
  index = 0,
}) => {
  const { fullYear, time } = getDate(date, locale);

  return (
    <li
      className={cn(
        'flex gap-10 mdl:gap-32 opacity-70 items-center p-5 ps-16 relative before:absolute before:h-full before:w-[1px] before:border before:border-dashed before:border-greenMain before:start-[30px] before:ltr:-translate-x-1/2 before:translate-x-1/2 before:top-0',
        {
          'bg-blueLight opacity-100':
            status === 'available',
        }
      )}
    >
      <span
        className={cn(
          'bg-black size-5 absolute start-5 top-6 rounded-full flex items-center justify-center text-white font-Bold text-xs',
          {
            'bg-greenMain ring-4 ring-greenMain/50':
              status === 'available',
          }
        )}
      >
        {status === 'done' && (
          <CheckIcon className='size-4' />
        )}
        {status === 'pending' && index + 1}
      </span>
      <div
        className={cn('text-grayDark', {
          'text-black': status === 'available',
        })}
      >
        <span className='text-sm mdl:text-xl font-bold'>
          {label}
        </span>
        <time className='flex items-center gap-10 text-xs mdl:text-base'>
          <span>{fullYear}</span>
          <span>{time}</span>
        </time>
      </div>
      <div
        role='button'
        className={cn(
          'rounded-xl text-sm mdl:text-base py-2 px-5 min-w-24 mdl:min-w-28 text-center cursor-default',
          {
            'bg-greenMain text-white mdl:text-xl font-bold py-3 mdl:px-10 mdl:-ms-5 cursor-pointer transition hover:bg-greenMain/90':
              status === 'available',
            'bg-blueLight': status === 'done',
            'bg-grayLight': status === 'pending',
          }
        )}
      >
        {getStatus(status)}
      </div>
    </li>
  );
};

function getStatus(status) {
  switch (status) {
    case 'available':
      return 'حجز ميعاد';
    case 'pending':
      return 'لم يتم بعد';
    case 'done':
      return 'تمت';
  }
}
