import DeleteIcon from '@/assets/icons/delete';
import ShowTerms from '@/components/ShowTerms';
import { cn } from '@/lib/utils';
import { Input } from './input';

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

Service.PriceInput = Input;

const NetEarnings = ({
  currancy = '$',
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'text-xs lg:text-base text-center bg-blueLighter py-2 px-5 pr-10 rounded-xl min-w-36 shrink-0 relative',
        props?.className
      )}
    >
      {children}
      <span className='absolute inset-y-0 right-4 flex items-center'>
        {currancy}
      </span>
    </div>
  );
};

Service.NetEarnings = NetEarnings;

const Terms = ({
  headline = 'Terms & Conditions',
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn('text-xs flex', props?.className)}
    >
      <span className='text-greenMain text-nowrap shrink-0'>
        {headline}
      </span>
      <ShowTerms>{children}</ShowTerms>
    </div>
  );
};

Service.Terms = Terms;
