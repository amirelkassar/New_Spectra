import { cn } from '@/lib/utils';

export const Container = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'my-5 md:m-0 md:p-5 lg:p-3 md:h-full flex flex-col lg:flex-row gap-5',
        props.className
      )}
    >
      {children}
    </div>
  );
};
