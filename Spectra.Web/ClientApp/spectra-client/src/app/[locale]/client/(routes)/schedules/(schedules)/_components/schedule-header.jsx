import { H1, Section } from '@/client/_components/ui';
import { Link } from '@/i18n/routing';
import { AddAppointment } from './add-appointment';
import ROUTES from '@/routes';
import CalendarWithBg from '@/assets/icons/calendar-with-bg';

export const ScheduleHeader = () => {
  return (
    <Section
      id='schedules'
      className='flex gap-5 justify-between mdl:pt-0'
    >
      <div className='flex items-center gap-5'>
        <H1 id='schedules'>المواعيد</H1>
        <AddAppointment />
      </div>
      <Link href={`${ROUTES.CLIENT.SCHEDULES}/calendar`}>
        <CalendarWithBg className='size-10 mdl:size-14' />
      </Link>
    </Section>
  );
};
