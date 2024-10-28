import { cn } from '@/lib/utils';

export const H1 = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        'text-black text-base lg:text-2xl font-regular lg:font-bold flex items-center gap-x-2 pb-3 lg:pb-5',
        props.className
      )}
    >
      {children}
    </h1>
  );
};
