'use client';

import { cn } from '@/lib/utils';
import Card from '@/components/card';

export const TabsCard = ({
  tabs = [],
  setTab = () => {},
  tab = '',
  className = '',
}) => {
  if (!tabs?.length) return null;
  return (
    <Card
      className={cn(
        'col-span-2 overflow-x-auto lg:overflow-x-hidden',
        className
      )}
    >
      <ul className='flex lg:flex-col gap-3 mdl:gap-5 *:shrink-0 lg:*:shrink'>
        {tabs?.map((t) => (
          <li
            role='button'
            key={t?.label}
            onClick={() => setTab(t?.label)}
            className={cn(
              'rounded-lg transition hover:bg-blueLight text-black font-bold text-xs mdl:text-base lg:w-full px-3 py-1 flex items-center gap-2 w-fit',
              {
                'bg-greenMain text-white hover:bg-greenMain':
                  tab === t?.label,
              }
            )}
          >
            {t?.icon}
            {t?.label}
          </li>
        ))}
      </ul>
    </Card>
  );
};
