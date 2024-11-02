import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Button from '@/components/button';

export const AddButton = ({ children, ...props }) => {
  return (
    <Button variant='blueLight' {...props}>
      <PlusInsideCircleIcon />
      {children}
    </Button>
  );
};
