import { redirect } from '@/navigation';

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

const reportsData = [
  {
    id: 1,
    date: '2023-05-15',
    doctor: 'احمد محمد كمال',
    avatar: '',
    isNew: true,
    type: 'diagnostic',
  },
  {
    id: 2,
    date: '2023-01-10',
    doctor: 'احمد محمد كمال',
    avatar: '',
    isNew: false,
    type: 'treatment',
  },
  {
    id: 3,
    date: '2024-10-10',
    doctor: 'احمد محمد كمال',
    avatar: '',
    isNew: false,
    type: 'psychological',
  },
  {
    id: 4,
    date: '2024-10-10',
    doctor: 'احمد محمد كمال',
    avatar: '',
    isNew: false,
    type: 'psychological',
  },
];

export const Reports = ({ repo }) => {
  const handleDisplayReports = () => {
    if (!repo) {
      return reportsData;
    }

    if (repo.includes('diagnostic')) {
      return reportsData.filter((report) => report.type === 'diagnostic');
    }

    if (repo.includes('treatment')) {
      return reportsData.filter((report) => report.type === 'treatment');
    }

    if (repo.includes('psychological')) {
      return reportsData.filter((report) => report.type === 'psychological');
    }

    redirect(ROUTES.CLIENT.REPORTS);
  };

  return (
    <Card className='space-y-10'>
      <Filter filterData={filterData} />
      <div className='grid grid-cols-fill-250 gap-5'>
        {handleDisplayReports().map((report) => (
          <Report key={report.id} {...report} />
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
