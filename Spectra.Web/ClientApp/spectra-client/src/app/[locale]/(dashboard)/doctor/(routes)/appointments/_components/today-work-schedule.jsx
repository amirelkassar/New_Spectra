'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { GradientNoiseCard } from '@/components/gradient-noise-card';
import ArrowWhite from '@/assets/icons/arrowWhite';
import CalendarTimeIcon from '@/assets/icons/calendarTime';
import ROUTES from '@/routes';

export const TodayWorkSchedule = () => {
  const tg = useTranslations('general_obj');

  const t = useTranslations('appointments_obj');

  const router = useRouter();

  return (
    <GradientNoiseCard
      role='button'
      className='flex items-center gap-4 min-h-28 transition-shadow hover:shadow-md'
      onClick={() =>
        router.push(
          ROUTES.DOCTOR.APPOINTMENTS.WORK_SCHEDULE.DASHBOARD
        )
      }
    >
      <CalendarTimeIcon className='size-9 md:size-12 shrink-0' />

      <div className='flex-1 flex flex-col mdl:flex-row gap-y-2 gap-x-4 mdl:justify-around mdl:items-center'>
        <h3 className=' text-base mdl:text-2xl font-bold'>
          {t('today_work_schedule')}
        </h3>

        <div className='flex items-center gap-5 lg:gap-10'>
          <p className='text-sm mdl:text-xl font-bold'>
            {tg('from')} / 00 :8 ص
          </p>
          <p className=' text-sm mdl:text-xl font-bold'>
            {tg('to')} / 00 :4 م
          </p>
        </div>
      </div>

      <ArrowWhite className='shrink-0' />
    </GradientNoiseCard>
  );
};
