import ThreeDotsIcon from '@/assets/icons/three-dots';
import { BackButton, H1 } from '@/client/_components/ui';
import Button from '@/components/button';
import { AddButton } from '@/components/buttons/add-button';

export const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-5'>
        <BackButton />
        <H1>المواعيد</H1>
        <AddButton>اضافة ميعاد</AddButton>
      </div>

      <Button variant='ghost'>
        <ThreeDotsIcon />
      </Button>
    </div>
  );
};
