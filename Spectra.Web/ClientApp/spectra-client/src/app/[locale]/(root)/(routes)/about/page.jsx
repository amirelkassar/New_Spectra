import {
  ABOUT_US,
  LICENSES,
  OUR_VALUES,
  SPONSORS,
  STATISTICS,
  TESTIMONIALS,
  WE_MAKE_SMILE,
  WHAT_MAKES_US_SPECIAL,
} from '@/data';
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
import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('guest_obj');

  return (
    <main>
      <div className='mt-20'>
        <AboutUs
          data={ABOUT_US}
          title={t('early_care_for_a_bright_tomorrow')}
        />
      </div>
      <WeMakeSmile data={WE_MAKE_SMILE} />
      <OurValues data={OUR_VALUES} />
      <WhatMakesUsSpecial data={WHAT_MAKES_US_SPECIAL} />
      <Licenses data={LICENSES} />
      <Sponsors data={SPONSORS} />
      <div className='bg-blueLighter pb-24'>
        <Testimonials data={TESTIMONIALS} />
      </div>
      <div className='-mt-40'>
        <Statistics data={STATISTICS} />
      </div>
    </main>
  );
};

export default AboutPage;
