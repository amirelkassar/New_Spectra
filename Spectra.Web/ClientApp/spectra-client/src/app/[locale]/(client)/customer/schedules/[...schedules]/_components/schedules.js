import Card from '@/components/card';
import { DataTable } from '@/components/data-table';
import { columns } from './columns';
import CalenderIcon from '@/assets/icons/calender';
import { DoctorIconGreen } from '@/assets/icons/doctor';
import SessionIcon from '@/assets/icons/session';

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      type: 'session',
      doctor: 'احمد محمد كمال',
      child: 'محمد عبد الله الشيخ',
      date: '2023-05-15',
      status: 'notStarted',
    },
    {
      id: '2',
      type: 'appointment',
      doctor: 'احمد محمد كمال',
      child: 'محمد عبد الله الشيخ',
      date: '2023-05-15',
      status: 'processing',
    },
    {
      id: '3',
      type: 'appointment',
      doctor: 'احمد محمد كمال',
      child: 'محمد عبد الله الشيخ',
      date: '2023-05-15',
      status: 'done',
    },
    // ...
  ];
}

const FilterOptions = [
  {
    label: 'كشف',
    icon: <DoctorIconGreen />,
    key: 'appointment',
  },
  {
    label: 'جلسة',
    icon: <SessionIcon />,
    key: 'session',
  },
];

export const Schedules = async ({ slug }) => {
  const data = await getData();

  return (
    <Card className=''>
      {slug.includes('current') && (
        <div>
          <DataTable
            columns={columns}
            data={data}
            filter='buttons'
            filterBy='type'
            filterData={FilterOptions}
          />
        </div>
      )}

      {slug.includes('new') && (
        <div>
          <p>new</p>
        </div>
      )}

      {slug.includes('old') && (
        <div>
          <p>old</p>
        </div>
      )}
    </Card>
  );
};
