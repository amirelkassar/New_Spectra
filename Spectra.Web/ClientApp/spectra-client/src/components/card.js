import { cn } from '@/lib/utils';

const Card = ({
  title = '',
  titleId = '',
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
            'rounded-xl bg-white p-1 mdl:p-5 relative w-full',
            className
          )}
          {...props}
        >
          {title && (
            <h2
              id={titleId}
              className='text-base font-bold mdl:text-xl mb-3 capitalize'
            >
              {title}
            </h2>
          )}
          {children}
        </div>
      )}
      {size === 'sm' && (
        <div
          style={{
            boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.06)',
          }}
          className={cn(
            'bg-white py-3 px-8 rounded-xl relative',
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
