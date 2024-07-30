import React from 'react';
import Container from '../../_components/container';
import { MedicalCards } from './_components/medical-card';
import { Heading } from '../../_components/heading';
import { Chart } from './_components/chart';
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
      <div className='flex flex-col lg:flex-row gap-5 *:flex-1 space-y-5 lg:space-y-0'>
        <Chart />
        <ReminderMessages />
      </div>
      <ActivityCards />
    </Container>
  );
};

export default ControlPage;
