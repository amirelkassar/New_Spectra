import React from 'react';
import Container from '../../_components/container';
import { MedicalCards } from './_components/medical-card';
import { Heading } from '../../_components/heading';
import { ProgressCard } from './_components/progress-card';
import { ReminderMessages } from './_components/reminder-messages';
import { ActivityCards } from './_components/activity-cards';

const ControlPage = () => {
  return (
    <Container className='p-1 mdl:p-4 xl:p-6 bg-white mdl:bg-transparent'>
      <Heading label='ملخص النشاطات' />
      <MedicalCards />
      <ProgressCard />
      <ReminderMessages />
      <ActivityCards />
    </Container>
  );
};

export default ControlPage;
