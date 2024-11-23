import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '../button';
import { cn } from '@/lib/utils';

export const BackButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(
        'text-sm mdl:text-base py-2 gap-3 font-bold',
        props.className
      )}
    >
      {children}
      <ArrowLeft className='ltr:rotate-180' />
    </Button>
  );
};
