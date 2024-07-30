'use client';
import Card from '@/components/card';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import BarsOutline from '@/assets/icons/bars-outline';
import FileOutline from '@/assets/icons/file-outline';
import PlayOutline from '@/assets/icons/play-outline';
import { TabsCard } from '@/app/[locale]/(client)/_components/tabs-card';
import { TabsFilter } from '@/app/[locale]/(client)/_components/tabs-filter';

export const Atthachments = () => {
  const [tab, setTab] = useState('مرفقاتى');

  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <TabsCard tabs={['مرفقاتى', 'مشاركات']} setTab={setTab} tab={tab} />

      <Card>
        <TabsFilter
          tabs={[
            {
              label: 'الكل',
              icon: <BarsOutline className='size-3 lg:size-4' />,
            },
            {
              label: 'ملفات',
              icon: <FileOutline className='size-3 lg:size-4' />,
            },
            {
              label: 'فيديوهات',
              icon: <PlayOutline className='size-3 lg:size-4' />,
            },
          ]}
        />
      </Card>
    </div>
  );
};
