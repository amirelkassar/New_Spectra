import { Section } from '../../_components/section';

const statisticsData = [
  {
    label: 'دقيقة من الاستشارات والإرشاد',
    value: `+${(2_000_000).toLocaleString('en-US')}`,
  },
  {
    label: 'مستفيد ومستفيدة',
    value: `+${(500_000).toLocaleString('en-US')}`,
  },
  {
    label: 'رضا المستفيدين عن جودة الاستشارة',
    value: 4.9,
  },
];

export const Statistics = () => {
  return (
    <Section
      aria-label='Statistics'
      aria-labelledby='statistics'
      id='statistics'
      className='!pt-0 -mt-36'
    >
      <div className='grid grid-cols-1 mdl:grid-cols-3 bg-white shadow-md rounded-3xl p-10 h-full'>
        {statisticsData.map((s) => (
          <StatisticCard key={s.label} {...s} />
        ))}
      </div>
    </Section>
  );
};

const StatisticCard = ({ label, value }) => {
  return (
    <div className='py-10 mdl:py-3 px-3 mdl:border-e border-b mdl:border-b-0 group border-grayMedium h-auto last:border-transparent text-center'>
      <span
        dir='ltr'
        className='mdl:text-4xl font-bold text-base block'
      >
        {value}
        <span className='text-greenMain hidden group-last:inline px-2'>
          &#9733;
        </span>
      </span>
      <span className='font-bold block text-sm mdl:text-medium max-w-44 mx-auto mt-1'>
        {label}
      </span>
    </div>
  );
};
