import { cn } from '@/lib/utils';

export const H1 = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        'text-2xl mdl:text-4xl font-bold text-black',
        props?.className
      )}
    >
      {children}
    </h1>
  );
};
