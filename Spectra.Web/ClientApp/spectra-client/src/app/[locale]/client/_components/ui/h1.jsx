import { cn } from '@/lib/utils';

export const H1 = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        'text-black text-base mdl:text-2xl font-bold flex items-center gap-x-2 mb-3 mdl:mb-5',
        props.className
      )}
    >
      {children}
    </h1>
  );
};
