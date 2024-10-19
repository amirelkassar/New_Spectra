import { AboutUs } from '../(home)/_components/about-us';
import { OurValues } from './_components/our-values';
import { Licenses } from '../(home)/_components/licenses';
import { Sponsors } from '../(home)/_components/sponsors';
import { Testimonials } from '../(home)/_components/testimonials';
import { Statistics } from '../(home)/_components/statistics';
import { WhatMakesUsSpecial } from './_components/what-makes-us-special';
import { WeMakeSmile } from './_components/we-make-smile';

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
