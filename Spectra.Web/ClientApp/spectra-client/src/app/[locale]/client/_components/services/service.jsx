'use client';

import { useRouter } from '@/navigation';

import { cn } from '@/lib/utils';
import Button from '@/components/button';
import ROUTES from '@/routes';

export const Service = ({
  label = '',
  icon = '',
  color = '',
  description = '',
  id = '',
  subscribed = false,
}) => {
  const router = useRouter();

  return (
    <div
      role='button'
      data-id={id}
      className='p-5 flex flex-col gap-5 rounded-2xl border-2 border-transparent transition hover:border-greenMain'
      onClick={() =>
        router.push(
          ROUTES.CLIENT.SERVICE_REQUEST.VIEW_SERVICE.replace(
            ':id',
            id
          )
        )
      }
    >
      <div
        className={`mdl:size-20 size-16 mx-auto rounded-full flex items-center justify-center`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className='flex-1 space-y-3'>
        <h4 className='font-bold text-center min-h-14 text-sm mdl:text-xl px-4'>
          {label}
        </h4>
        <p className='text-xs mdl:text-lg text-center'>
          {description}
        </p>
      </div>

      <Button
        variant='secondary'
        className={cn(
          'font-bold text-sm mdl:text-xl py-2 w-full',
          {
            'text-greenMain bg-blueLight hover:bg-blueLight cursor-default':
              subscribed,
          }
        )}
      >
        {subscribed ? 'تم الحجز' : 'احجز الان'}
      </Button>
    </div>
  );
};
