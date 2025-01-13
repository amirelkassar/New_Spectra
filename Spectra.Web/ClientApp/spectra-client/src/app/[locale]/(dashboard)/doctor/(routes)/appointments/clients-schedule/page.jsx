import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { ClientsScheduleTable } from './_components/clients-schedule-table';
import Card from '@/components/card';
import { BackButton } from '@/components/buttons/back-button';

const ClientsSchedulePage = () => {
  return (
    <Card className='h-full space-y-10'>
      <Header />

      <ClientsScheduleTable />
    </Card>
  );
};

export default ClientsSchedulePage;

const Header = () => {
  const t = useTranslations('appointments_obj');

  return (
    <div className='flex items-center gap-4'>
      <BackButton />

      <H1>{t('clients_schedule')}</H1>
    </div>
  );
};
