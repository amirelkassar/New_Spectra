import React from 'react';
import { StepsProgress } from './_components/steps-progress';
import { OurServices } from './_components/our-services';
import { Packages } from './_components/packages';
import { OurTeam } from './_components/our-team';

const MainPage = () => {
  return (
    <div className='bg-white rounded-[10px] mx-auto max-w-[1100px] h-full p-1 md:p-3 xl:p-5'>
      <StepsProgress />
      <OurServices />
      <Packages />
      <OurTeam />
    </div>
  );
};

export default MainPage;
