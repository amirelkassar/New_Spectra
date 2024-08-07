import { AboutUs } from './_components/about-us';
import { Hero } from './_components/hero';
import { OurMedicalTeam } from './_components/our-medical-team';
import { Services } from './_components/services';
import { WhatWeCure } from './_components/what-we-cure';

export default function page() {
  return (
    <main>
      <Hero />
      <WhatWeCure />
      <Services />
      <AboutUs />
      <OurMedicalTeam />
    </main>
  );
}
