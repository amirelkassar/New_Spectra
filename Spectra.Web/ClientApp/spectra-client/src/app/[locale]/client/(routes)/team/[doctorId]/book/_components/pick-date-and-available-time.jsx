'use client';

import { useLocale } from 'next-intl';

import Card from '@/components/card';
import { DatePicker } from '@/components/date-picker';

const AVAILABLE_TIMES = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
];

export const PickDateAndAvailableTime = () => {
  const locale = useLocale();
  return (
    <Card className='grid grid-cols-1 mdl:grid-cols-2 gap-5 mdl:gap-10'>
      {/* Pick Date */}
      <div className='space-y-5'>
        <h3 className='text-base font-bold mdl:text-xl mb-3'>
          حدد التاريخ
        </h3>

        <DatePicker locale={locale} />
      </div>

      {/* Available Time */}
      <div className='flex flex-col justify-between gap-5 mdl:ps-4'>
        <h3 className='text-base font-bold mdl:text-xl mb-3'>
          التوقيتات المتاحة
        </h3>

        <div className='flex flex-wrap justify-center lg:justify-start gap-2 mdl:gap-5'>
          {AVAILABLE_TIMES.map((time) => (
            <label
              className='w-full max-w-32 mdl:max-w-36'
              dir='ltr'
              htmlFor={time}
              key={time}
            >
              <input
                type='radio'
                name='time'
                id={time}
                className='hidden peer'
              />
              <span
                role='button'
                className='rounded-xl border block border-grayDark w-full text-center px-5 py-3 text-base mdl:text-xl hover:border-greenMain peer-checked:border-transparent peer-checked:bg-greenMain peer-checked:font-bold peer-checked:text-white'
              >
                {time}
              </span>
            </label>
          ))}
        </div>
      </div>
    </Card>
  );
};
