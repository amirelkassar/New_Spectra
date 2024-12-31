import { cn } from '@/lib/utils';

export const ListTitle = ({ children, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        'text-sm mdl:text-xl font-bold inline text-black',
        props?.className
      )}
    >
      {children}
    </h3>
  );
};
