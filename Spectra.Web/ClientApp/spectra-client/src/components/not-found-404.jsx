'use client';

import { useRouter } from '@/navigation';

import NotFound404Icon from '@/assets/icons/404';
import Button from './button';
import { cn } from '@/lib/utils';

export const NotFound404 = ({ className = '' }) => {
  const router = useRouter();

  return (
    <div className={cn('flex-1 h-full', className)}>
      <NotFound404Icon className='block mx-auto max-w-full mb-10' />

      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        الصفحة التي تبحث عنها غير موجودة.
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
