import {
  AboutUs,
  WeMakeSmile,
  OurValues,
  WhatMakesUsSpecial,
  Licenses,
  Sponsors,
  Testimonials,
  Statistics,
} from '@/guest/_components/sections';

const AboutPage = () => {
  return (
    <main>
      <AboutUs
        className='bg-white mt-20 mdl:mt-28'
        heading='رعاية مبكرة, لغد مشرق'
      />
      <WeMakeSmile />
      <OurValues />
      <WhatMakesUsSpecial />
      <Licenses />
      <Sponsors />
      <Testimonials />
      <Statistics />
    </main>
  );
};

export default AboutPage;
