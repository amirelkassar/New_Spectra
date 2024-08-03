import Card from '@/components/card';
import LinerChart from '@/components/liner-chart';
const chartData = [
  { x: 'يناير', y: 85 },
  { x: 'فبراير', y: 45 },
  { x: 'مارس ', y: 50 },
  { x: 'ابريل', y: 60 },
  { x: 'مايو', y: 40 },
  { x: 'يونيو', y: 15 },
  { x: 'يوليو', y: 90 },
  { x: 'اغسطس', y: 30 },
  { x: 'سبتمبر', y: 20 },
  { x: 'اكتوبر', y: 17 },
  { x: 'نوفمر', y: 25 },
  { x: 'ديسمبر', y: 10 },
];
export const PerformanceChart = () => {
  return (
    <section>
      <Card className='h-full space-y-5'>
        <h3 className='font-bold text-sm lg:text-medium text-black'>
          ملخص ادائك
        </h3>
        <LinerChart chartData={chartData} />
      </Card>
    </section>
  );
};
