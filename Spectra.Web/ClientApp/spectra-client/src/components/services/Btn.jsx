'use client';

import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const Btn = ({
  subscribed = false,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant='secondary'
      className={cn(
        'font-bold text-sm mdl:text-xl py-2 w-full',
        {
          'text-greenMain bg-blueLight hover:bg-blueLight cursor-default':
            subscribed,
        },
        props?.className
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props?.onClick?.(e);
      }}
    >
      {children}
    </Button>
  );
};
