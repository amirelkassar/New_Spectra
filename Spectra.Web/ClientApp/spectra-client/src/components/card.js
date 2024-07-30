import { cn } from '@/lib/utils';
import React from 'react';

const Card = ({ title = '', children, className, size = 'lg' }) => {
  return (
    <>
      {size === 'lg' && (
        <div
          className={cn(
            'rounded-lg bg-white p-1 lg:p-5 relative w-full max-w-full',
            className
          )}
        >
          {title && (
            <h3 className='lg:text-medium text-black text-sm mb-3'>{title}</h3>
          )}
          {children}
        </div>
      )}
      {size === 'sm' && (
        <div
          style={{
            boxShadow: '0px 4px 12px 0px #0000000A',
          }}
          className={cn(
            'bg-white flex-1 w-fit max-w-full py-3 px-8 rounded-lg min-w-[213px] lg:min-w-max relative',
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Card;
