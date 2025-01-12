import React from 'react';
import Card from '@/components/card';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import BackIcon from '@/assets/icons/back';
import CalendarComp from '@/components/calendar';
function page() {
  return (
    <Card>
      <div className='flex mb-10   items-center gap-4 '>
        <Link
          href={ROUTES.DOCTOR.APPOINTMENTS}
          className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='headTitleDash'>المواعيد</h2>
      </div>
      <div className='flex items-end justify-end gap-4 flex-wrap mb-11 mdl:mb-9'>
        <div className='flex flex-wrap gap-5 mdl:gap-8 max-w-[350px] lgl:mt-[-50px] place-items-end'>
          <div className='flex items-center gap-2 mdl:gap-3 flex-1 min-w-[calc(50%-16px)]'>
            <span className='b block size-4 mdl:size-6 rounded-full bg-greenMain'></span>
            <p className='mdl:text-base text-xs font-Medium'>
              المواعيد القادمة
            </p>
          </div>
          <div className='flex items-center gap-2 mdl:gap-3 flex-1 min-w-[calc(50%-16px)]'>
            <span className='b block size-4 mdl:size-6 rounded-full bg-grayDark'></span>
            <p className='mdl:text-base text-xs font-Medium'>
              المواعيد السابقة
            </p>
          </div>
          <div className='flex items-center gap-2 mdl:gap-3 flex-1 min-w-[calc(50%-16px)]'>
            <span className='b block size-4 mdl:size-6 rounded-full bg-red'></span>
            <p className='mdl:text-base text-xs font-Medium'>
              المواعيد الملغاة
            </p>
          </div>
          <div className='flex items-center gap-2 mdl:gap-3 flex-1 min-w-[calc(50%-16px)]'>
            <span className='b block size-4 mdl:size-6 rounded-full bg-black'></span>
            <p className='mdl:text-base text-xs font-Medium'>
              المواعيد المؤجلة
            </p>
          </div>
        </div>
      </div>
      <div>
        <CalendarComp />
      </div>
    </Card>
  );
}

export default page;
