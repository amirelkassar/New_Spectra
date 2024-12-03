import { cn } from '@/lib/utils';

export const FilterButton = ({ children, ...props }) => {
  return (
    <div className='group inline-flex'>
      <button
        {...props}
        className={cn(
          'text-xs mdl:text-base rounded-xl py-2 px-5 mdl:px-8 font-medium aria-pressed:bg-blueLight w-full disabled:cursor-not-allowed',
          props?.className
        )}
      >
        {children}
      </button>
      <Separator />
    </div>
  );
};

const Separator = () => (
  <div className='h-auto w-0.5 bg-grayMedium/40 mx-5 my-1 group-last:bg-transparent' />
);
