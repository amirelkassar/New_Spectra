import {
  WhatWeCure,
  OurMedicalTeam,
  OurValues,
} from '@/guest/_components/sections';
import { WhyUs } from '../../_components/sections/why-us';
import { OUR_VALUES, WHAT_WE_CURE, WHY_US } from '@/data';

const TreatmentPage = () => {
  return (
    <main>
      <div
        style={{
          clipPath:
            'polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%)',
        }}
        className='bg-blueLight py-14'
      >
        <WhatWeCure data={WHAT_WE_CURE} />
      </div>
      <OurMedicalTeam />
      <OurValues data={OUR_VALUES} />
      <WhyUs data={WHY_US} />
    </main>
  );
};

export default TreatmentPage;
