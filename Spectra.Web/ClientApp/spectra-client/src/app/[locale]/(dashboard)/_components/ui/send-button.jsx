import ContractsWhiteIcon from '@/assets/icons/contractsWhite';
import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const SendButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant='secondary'
      className={cn('', props.className)}
    >
      <ContractsWhiteIcon className='mdl:size-6 size-5 text-white' />
      {children}
    </Button>
  );
};
