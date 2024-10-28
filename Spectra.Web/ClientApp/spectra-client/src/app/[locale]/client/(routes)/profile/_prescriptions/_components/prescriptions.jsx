'use client';

import Card from '@/components/card';
import { Prescription } from '../../family/_components/child/prescrtiption-card';

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

export const Prescriptions = () => {
  return (
    <Card>
      <div className='grid grid-cols-fill-250 gap-5'>
        {prescriptionsData?.map((prescription, i) => (
          <Prescription key={i} {...prescription} />
        ))}
      </div>
    </Card>
  );
};
