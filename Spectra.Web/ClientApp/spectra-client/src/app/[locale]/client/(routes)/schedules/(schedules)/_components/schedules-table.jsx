'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import Card from '@/components/card';
import { DataTable } from '@/client/_components/ui';
import { schedulesColumns } from './schedules-columns';

export const SchedulesTable = ({ data = [] }) => {
  const currentTab = useSearchParams()?.get('tab') || 'new';

  const filteredData = useMemo(() => {
    if (currentTab === 'old') {
      return data.filter((item) => item.status === 'done');
    }
    return data.filter((item) => item.status !== 'done');
  }, [data, currentTab]);

  return (
    <Card>
      <DataTable
        columns={schedulesColumns}
        data={filteredData}
      />
    </Card>
  );
};
