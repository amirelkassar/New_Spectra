import { Intro } from './_components/intro';
import { Team } from './_components/team';
import { WhyUs } from './_components/why-us';
import { MobileApp } from './_components/mobile-app';
import { Licenses } from './_components/licenses';

const TeamPage = () => {
  return (
    <main>
      <Intro />
      <Team />
      <WhyUs />
      <MobileApp />
      <Licenses />
    </main>
  );
};

export default TeamPage;
