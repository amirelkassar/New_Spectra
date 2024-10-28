import React from 'react';
import Container from '../../_components/ui/container';
import { MedicalCards } from './_components/medical-card.jsx';
import { Heading } from '../../_components/ui/heading';
import { PerformanceChart } from './_components/performance-chart';
import { ReminderMessages } from './_components/reminder-messages';
import { Activities } from '@/client/_components/services';
import { CHILDSDATA } from '@/lib/demoData';
import { Wallet } from './_components/wallet';
import { ChildSelect } from '@/client/_components/child';

const ControlPage = () => {
  return (
    <Container className='space-y-5'>
      <Heading label='ملخص النشاطات' />
      <ChildSelect data={CHILDSDATA} />
      <MedicalCards />
      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
        <PerformanceChart />
        <ReminderMessages />
      </div>
      <Activities title='طلب الخدمة' />
      <Wallet />
    </Container>
  );
};

export default ControlPage;
