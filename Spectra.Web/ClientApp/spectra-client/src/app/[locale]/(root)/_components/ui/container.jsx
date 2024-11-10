import { cn } from '@/lib/utils';

export const Container = ({ children, ...props }) => {
  return (
    <section
      {...props}
      className={cn(
        'py-10 mdl:py-20 px-5 lg:px-10 xl:px-14 max-w-[1600px] mx-auto relative',
        props?.className
      )}
    >
      {children}
    </section>
  );
};
