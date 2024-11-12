'use client';

import { cn } from '@/lib/utils';
import { Section } from '@/client/_components/ui';
import { USAGE_STATISTICS_ICONS } from '@/data';
import Card from '@/components/card';

export const StatisticsCards = ({ data = [] }) => {
  if (!data.length) return null;
  return (
    <Section
      id='statistics'
      className='flex *:grow *:shrink-0 gap-3 overflow-x-auto'
    >
      {data.map((item) => (
        <Statistic key={item.id} {...item} />
      ))}
    </Section>
  );
};

const Statistic = ({
  id = '',
  label = '',
  number = 0,
  percentage = 0,
}) => {
  return (
    <Card size='sm'>
      {/* ICON AND LABEL */}
      <div className='flex items-center gap-x-3 mb-3'>
        {/* ICON */}
        <div
          className={`size-10 shrink-0 mdl:size-16 rounded-full flex items-center justify-center ${USAGE_STATISTICS_ICONS[id]?.color}`}
        >
          {USAGE_STATISTICS_ICONS[id]?.icon}
        </div>
        {/* LABEL */}
        <h3 className='text-sm mdl:text-xl'>{label}</h3>
      </div>

      {/* NUMBER AND PERCENTAGE INFO */}
      <div className='flex items-center gap-x-3'>
        {/* NUMBER */}
        <p className='text-base mdl:text-3xl font-bold'>
          {number.toLocaleString('en-US')}
        </p>
        {/* PERCENTAGE */}
        <p
          className={cn(
            'text-xs shrink-0 text-red',
            percentage > 0 && 'text-[#0A9D4C]'
          )}
        >
          <span className='text-grayDark'>
            الاسبوع السابق{' '}
          </span>
          %{percentage}
          <span
            className={cn('inline-block text-xs', {
              'rotate-[135deg]': percentage < 0,
              'rotate-[35deg]': percentage > 0,
            })}
          >
            &#8593;
          </span>
        </p>
        {/* INFO */}
      </div>
    </Card>
  );
};
