import { cn } from '@/lib/utils';

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        'max-w-6xl mx-auto relative p-1 mdl:p-4 xl:p-6 bg-white lg:bg-transparent',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
