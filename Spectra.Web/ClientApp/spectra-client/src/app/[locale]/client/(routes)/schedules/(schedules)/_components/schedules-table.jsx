'use client';

import { useSearchParams } from 'next/navigation';

import Card from '@/components/card';
import { DataTable } from '@/client/_components/ui';
import { schedulesColumns } from './schedules-columns';
import { useHighlightAvailableSchedule } from '../_hooks/use-highlight-available-schedule';
import { useMemo } from 'react';

export const SchedulesTable = ({ data = [] }) => {
  const currentTab = useSearchParams()?.get('tab') || 'new';

  const filteredData = useMemo(() => {
    if (currentTab === 'old') {
      return data.filter((item) => item.status === 'done');
    }
    return data.filter((item) => item.status !== 'done');
  }, [data, currentTab]);

  useHighlightAvailableSchedule({
    filteredData,
    currentTab,
  });
  return (
    <Card>
      <DataTable
        columns={schedulesColumns}
        data={filteredData}
      />
    </Card>
  );
};
