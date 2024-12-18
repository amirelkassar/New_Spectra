import EditIcon from '@/assets/icons/edit';
import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const EditButton = ({ children, ...props }) => {
  return (
    <Button {...props} className={cn('', props.className)}>
      <EditIcon className='mdl:size-6 size-5' />
      {children}
    </Button>
  );
};
