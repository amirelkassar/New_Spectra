import { AboutUs } from './_components/about-us';
import { Hero } from './_components/hero';
import { OurMedicalTeam } from './_components/our-medical-team';
import { Services } from './_components/services';
import { WhatWeCure } from './_components/what-we-cure';
import { Testimonials } from './_components/testimonials';
import { Statistics } from './_components/statistics';
import { FAQ } from './_components/FAQ';
import { Sponsors } from './_components/sponsors';
import { Steps } from './_components/steps';
import { LastNews } from './_components/last-news';
import { Licenses } from './_components/licenses';
import { SuccessStories } from './_components/success-stories';
import { storiesData } from '@/lib/demoData';

export default function Homepage() {
  return (
    <main>
      <Hero />
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
