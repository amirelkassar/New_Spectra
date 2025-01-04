import { Container } from '@/guest/_components/ui';

export const Statistics = ({ data = [] }) => {
  if (!data.length) return null;
  return (
    <Container
      aria-label='Statistics'
      aria-labelledby='statistics'
      id='statistics'
    >
      <div className='grid grid-cols-1 mdl:grid-cols-3 bg-white shadow-md rounded-3xl p-10 h-full'>
        {data?.map((s) => (
          <StatisticCard key={s.label} {...s} />
        ))}
      </div>
    </Container>
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
        <span className='mdl:text-2xl text-xs hidden group-last:inline'>
          /5
        </span>
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
