'use client';

import { cn } from '@/lib/utils';
import Card from '@/components/card';
import { useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';

export const TabsCard = ({
  tabs = [],
  defaultTab = '',
  classNames = {
    container: '',
    list: '',
    item: '',
  },
}) => {
  const router = useRouter();
  const currentTab = useSearchParams()?.get('tab') || defaultTab;

  if (!tabs?.length) return null;
  return (
    <Card
      className={cn(
        'lg:col-span-3 pb-4 overflow-x-auto lg:overflow-x-hidden',
        classNames.container
      )}
    >
      <ul
        className={cn(
          'flex lg:flex-col mdl:gap-5 *:shrink-0 lg:*:shrink',
          classNames.list
        )}
      >
        {tabs?.map((t) => (
          <li
            role='button'
            key={t?.key}
            onClick={() => {
              router.replace(`?tab=${t?.key}`, {
                scroll: false,
              });
            }}
            className={cn(
              'lg:rounded-lg transition lg:hover:bg-greenLight lg:text-black lg:font-bold font-normal text-sm mdl:text-base lg:w-full px-5 py-3 flex items-center *:shrink-0 gap-2 w-fit border-b border-grayDark/20 lg:border-0 hover:text-greenMain hover:lg:text-black',
              {
                'lg:bg-greenMain lg:text-white lg:hover:bg-greenMain hover:lg:text-white border-b-2 border-b-greenMain text-greenMain font-semibold':
                  currentTab === t?.key,
              },
              classNames.item
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
