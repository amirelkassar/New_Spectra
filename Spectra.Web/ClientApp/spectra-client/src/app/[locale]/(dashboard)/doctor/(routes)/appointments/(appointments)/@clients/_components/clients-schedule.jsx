'use client';

import { useTranslations } from 'next-intl';

import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import Card from '@/components/card';

export const ClientsSchedule = () => {
  const t = useTranslations();

  return (
    <Card className='h-full flex-1'>
      <SectionTitle>{t('clients_schedule')}</SectionTitle>
    </Card>
  );
};
