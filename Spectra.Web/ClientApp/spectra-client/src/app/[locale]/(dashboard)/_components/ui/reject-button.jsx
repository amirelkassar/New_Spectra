import CloseCircle from '@/assets/icons/close-circle';
import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const RejectButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(
        'border-red hover:border-red text-red hover:ring-red',
        props?.className
      )}
    >
      <CloseCircle className='size-5 mdl:size-6 text-red' />
      {children}
    </Button>
  );
};
