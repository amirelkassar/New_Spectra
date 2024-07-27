import Card from '@/components/card';
import { DataTable } from '@/components/data-table';
import { columns } from './columns';

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

export const Schedules = async ({ slug }) => {
  const data = await getData();

  return (
    <Card className=''>
      {slug.includes('current') && (
        <div>
          <DataTable columns={columns} data={data} />
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
