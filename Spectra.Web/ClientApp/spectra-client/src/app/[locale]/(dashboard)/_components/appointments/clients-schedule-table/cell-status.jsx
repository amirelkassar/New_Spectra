'use client';

import { StatusBadge } from '@/app/[locale]/(dashboard)/client/_components/schedules';
import { cn } from '@/lib/utils';

export const CellStatus = ({ status = '' }) => {
  return (
    <StatusBadge
      data-state={status}
      status={status}
      className={cn(
        'min-w-fit mdl:min-w-fit mdl:text-sm lg:text-base mdl:max-w-28 w-full mx-auto mdl:ms-auto',
        status === 'done' && 'group-hover:bg-white',
        status === 'available' && 'lg:text-xl mdl:text-sm'
      )}
    >
      {getStatus(status)}
    </StatusBadge>
  );
};

function getStatus(status) {
  switch (status) {
    case 'available':
      return 'انضمام';
    case 'pending':
      return 'لم يتم بعد';
    case 'done':
      return 'تمت';
  }
}
