'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export const CellAcceptedBy = ({
  acceptedByAdmin = false,
  acceptedByEmployee = false,
  acceptedByHead = false,
  className = '',
}) => {
  const t = useTranslations('general_obj');

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Badge aria-checked={acceptedByEmployee}>{t('doctor')}</Badge>
      <Badge aria-checked={acceptedByHead}>
        {t('department_head')}
      </Badge>
      <Badge aria-checked={acceptedByAdmin}>{t('admin')}</Badge>
    </div>
  );
};

const Badge = ({ children, ...props }) => (
  <div
    {...props}
    className='rounded-xl py-1 px-2 text-xs mdl:text-base bg-grayLight aria-checked:bg-blueLight text-black/50 aria-checked:text-black text-nowrap w-fit'
  >
    {children}
  </div>
);
