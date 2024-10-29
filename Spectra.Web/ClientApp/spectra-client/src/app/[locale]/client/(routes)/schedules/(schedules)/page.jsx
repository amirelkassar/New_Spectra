import { SchedulesTable } from './_components/schedules-table';

const SchedulesTypePage = async () => {
  const data = await getData();

  return <SchedulesTable data={data} />;
};

export default SchedulesTypePage;

async function getData() {
  return [
    {
      id: '1',
      label: 'متابعة',
      doctor: 'احمد محمد كمال',
      doctorProffession: 'اخصائي نفسي',
      child: 'محمد عبد الله الشيخ',
      date: '2024-10-28T14:20:25.381Z',
      status: 'available',
    },
    {
      id: '2',
      label: 'جلسة',
      doctor: 'احمد محمد كمال',
      doctorProffession: 'اخصائي نفسي',
      child: 'محمد عبد الله الشيخ',
      date: '2024-10-28T14:20:25.381Z',
      status: 'pending',
    },
    {
      id: '3',
      label: 'كشف',
      doctor: 'احمد محمد كمال',
      doctorProffession: 'اخصائي نفسي',
      child: 'محمد عبد الله الشيخ',
      date: '2024-10-28T14:20:25.381Z',
      status: 'done',
    },
  ];
}
