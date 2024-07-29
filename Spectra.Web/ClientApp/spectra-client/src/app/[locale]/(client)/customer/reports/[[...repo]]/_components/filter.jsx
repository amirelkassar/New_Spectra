import { Fragment } from 'react';

import ROUTES from '@/routes';
import FilterIcon from '@/assets/icons/filter';
import Button from '@/components/button';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';

export const Filter = ({ filterData = [] }) => {
  return (
    <div className='flex mdl:items-center flex-col mdl:flex-row gap-4 my-5 w-full'>
      <div className='flex items-center gap-3'>
        <FilterIcon />
        <span className='font-bold text-xs lg:text-base text-black'>فلتر</span>
      </div>

      <div className='flex items-center w-full mdl:w-auto gap-1 mdl:gap-3 mdl:pb-0 pb-3 overflow-x-auto *:shrink-0'>
        <Link href={ROUTES.CLIENT.REPORTS}>
          <Button
            variant='blueLight'
            className={cn(
              'font-normal flex-1 mdl:flex-initial gap-3 mdl:gap-5',
              {
                'bg-white': '',
              }
            )}
          >
            الكل
          </Button>
        </Link>

        <span className='w-[1px] h-6 bg-grayMedium mx-1' />

        {filterData?.map((option, index) => (
          <Fragment key={option.key}>
            <Link href={`${ROUTES.CLIENT.REPORTS}/${option.key}`}>
              <Button
                variant='blueLight'
                className={cn(
                  'font-normal flex-1 mdl:flex-initial gap-3 mdl:gap-5 text-nowrap',
                  {
                    'bg-white': '',
                  }
                )}
              >
                {option.label}
              </Button>
            </Link>
            {index !== filterData.length - 1 && (
              <span className='w-[1px] h-6 bg-grayMedium mx-1' />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
