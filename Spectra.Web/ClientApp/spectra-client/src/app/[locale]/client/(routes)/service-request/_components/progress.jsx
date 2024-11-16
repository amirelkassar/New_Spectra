import { ProgresCard } from '@/client/_components/progress-card';
import { Section } from '@/client/_components/ui';

export const Progress = ({ data = [] }) => {
  if (!data.length) return null;
  return (
    <Section id='progress'>
      <div className='grid grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {data.map((item) => (
          <ProgresCard key={item?.title} data={item} />
        ))}
      </div>
    </Section>
  );
};
