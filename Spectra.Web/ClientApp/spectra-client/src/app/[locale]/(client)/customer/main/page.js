import React from 'react';
import { StepsProgress } from './_components/steps-progress';
import { OurServices } from './_components/our-services';

const MainPage = () => {
  return (
    <div className='bg-white rounded-lg h-full p-1 md:p-3 xl:p-5'>
      <StepsProgress />
      <OurServices />
    </div>
  );
};

export default MainPage;
