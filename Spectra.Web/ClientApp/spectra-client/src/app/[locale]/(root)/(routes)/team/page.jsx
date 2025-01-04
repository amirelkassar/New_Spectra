import { MOBILE_APP, WHY_US } from '@/data';
import {
  MobileApp,
  SpectraLicenses,
  Team,
  TeamIntro,
  WhyUs,
} from '@/guest/_components/sections';

const TeamPage = () => {
  return (
    <main>
      <TeamIntro />
      <Team />
      <Wrapper>
        <WhyUs data={WHY_US} />
      </Wrapper>
      <MobileApp data={MOBILE_APP} />
      <SpectraLicenses />
    </main>
  );
};

export default TeamPage;

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        clipPath:
          'polygon(50% 5%, 100% 10%, 100% 100%, 0 100%, 0 10%)',
      }}
      className='bg-blueLighter overflow-hidden pt-10 mb-10'
    >
      {children}
    </div>
  );
};
