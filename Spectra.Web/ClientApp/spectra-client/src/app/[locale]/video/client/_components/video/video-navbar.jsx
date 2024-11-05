'use client';

import { useRouter } from '@/navigation';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';

// ICONS IMPORT
import FileOutline from '@/assets/icons/file-outline';
import HandHeartIcon from '@/assets/icons/hand-heart';
import NominationsIcon from '@/assets/icons/Nominations';
import ReportsIcon from '@/assets/icons/reportsIcon';
import RumorsIcon from '@/assets/icons/rumors';
import { useCallback } from 'react';

const DATA = [
  {
    key: 'recommendations',
    label: 'الترشيحات',
    icon: <NominationsIcon className='size-4 lgl:size-6' />,
  },
  {
    key: 'tests-scans',
    label: 'التحاليل و الاشعات الخارجية',
    icon: <RumorsIcon className='size-4 lgl:size-6' />,
  },
  {
    key: 'prescriptions',
    label: 'الوصفات الطبية',
    icon: <HandHeartIcon className='size-4 lgl:size-6' />,
  },
  {
    key: 'reports',
    label: 'التقارير',
    icon: (
      <ReportsIcon className='size-4 lgl:size-6 fill-greenMain' />
    ),
  },
  {
    key: 'files',
    label: 'الملفات',
    icon: <FileOutline className='size-4 lgl:size-6' />,
  },
];

export const VideoNavbar = () => {
  const router = useRouter();
  const view = useSearchParams().get('view') || '';

  const onClick = useCallback(
    (key) => {
      router.replace(`?view=${key}`);
    },
    [router]
  );

  return (
    <div className='flex lgl:flex-wrap mdl:justify-center gap-5 p-5 bg-white lgl:bg-transparent *:shrink-0 overflow-x-auto lgl:overflow-hidden shrink-0'>
      {DATA.map((item) => (
        <div
          role='button'
          key={item?.key}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(item?.key);
          }}
          className={cn(
            'flex flex-col gap-3 items-center font-bold text-xs bg-white lgl:text-base w-28 lgl:w-44 text-center rounded-xl p-3 lgl:p-5 border-2 lgl:border-transparent border-grayLight transition hover:border-greenMain',
            {
              '!border-greenMain': view === item?.key,
            }
          )}
        >
          <span className='bg-blueLight text-greenMain rounded-lg p-2 lgl:p-3'>
            {item?.icon}
          </span>
          {item?.label}
        </div>
      ))}
    </div>
  );
};
