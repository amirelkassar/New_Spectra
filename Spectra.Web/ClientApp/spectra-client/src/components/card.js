import { cn } from '@/lib/utils';

const Card = ({
  title = '',
  children,
  className = '',
  size = 'lg',
  ...props
}) => {
  return (
    <>
      {size === 'lg' && (
        <div
          className={cn(
            'rounded-xl bg-white p-1 mdl:p-5 relative h-full',
            className
          )}
          {...props}
        >
          {title && (
            <h2 className='text-base font-bold mdl:text-xl mb-3'>
              {title}
            </h2>
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
            'bg-white py-3 px-8 rounded-xl relative h-full',
            className
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Card;
