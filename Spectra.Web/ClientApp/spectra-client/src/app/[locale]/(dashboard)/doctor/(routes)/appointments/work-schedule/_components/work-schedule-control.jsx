'use client';

import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { useWorkScheduleControl } from '../../_hooks/use-work-schedule-control';
import { WorkScheduleForm } from '@/dashboard/_components/appointments';
import { WorkScheduleList } from './work-schedule-list';
import Card from '@/components/card';

export const WorkScheduleControl = () => {
  return (
    <div className='h-full flex flex-col gap-5'>
      <WorkScheduleControlForm />

      <Card className='flex-1'>
        <div className='flex flex-col justify-center items-center lgl:items-stretch lgl:flex-row lgl:flex-wrap gap-4 *:shrink-0'>
          <WorkScheduleList ignoreNoData />
        </div>
      </Card>
    </div>
  );
};

const WorkScheduleControlForm = () => {
  const t = useTranslations('appointments_obj');

  const { form } = useWorkScheduleControl();

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4'>
        <BackButton />
        <H1>
          {form.action === 'add'
            ? t('add_appointment')
            : t('edit_appointment')}
        </H1>
      </div>
      <WorkScheduleForm form={form} />
    </Card>
  );
};
