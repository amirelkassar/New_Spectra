'use client';

import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { useAddWorkSchedule } from '../../_hooks/use-add-work-schedule';
import { WorkScheduleForm } from '@/dashboard/_components/appointments';
import { WorkScheduleList } from './work-schedule-list';
import Card from '@/components/card';

export const AddWorkSchedule = () => {
  const t = useTranslations('appointments_obj');

  return (
    <div className='h-full flex flex-col gap-5'>
      <Card className='space-y-10'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>{t('add_appointment')}</H1>
        </div>

        <AddWorkScheduleForm />
      </Card>

      <Card className='flex-1'>
        <div className='h-full flex flex-col xl:flex-row xl:flex-wrap gap-6 *:shrink-0'>
          <WorkScheduleList ignoreNoData />
        </div>
      </Card>
    </div>
  );
};

const AddWorkScheduleForm = () => {
  const { form } = useAddWorkSchedule();

  return <WorkScheduleForm form={form} />;
};
