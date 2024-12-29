import { cn } from '@/lib/utils';

export const CanceledBadge = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'text-red bg-red/10 rounded-xl text-xs mdl:text-base font-bold py-1 px-5',
        props.className
      )}
    >
      {children}
    </div>
  );
};
