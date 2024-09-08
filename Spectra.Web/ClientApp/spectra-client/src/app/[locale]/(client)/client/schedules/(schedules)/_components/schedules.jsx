import Card from '@/components/card';
import { DataTable } from '@/components/data-table';
import { columns } from './columns';
import { DoctorIconGreen } from '@/assets/icons/doctor';
import SessionIcon from '@/assets/icons/session';

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

export const Schedules = async ({ data = [] }) => {
  return (
    <Card className='lg:col-span-4 lg:order-4'>
      <div>
        <DataTable
          columns={columns}
          data={data}
          filter='buttons'
          filterBy='type'
          filterData={FilterOptions}
        />
      </div>
    </Card>
  );
};
