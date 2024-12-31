import { cn } from '@/lib/utils';

export const ContentTitle = ({ children, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        'text-base mdl:text-2xl font-bold text-black',
        props?.className
      )}
    >
      → {children}
    </h2>
  );
};
