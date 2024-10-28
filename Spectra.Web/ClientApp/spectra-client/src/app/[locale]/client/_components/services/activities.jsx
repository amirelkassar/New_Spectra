import { ActivityCard } from './activity-card';

const data = [
  {
    label: 'الكشوفات',
    done: 20,
    total: 30,
    percentage: Math.ceil((20 / 30) * 100),
  },
  {
    label: 'الجلسات التقيمية',
    done: 10,
    total: 30,
    percentage: Math.ceil((10 / 30) * 100),
  },
  {
    label: 'الجلسات العلاجية',
    done: 25,
    total: 30,
    percentage: Math.ceil((25 / 30) * 100),
  },
  {
    label: 'المتابعات',
    done: 25,
    total: 30,
    percentage: Math.ceil((25 / 30) * 100),
  },
];

export const Activities = ({ title = '' }) => {
  if (!data.length) return null;
  return (
    <section className='space-y-3'>
      {title && (
        <h2 className='font-bold text-sm mdl:text-2xl text-black'>
          طلب الخدمة
        </h2>
      )}
      <div className='grid grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5'>
        {data?.map((item, index) => (
          <ActivityCard
            key={'activity-card' + index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};
