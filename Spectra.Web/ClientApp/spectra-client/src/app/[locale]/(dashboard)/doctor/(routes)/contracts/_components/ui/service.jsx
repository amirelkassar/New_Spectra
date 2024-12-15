import DeleteIcon from '@/assets/icons/delete';
import ShowTerms from '@/components/ShowTerms';
import { cn } from '@/lib/utils';

export const Service = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'py-3 border-b-2 border-grayLight last:border-transparent',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const Delete = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'p-2 transition hover:shadow-md rounded-md border border-red block shrink-0',
        props?.className
      )}
    >
      <DeleteIcon className='size-2 lg:size-4' />
    </button>
  );
};

Service.Delete = Delete;

const NetEarnings = ({ currancy = 'SAR', children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'text-base mdl:text-xl font-medium text-center bg-blueLighter py-2 px-5 rounded-xl min-w-36 shrink-0 relative',
        props?.className
      )}
    >
      {children} <span className='text-xs'>{currancy}</span>
    </div>
  );
};

Service.NetEarnings = NetEarnings;

const Price = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'text-base mdl:text-xl text-center bg-grayLight py-2 px-5 rounded-xl min-w-36 shrink-0 relative font-medium',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

Service.Price = Price;

const Terms = ({
  headline = 'Terms & Conditions',
  children,
  ...props
}) => {
  return (
    <div {...props} className={cn('text-xs flex', props?.className)}>
      <span className='text-greenMain text-nowrap shrink-0'>
        {headline}
      </span>
      <ShowTerms>{children}</ShowTerms>
    </div>
  );
};

Service.Terms = Terms;
