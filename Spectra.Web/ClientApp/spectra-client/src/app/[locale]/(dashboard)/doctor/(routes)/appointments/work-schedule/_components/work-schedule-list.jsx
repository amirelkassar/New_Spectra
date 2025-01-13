'use client';

import { useTranslations } from 'next-intl';

import { WEEK_DAYS } from '@/data';
import { QueryWrapper } from '@/components/query-wrapper';
import { useScheduleTimeList } from '@/hooks/queries/employee/schedule-time';
import { WorkScheduleCard } from '@/dashboard/_components/appointments';
import { useMemo } from 'react';
import { useWorkScheduleActions } from '../../_hooks/use-work-schedule-actions';

export const WorkScheduleList = ({ ignoreNoData = false }) => {
  const query = useScheduleTimeList();

  return (
    <QueryWrapper query={query} isFiltered={ignoreNoData}>
      {({ data }) => <RenderWorkSchedule data={data} />}
    </QueryWrapper>
  );
};

const RenderWorkSchedule = ({ data = [] }) => {
  const t = useTranslations('appointments_obj');

  const formattedData = useMemo(() => {
    if (!data.length) return null;
    return data.reduce((acc, item) => {
      if (!acc[item?.day]) acc[item?.day] = [];

      acc[item?.day]?.push(item);
      return acc;
    }, {});
  }, [data]);

  if (!formattedData)
    return (
      <p className='text-grayDark w-full h-full flex items-center justify-center'>
        {t('no_appointments')}
      </p>
    );

  return <WorkSchedule data={formattedData} />;
};

const WorkSchedule = ({ data = {} }) => {
  const { onDelete, onEdit, locale } = useWorkScheduleActions();

  return Object.entries(data).map(([key, value]) => (
    <WorkScheduleCard
      key={key}
      dayName={WEEK_DAYS[key][locale]}
      times={value}
      showActions
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
};
