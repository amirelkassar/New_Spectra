import { cn } from '@/lib/utils';

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        'max-w-full w-full mx-auto relative p-1 mdl:p-4 xl:p-6 lg:bg-transparent bg-white h-full',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
