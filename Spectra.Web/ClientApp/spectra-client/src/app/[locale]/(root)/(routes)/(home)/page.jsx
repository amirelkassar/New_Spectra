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
import {
  WHAT_WE_CURE,
  ABOUT_US,
  TESTIMONIALS,
  STATISTICS,
  FAQDATA,
  SPONSORS,
  STEPS,
  LICENSES,
  STORIES,
  ARTICLES,
} from '@/data';

export default function Homepage() {
  const latestArticles = [...ARTICLES].reverse().slice(0, 3);

  return (
    <main>
      <HomeIntro />
      <Services />
      <WhatWeCure data={WHAT_WE_CURE} showOther />
      <Wrapper>
        <AboutUs data={ABOUT_US} />
      </Wrapper>
      <OurMedicalTeam />
      <div className='bg-blueLighter pb-24'>
        <Testimonials data={TESTIMONIALS} />
      </div>
      <div className='-mt-40'>
        <Statistics data={STATISTICS} />
      </div>
      <Steps data={STEPS} />
      <FAQ data={FAQDATA} />
      <Sponsors data={SPONSORS} />
      <LastNews data={latestArticles} />
      <Licenses data={LICENSES} />
      <SuccessStories data={STORIES.slice(0, 3)} />
    </main>
  );
}

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        clipPath:
          'polygon(50% 5%, 100% 10%, 100% 100%, 0 100%, 0 10%)',
      }}
      className='bg-blueLighter overflow-hidden pt-10'
    >
      {children}
    </div>
  );
};
