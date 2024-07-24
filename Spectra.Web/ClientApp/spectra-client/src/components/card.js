import clsx from 'clsx';
import React from 'react';

const Card = ({ title = '', children, className, size = 'lg' }) => {
  return (
    <>
      {size === 'lg' && (
        <div
          className={clsx(
            'mdl:rounded-[10px] mdl:bg-white p-1 mdl:p-5 relative w-full max-w-full',
            className
          )}
        >
          {title && (
            <h3 className='mdl:text-medium text-black text-sm mb-3'>{title}</h3>
          )}
          {children}
        </div>
      )}
      {size === 'sm' && (
        <div
          style={{
            boxShadow: '0px 4px 12px 0px #0000000A',
          }}
          className={clsx(
            'bg-white flex-1 w-fit max-w-full py-3 px-8 rounded-[10px] min-w-[213px] mdl:min-w-max',
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
