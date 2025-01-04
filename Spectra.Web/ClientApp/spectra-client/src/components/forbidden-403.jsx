'use client';

import { useRouter } from '@/i18n/routing';

import Forbidden403Icon from '@/assets/icons/403';
import Button from './button';
import { cn } from '@/lib/utils';

export const Forbidden403 = ({ className = '' }) => {
  const router = useRouter();

  return (
    <div className={cn('flex-1 h-full', className)}>
      <Forbidden403Icon className='block mx-auto max-w-full mb-10' />

      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        ليس لديك صلاحية للوصول إلى هذه الصفحة أو المورد. يرجى التأكد
        من أن لديك الأذونات المناسبة للوصول إليها.
      </p>

      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          router.back();
        }}
        variant='secondary'
        className='text-sm mdl:text-xl font-bold w-full mx-auto max-w-sm mt-5'
      >
        الرجوع للصفحة السابقة
      </Button>
    </div>
  );
};
