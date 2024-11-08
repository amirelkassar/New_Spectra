import { storiesData } from '@/lib/demoData';
import {
  HomeIntro,
  Services,
  WhatWeCure,
  AboutUs,
  OurMedicalTeam,
  Testimonials,
  Statistics,
  FAQ,
  Sponsors,
  Steps,
  LastNews,
  Licenses,
  SuccessStories,
} from '@/guest/_components/sections';

export default function Homepage() {
  return (
    <main>
      <HomeIntro />
      <Services />
      <WhatWeCure />
      <AboutUs />
      <OurMedicalTeam />
      <Testimonials />
      <Statistics />
      <FAQ />
      <Sponsors />
      <Steps />
      <LastNews />
      <Licenses />
      <SuccessStories data={storiesData.slice(0, 3)} />
    </main>
  );
}
