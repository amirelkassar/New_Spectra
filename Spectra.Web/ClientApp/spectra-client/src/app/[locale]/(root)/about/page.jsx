import { AboutUs } from '../(home)/_components/about-us';
import { OurValues } from './_components/our-values';
import { Licenses } from '../(home)/_components/licenses';
import { Sponsors } from '../(home)/_components/sponsors';
import { Testimonials } from '../(home)/_components/testimonials';
import { Statistics } from '../(home)/_components/statistics';

const AboutPage = () => {
  return (
    <main>
      <AboutUs
        className='bg-white mt-20 mdl:mt-28'
        heading='رعاية مبكرة, لغد مشرق'
      />
      <OurValues />
      <Licenses />
      <Sponsors />
      <Testimonials />
      <Statistics />
    </main>
  );
};

export default AboutPage;
