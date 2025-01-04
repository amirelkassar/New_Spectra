'use client';

import { Fragment } from 'react';
import { useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';

const TABS = [
  { id: 'clients', label: 'العملاء' },
  { id: 'childs', label: 'الاطفال' },
  { id: 'doctors', label: 'الاطباء' },
];

export const ClientsTabs = () => {
  const router = useRouter();
  const tab = useSearchParams().get('tab') || 'clients';

  const onClick = (tab) => {
    router.replace(`?tab=${tab}`, {
      scroll: false,
    });
  };

  return (
    <div className='flex gap-1 mdl:gap-5'>
      {TABS.map((t) => (
        <Fragment key={t.id}>
          <Button
            onClick={() => onClick(t.id)}
            className={tab === t.id && 'bg-blueLight'}
          >
            {t.label}
          </Button>
          <Separator />
        </Fragment>
      ))}
    </div>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'text-xs mdl:text-base rounded-xl py-2 px-5 mdl:px-8 font-medium',
        props?.className
      )}
    >
      {children}
    </button>
  );
};

const Separator = () => (
  <div className='h-auto w-0.5 bg-grayMedium/40 my-1 last:bg-transparent' />
);
