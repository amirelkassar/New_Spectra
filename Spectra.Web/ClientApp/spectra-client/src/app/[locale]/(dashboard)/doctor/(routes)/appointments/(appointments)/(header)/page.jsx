import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import ROUTES from '@/routes';
import CalendarWithBg from '@/assets/icons/calendar-with-bg';

const AppointmentsPage = () => {
  const t = useTranslations();

  return (
    <div className='flex items-center justify-between gap-5'>
      <H1>{t('appointments')}</H1>

      <Link href={ROUTES.DOCTOR.APPOINTMENTS.CALENDAR}>
        <CalendarWithBg className='size-10 mdl:size-14' />
      </Link>
    </div>
  );
};

export default AppointmentsPage;
