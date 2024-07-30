import { Reports } from './_components/reports';
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
const ReportsPage = () => {
  return (
    <>
      <Reports reportsData={reportsData} />
    </>
  );
};

export default ReportsPage;
