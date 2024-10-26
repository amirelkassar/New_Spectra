'use client';

import { cn } from '@/lib/utils';
import Card from '@/components/card';
import { useRouter } from '@/navigation';

export const TabsCard = ({
  tabs = [],
  setTab = () => {},
  tab = '',
  className = '',
}) => {
  const router = useRouter();

  if (!tabs?.length) return null;
  return (
    <Card
      className={cn(
        'lg:col-span-2 pb-4 lg:pb-0 overflow-x-auto lg:overflow-x-hidden',
        className
      )}
    >
      <ul className='flex lg:flex-col gap-3 mdl:gap-5 *:shrink-0 lg:*:shrink'>
        {tabs?.map((t) => (
          <li
            role='button'
            key={t?.key}
            onClick={() => {
              setTab(t?.key);
              router.replace(`?tab=${t?.key}`, {
                scroll: false,
              });
            }}
            className={cn(
              'lg:rounded-lg transition lg:hover:bg-blueLight lg:text-black lg:font-bold font-normal text-xs mdl:text-base lg:w-full p-3 lg:py-1 flex items-center *:shrink-0 gap-2 w-fit border-b border-transparent lg:border-0 hover:text-greenMain hover:lg:text-black',
              {
                'lg:bg-greenMain lg:text-white lg:hover:bg-greenMain hover:lg:text-white border-b-2 border-b-greenMain text-greenMain':
                  tab === t?.key,
              }
            )}
          >
            {t?.icon}
            <span className='text-black lg:text-inherit'>
              {t?.label}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
