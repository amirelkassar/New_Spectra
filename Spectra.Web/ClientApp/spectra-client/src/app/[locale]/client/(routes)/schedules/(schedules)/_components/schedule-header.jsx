import { H1 } from '@/client/_components/ui';
import { Link } from '@/navigation';
import { AddAppointment } from './add-appointment';
import ROUTES from '@/routes';
import CalendarWithBg from '@/assets/icons/calendar-with-bg';

export const ScheduleHeader = () => {
  return (
    <div className='flex gap-5 justify-between'>
      <div className='flex gap-5'>
        <H1>المواعيد</H1>
        <AddAppointment />
      </div>
      <Link href={`${ROUTES.CLIENT.SCHEDULES}/calendar`}>
        <CalendarWithBg />
      </Link>
    </div>
  );
};
