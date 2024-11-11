import { cn } from '@/lib/utils';

export const Section = ({ children, ...props }) => {
  return (
    <section
      {...props}
      className={cn('py-4 relative', props?.className)}
    >
      {children}
    </section>
  );
};
