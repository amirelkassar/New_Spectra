'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { AddButton } from '@/components/buttons/add-button';
import { BackButton } from '@/components/buttons/back-button';
import ROUTES from '@/routes';
import { useWorkScheduleStore } from '../../_hooks/use-work-schedule-store';

export const Header = () => {
  const t = useTranslations('appointments_obj');

  const router = useRouter();

  const { reset } = useWorkScheduleStore();

  return (
    <div className='flex items-center gap-4 mdl:gap-7'>
      <div className='flex items-center gap-4'>
        <BackButton />
        <H1>{t('work_schedule')}</H1>
      </div>

      <AddButton
        onClick={() => {
          reset();
          router.push(
            ROUTES.DOCTOR.APPOINTMENTS.WORK_SCHEDULE.CONTROL
          );
        }}
      >
        {t('add_appointment')}
      </AddButton>
    </div>
  );
};
