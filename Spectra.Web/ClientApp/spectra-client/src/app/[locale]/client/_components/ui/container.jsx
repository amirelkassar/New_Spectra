import { cn } from '@/lib/utils';

const Container = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden relative p-1 mdl:p-5 lg:bg-transparent bg-white',
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
