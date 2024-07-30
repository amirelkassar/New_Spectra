import React from 'react';
import { StepsProgress } from './_components/steps-progress';
import { OurServices } from './_components/our-services';
import { Packages } from './_components/packages';
import { OurTeam } from './_components/our-team';
import Container from '../../_components/container';
import { Heading } from '../../_components/heading';
import HelloHandIcon from '@/assets/icons/hello-hand';

const MainPage = () => {
  return (
    <Container className='bg-white rounded-[10px] h-full p-1 mdl:p-4 xl:p-6'>
      <Heading
        label={'مرحبا احمد'}
        icon={<HelloHandIcon className='mdl:size-7 size-5' />}
      />
      <StepsProgress />
      <OurServices />
      <Packages />
      <OurTeam />
    </Container>
  );
};

export default MainPage;
