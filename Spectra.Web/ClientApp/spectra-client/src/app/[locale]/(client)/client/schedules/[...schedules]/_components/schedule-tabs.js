import Card from '@/components/card';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import { useMemo } from 'react';

export const ScheduleTabs = ({ slug }) => {
  const data = useMemo(() => [
    {
      label: 'الحالية',
      value: 'current',
      isActive: slug.includes('current'),
    },
    {
      label: 'جديدة',
      value: 'new',
      isActive: slug.includes('new'),
    },
    {
      label: 'سابقة',
      value: 'old',
      isActive: slug.includes('old'),
    },
  ]);
  return (
    <Card className='lg:h-auto flex items-center gap-4 lg:block lg:space-y-5 lg:row-span-3 lg:-order-1 lg:col-span-1'>
      {data.map((item) => (
        <Link
          key={item.value}
          className={cn(
            'w-full text-center lg:text-start px-5 py-1 text-xs lg:text-base block text-black font-bold transition hover:bg-greenLight rounded-lg',
            item.isActive && 'bg-greenMain text-white hover:bg-greenMain'
          )}
          href={`${ROUTES.CLIENT.SCHEDULES}/${item.value}`}
        >
          {item.label}
        </Link>
      ))}
    </Card>
  );
};
