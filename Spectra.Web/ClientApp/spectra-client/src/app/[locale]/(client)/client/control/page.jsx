import React from 'react';
import Container from '../../_components/container';
import { MedicalCards } from './_components/medical-card';
import { Heading } from '../../_components/heading';
import { PerformanceChart } from './_components/performance-chart';
import { ReminderMessages } from './_components/reminder-messages';
import { ActivityCards } from './_components/activity-cards';
import ChildPopover from '../../_components/child-popover';
import { childPopupData } from '@/lib/demoData';

const ControlPage = () => {
  return (
    <Container className='space-y-5'>
      <Heading label='ملخص النشاطات' />
      <ChildPopover data={childPopupData} />
      <MedicalCards />
      <PerformanceChart />
      <ReminderMessages />
      <ActivityCards />
    </Container>
  );
};

export default ControlPage;
