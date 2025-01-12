'use client';

import { useLocale, useTranslations } from 'next-intl';

import { WEEK_DAYS } from '@/data';
import { QueryWrapper } from '@/components/query-wrapper';
import { useScheduleTimeList } from '@/hooks/queries/employee/schedule-time';
import { WorkScheduleCard } from '@/dashboard/_components/appointments';

export const WorkScheduleList = ({ ignoreNoData = false }) => {
  const query = useScheduleTimeList();

  return (
    <QueryWrapper query={query} isFiltered={ignoreNoData}>
      {({ data }) => <RenderWorkSchedule data={data} />}
    </QueryWrapper>
  );
};

const RenderWorkSchedule = ({ data = [] }) => {
  const locale = useLocale();

  const t = useTranslations('appointments_obj');

  if (!data.length)
    return (
      <p className='text-grayDark w-full h-full flex items-center justify-center'>
        {t('no_appointments')}
      </p>
    );

  const formattedData = {};

  return Object.entries(formattedData).map(([key, value]) => (
    <WorkScheduleCard
      key={key}
      dayName={WEEK_DAYS[key][locale]}
      times={value}
      deletable
    />
  ));
};
