import Card from '@/components/card';
import ReportChart from '@/components/reportChart';

const chartData = [
  {
    title: 'جلسة 1',
    num: 2,
  },
  {
    title: 'جلسة 2',
    num: 3,
  },
  {
    title: 'جلسة 3',
    num: 4,
  },
  {
    title: 'جلسة 4',
    num: 5,
  },
  {
    title: 'جلسة 5',
    num: 7,
  },
  {
    title: 'جلسة 6',
    num: 8,
  },
];
export const PerformanceChart = () => {
  return (
    <section>
      <Card
        title='ملخص الاداء'
        className='h-full space-y-5'
      >
        <ReportChart ReportDataChart={chartData} />
      </Card>
    </section>
  );
};
