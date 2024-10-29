'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { TabsCard } from '@/client/_components/ui';
import ClockPlus from '@/assets/icons/clock-plus';
import ClockBack from '@/assets/icons/clock-back';

const data = [
  {
    label: 'جديدة',
    key: 'new',
    icon: <ClockPlus className='size-6 mdl:size-7' />,
  },
  {
    label: 'سابقة',
    key: 'old',
    icon: <ClockBack className='size-5 mdl:size-6' />,
  },
];

export const ScheduleNav = () => {
  const searchParamsTab = useSearchParams()?.get('tab');

  const [tab, setTab] = useState(
    searchParamsTab || data[0]?.key
  );
  return (
    <TabsCard
      classNames={{
        container: 'lg:col-span-2',
        item: 'flex-1 lg:flex-none justify-center',
      }}
      tab={tab}
      setTab={setTab}
      tabs={data}
    />
  );
};
