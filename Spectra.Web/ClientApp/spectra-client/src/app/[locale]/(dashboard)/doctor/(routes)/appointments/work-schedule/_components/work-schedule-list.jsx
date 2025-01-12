'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useScheduleTimeList } from '@/hooks/queries/employee/schedule-time';

export const WorkScheduleList = () => {
  const query = useScheduleTimeList();

  return (
    <QueryWrapper query={query}>
      {({ data }) => <RenderWorkSchedule data={data} />}
    </QueryWrapper>
  );
};

const RenderWorkSchedule = ({ data = [] }) => {
  return JSON.stringify(data);
};
