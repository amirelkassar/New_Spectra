import { useTranslations } from 'next-intl';

import { ClientsSchedule } from './_components/clients-schedule';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import Card from '@/components/card';
import ROUTES from '@/routes';

const ClientsScheduleSlot = () => {
  return (
    <Card className='h-full flex-1 space-y-5'>
      <Header />

      <ClientsSchedule />
    </Card>
  );
};

export default ClientsScheduleSlot;

const Header = () => {
  const t = useTranslations('appointments_obj');

  return (
    <div className='flex items-center justify-between gap-3'>
      <SectionTitle>{t('clients_schedule')}</SectionTitle>

      <ShowMoreButton
        href={ROUTES.DOCTOR.APPOINTMENTS.CLIENTS_SCHEDULE}
      >
        {t('all_appointments')}
      </ShowMoreButton>
    </div>
  );
};
