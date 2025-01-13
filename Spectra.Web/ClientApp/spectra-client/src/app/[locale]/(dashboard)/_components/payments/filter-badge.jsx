import { cn } from '@/lib/utils';

export const FilterBadge = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'bg-greenMain rounded-lg py-1 px-3 text-sm lg:text-medium font-bold text-white w-full max-w-24 flex items-center justify-center',
        props?.className
      )}
    >
      {children}
    </div>
  );
};
