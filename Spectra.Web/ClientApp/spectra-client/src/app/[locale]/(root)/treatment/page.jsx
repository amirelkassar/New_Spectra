import { WhatWeCure } from '../(home)/_components/what-we-cure';
import { OurMedicalTeam } from '../(home)/_components/our-medical-team';
import { OurValues } from '../about/_components/our-values';
import { WhyUs } from '../team/_components/why-us';
const TreatmentPage = () => {
  return (
    <main>
      <div
        style={{
          clipPath:
            'polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%)',
        }}
        className='bg-blueLight'
      >
        <WhatWeCure className='pt-20 mdl:pt-32' />
      </div>
      <OurMedicalTeam />
      <OurValues />
      <WhyUs className='bg-white' />
    </main>
  );
};

export default TreatmentPage;
