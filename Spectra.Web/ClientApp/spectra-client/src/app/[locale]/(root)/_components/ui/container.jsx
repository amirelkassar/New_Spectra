import { cn } from '@/lib/utils';

export const Container = ({ children, ...props }) => {
  return (
    <div
      className={cn(
        'px-5 xl:px-14 max-w-[1600px] mx-auto',
        props?.className
      )}
    >
      {children}
    </div>
  );
};
