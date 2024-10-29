import React from 'react';
import { StepsProgress } from './_components/steps-progress';
import { OurServices } from './_components/our-services';
import { Packages } from './_components/packages';
import { OurTeam } from './_components/our-team';
import HelloHandIcon from '@/assets/icons/hello-hand';
import { SuggestedDoctor } from './_components/suggested-doctor';
import { H1, Container } from '@/client/_components/ui';

const MainPage = () => {
  const isDoctorSuggested = true;
  return (
    <Container className='lg:bg-white'>
      <H1>
        مرحبا احمد
        <HelloHandIcon className='mdl:size-7 size-5' />
      </H1>

      {isDoctorSuggested && <SuggestedDoctor />}

      <StepsProgress />
      <OurServices />
      <Packages />
      <OurTeam />
    </Container>
  );
};

export default MainPage;
