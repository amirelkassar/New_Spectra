import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';
import {
  Section,
  SectionTitle,
} from '@/client/_components/ui';
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
    <Section id='performance-chart'>
      <Card>
        <div className='flex items-center justify-between mb-10'>
          <SectionTitle id='performance-chart'>
            ملخص الاداء
          </SectionTitle>

          <button className='bg-blueLighter rounded-xl font-bold text-greenMain text-xs mdl:text-base py-2 px-5 flex items-center gap-4 transition'>
            عرض الكل
            <ArrowLeftMainGreen className='size-3 mdl:size-4 ltr:rotate-180' />
          </button>
        </div>
        <ReportChart ReportDataChart={chartData} />
      </Card>
    </Section>
  );
};
