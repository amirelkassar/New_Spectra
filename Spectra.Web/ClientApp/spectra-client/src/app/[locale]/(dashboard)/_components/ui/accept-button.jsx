import AcceptIcon from '@/assets/icons/accept';
import Button from '@/components/button';

export const AcceptButton = ({ children, ...props }) => {
  return (
    <Button variant='secondary' {...props}>
      <AcceptIcon className='size-5 mdl:size-6' />
      {children}
    </Button>
  );
};
