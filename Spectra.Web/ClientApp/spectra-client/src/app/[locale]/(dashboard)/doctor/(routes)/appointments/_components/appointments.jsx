'use client';

import { useTranslations } from 'next-intl';

import { TodayWorkSchedule } from './today-work-schedule';
import { AppointmentsSummary } from '@/dashboard/_components/appointments';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import Card from '@/components/card';

export const Appointments = () => {
  return (
    <div className='flex-1 flex flex-col gap-5'>
      <AppointmentsSummary />
      <TodayWorkSchedule />
      <ClientsAppointments />
    </div>
  );
};

const ClientsAppointments = () => {
  const t = useTranslations();

  return (
    <Card className='h-full flex-1'>
      <SectionTitle>{t('clients_schedule')}</SectionTitle>
    </Card>
  );
};
