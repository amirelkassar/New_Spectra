'use client';

import { cn } from '@/lib/utils';
import Card from '@/components/card';

export const TabsCard = ({
  tabs = [],
  setTab = () => {},
  tab = '',
  className = '',
}) => {
  return (
    <Card
      className={cn(
        'h-auto basis-1/4 flex flex-row lg:flex-col *:flex-1 gap-3',
        className
      )}
    >
      {tabs?.map((t) => (
        <button
          type='button'
          key={t}
          onClick={() => setTab(t)}
          className={cn(
            'rounded-lg transition hover:bg-blueLight text-black font-bold text-xs lg:text-base w-full px-3 py-1',
            {
              'bg-greenMain text-white hover:bg-greenMain': tab === t,
            }
          )}
        >
          {t}
        </button>
      ))}
    </Card>
  );
};
