import { cn } from '@/lib/utils';

export const Title = ({ children, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        'text-base lg:text-xl font-bold',
        props?.className
      )}
    >
      {children}
    </h3>
  );
};
