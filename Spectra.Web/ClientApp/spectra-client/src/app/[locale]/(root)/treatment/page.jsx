import { WhatWeCure } from '../(home)/_components/what-we-cure';
import { OurMedicalTeam } from '../(home)/_components/our-medical-team';
import { OurValues } from '../about/_components/our-values';
import { WhyUs } from '../team/_components/why-us';
const TreatmentPage = () => {
  return (
    <main>
      <WhatWeCure className='mt-20 mdl:mt-28' />
      <OurMedicalTeam />
      <OurValues />
      <WhyUs />
    </main>
  );
};

export default TreatmentPage;
