import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Button from '@/components/button';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

export const AddAppointment = () => {
  return (
    <Link href={ROUTES.CLIENT.TEAM}>
      <Button variant='blueLight'>
        <PlusInsideCircleIcon />
        <span>حجز ميعاد</span>
      </Button>
    </Link>
  );
};
