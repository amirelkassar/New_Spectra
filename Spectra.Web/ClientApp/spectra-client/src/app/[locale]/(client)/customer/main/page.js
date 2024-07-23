import React from 'react';
import { StepsProgress } from './_components/steps-progress';
import { OurServices } from './_components/our-services';
import { Packages } from './_components/packages';
import { OurTeam } from './_components/our-team';
import Container from '../../_components/container';

const MainPage = () => {
  return (
    <Container>
      <div className='bg-white rounded-[10px] h-full p-1 mdl:p-4 xl:p-6'>
        <StepsProgress />
        <OurServices />
        <Packages />
        <OurTeam />
      </div>
    </Container>
  );
};

export default MainPage;
