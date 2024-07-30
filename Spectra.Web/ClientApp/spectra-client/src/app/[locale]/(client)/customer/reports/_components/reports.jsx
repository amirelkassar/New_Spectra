'use client';

import { Link, redirect } from '@/navigation';
import { useState } from 'react';

import Card from '@/components/card';
import { Filter } from './filter';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import Avatar from '@/components/avatar';
import { cn } from '@/lib/utils';
import ROUTES from '@/routes';

const filterData = [
  {
    id: 1,
    label: 'التقارير التشخيصية',
    key: 'diagnostic',
  },
  {
    id: 2,
    label: 'التقارير العلاجية',
    key: 'treatment',
  },
  {
    id: 3,
    label: 'التقارير السلوكية',
    key: 'psychological',
  },
];

export const Reports = ({ reportsData = [] }) => {
  const [filter, setFilter] = useState(null);

  const filteredData = () => {
    if (!filter) return reportsData;

    return reportsData.filter((item) => item?.type === filter);
  };

  return (
    <Card className='space-y-10'>
      <Filter filterData={filterData} setFilter={setFilter} />
      <div className='grid grid-cols-fill-250 gap-5'>
        {filteredData()?.map((report) => (
          <Link key={report.id} href={`${ROUTES.CLIENT.REPORTS}/${report.id}`}>
            <Report {...report} />
          </Link>
        ))}
      </div>
    </Card>
  );
};

const Report = ({ id, date, doctor, avatar, isNew }) => {
  return (
    <Card
      className={cn(
        'w-full cursor-pointer bg-gray/70 transition space-y-3 text-xs font-bold lg:text-base hover:bg-blueLight px-5 py-3 lg:py-5',
        isNew && 'bg-greenLight'
      )}
    >
      {/* Actions */}
      <div className='flex items-center justify-between'>
        <span className={cn('text-greenMain invisible', isNew && 'visible')}>
          جديدة
        </span>
        <ThreeDotsIcon />
      </div>

      {/* Info */}
      <div>
        <h4>تقرير:{id}</h4>
        <time className='font-normal'>{date}</time>
      </div>

      {/* Doctor */}
      <div className='flex items-center gap-2'>
        <Avatar
          name={doctor}
          src={avatar}
          size='sm'
          className='lg:size-9 size-7 text-xs lg:text-base shrink-0 p-0'
        />
        <div>
          <span className='font-normal'>الاخصائى:</span> <span>{doctor}</span>
        </div>
      </div>

      {/* footer */}
      <div className='text-sm lg:text-medium pt-3 border-t border-grayMedium'>
        <p>تقرير تحليل صحي شامل</p>
      </div>
    </Card>
  );
};
