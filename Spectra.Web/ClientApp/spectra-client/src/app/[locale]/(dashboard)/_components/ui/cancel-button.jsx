import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const CancelButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(
        'border-red capitalize hover:border-red text-red hover:ring-red',
        props?.className
      )}
    >
      {children}
    </Button>
  );
};
