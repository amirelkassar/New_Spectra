import React from 'react';
import { StepsProgress } from './_components/steps-progress';
import { OurServices } from './_components/our-services';
import { Packages } from './_components/packages';
import { OurTeam } from './_components/our-team';
import Container from '../_components/container';
import { Heading } from '../_components/heading';
import HelloHandIcon from '@/assets/icons/hello-hand';
import { SuggestedDoctor } from './_components/suggested-doctor';

const MainPage = () => {
  const isDoctorSuggested = true;
  return (
    <Container className='lg:bg-white'>
      <Heading
        label={'مرحبا احمد'}
        icon={
          <HelloHandIcon className='mdl:size-7 size-5' />
        }
      />

      {isDoctorSuggested && <SuggestedDoctor />}

      <StepsProgress />
      <OurServices />
      <Packages />
      <OurTeam />
    </Container>
  );
};

export default MainPage;
