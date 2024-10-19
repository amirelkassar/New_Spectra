'use client';

import { TabsFilter } from '@/app/[locale]/(client)/_components/tabs-filter';
import Card from '@/components/card';
import { useState } from 'react';
import { Prescription } from './prescrtiption';

const prescriptionsData = [
  {
    id: 1,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    drug: 'سيترالين',
    dose: '100mg',
    type: 'عقاقير',
    description: 'اخذه طوال الشهر يوميا مع الاكل',
    isNew: true,
  },
  {
    id: 2,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    type: 'توصيات',
    description: 'علاج تربوي',
    isNew: false,
  },
  {
    id: 3,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    type: 'توصيات',
    description: 'علاج تربوي',
    isNew: false,
  },
];

const tabsFilterData = [
  {
    label: 'الكل',
    icon: null,
  },
  {
    label: 'عقاقير',
    icon: null,
  },
  {
    label: 'توصيات',
    icon: null,
  },
];
export const Prescriptions = () => {
  const [filterTab, setFilterTab] = useState('الكل');

  const filteredData = () => {
    if (filterTab === 'الكل') return prescriptionsData;

    return prescriptionsData.filter((item) => item?.type === filterTab);
  };
  return (
    <Card className='space-y-5'>
      <div className='w-1/2'>
        <TabsFilter
          setTab={setFilterTab}
          data={tabsFilterData}
          tab={filterTab}
        />
      </div>

      <div className='grid grid-cols-fill-250 gap-5'>
        {filteredData()?.map((prescription) => (
          <Prescription {...prescription} />
        ))}
      </div>
    </Card>
  );
};
