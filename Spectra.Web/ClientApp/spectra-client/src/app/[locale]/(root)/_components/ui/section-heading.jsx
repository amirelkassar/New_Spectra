import { cn } from '@/lib/utils';

export const SectionHeading = ({ children, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        'text-base mdl:text-2xl font-bold',
        props?.className
      )}
    >
      {children}
    </h2>
  );
};
