import { cn } from '@/lib/utils';

export const SectionTitle = ({ children, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        'text-base mdl:text-xl font-bold',
        props?.className
      )}
    >
      {children}
    </h2>
  );
};
