'use client';

import { useRouter } from '@/i18n/routing';

import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '../button';
import { cn } from '@/lib/utils';

export const BackButton = ({ children, href = '', ...props }) => {
  const router = useRouter();

  return (
    <Button
      {...props}
      onClick={(e) => {
        if (props?.onClick) return props?.onClick(e);
        e.preventDefault();
        e.stopPropagation();
        if (href) return router.push(href);
        router.back();
      }}
      className={cn(
        'text-sm mdl:text-base py-2 gap-3 font-bold',
        props.className
      )}
    >
      {children}
      <ArrowLeft className='ltr:rotate-180' />
    </Button>
  );
};
