import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { H1 } from '@/dashboard/_components/ui/h1';
import { AddButton } from '@/components/buttons/add-button';
import { BackButton } from '@/components/buttons/back-button';
import { WorkScheduleList } from './_components/work-schedule-list';
import { prefetchScheduleTimeList } from '@/hooks/queries/employee/schedule-time';
import Card from '@/components/card';
import ROUTES from '@/routes';

const WorkSchedulePage = async () => {
  const queryClient = await prefetchScheduleTimeList();

  return (
    <Card className='h-full'>
      <Header />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <WorkScheduleList />
      </HydrationBoundary>
    </Card>
  );
};

export default WorkSchedulePage;

const Header = () => {
  const t = useTranslations('appointments_obj');

  return (
    <div className='flex items-center gap-4 mdl:gap-7'>
      <div className='flex items-center gap-4'>
        <BackButton />
        <H1>{t('work_schedule')}</H1>
      </div>

      <Link href={ROUTES.DOCTOR.APPOINTMENTS.WORK_SCHEDULE.ADD}>
        <AddButton>{t('add_appointment')}</AddButton>
      </Link>
    </div>
  );
};
