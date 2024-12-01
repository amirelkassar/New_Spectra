import { cn } from '@/lib/utils';
import { useMemo } from 'react';

export const Info = ({
  data,
  label = '',
  icon,
  className = '',
}) => {
  const renderData = useMemo(() => {
    if (!data) return null;

    if (
      typeof data === 'string' ||
      typeof data === 'number'
    )
      return <p className='text-sm md:text-xl'>{data}</p>;

    if (Array.isArray(data))
      return data?.map((item) => (
        <p key={item} className='text-sm md:text-xl mb-2'>
          {item}
        </p>
      ));
  }, [data]);

  if (!renderData) return null;
  return (
    <div
      className={cn(
        'pb-5 border-b border-grayLight last:border-transparent',
        className
      )}
    >
      <h3 className='font-bold mb-2 text-xs md:text-base'>
        {label}
      </h3>
      {icon ? (
        <div className='flex items-center gap-5'>
          <div className='flex bg-blueLight size-6 md:size-10 rounded-full items-center justify-center shrink-0'>
            {icon}
          </div>
          {renderData}
        </div>
      ) : (
        renderData
      )}
    </div>
  );
};
