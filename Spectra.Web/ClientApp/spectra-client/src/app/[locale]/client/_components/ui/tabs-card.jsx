'use client';

import { cn } from '@/lib/utils';
import Card from '@/components/card';
import { useRouter } from '@/navigation';

export const TabsCard = ({
  tabs = [],
  setTab = () => {},
  tab = '',
  classNames = {
    container: '',
    list: '',
    item: '',
    label: '',
  },
}) => {
  const router = useRouter();

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
              setTab(t?.key);
              router.replace(`?tab=${t?.key}`, {
                scroll: false,
              });
            }}
            className={cn(
              'lg:rounded-lg transition lg:hover:bg-greenLight lg:text-black lg:font-bold font-normal text-sm mdl:text-base lg:w-full px-5 py-3 flex items-center *:shrink-0 gap-2 w-fit border-b border-grayDark/20 lg:border-0 hover:text-greenMain hover:lg:text-black',
              {
                'lg:bg-greenMain lg:text-white lg:hover:bg-greenMain hover:lg:text-white border-b-2 border-b-greenMain text-greenMain font-semibold':
                  tab === t?.key,
              },
              classNames.item
            )}
          >
            <span className='shrink-0'>{t?.icon}</span>
            <span
              className={cn(
                'text-black lg:text-inherit',
                classNames.label
              )}
            >
              {t?.label}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
