import { Container } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { TEAM } from '@/data';
import {
  Advertisements,
  OurServices,
  OurTeam,
  StepsProgress,
  SuggestedDoctor,
  WelcomeText,
} from './_components/sections';

const MainPage = () => {
  const alert = true;
  return (
    <Container className='lg:bg-white'>
      <WelcomeText name='بروفاوند' />
      {alert && <SuggestedDoctor />}
      <StepsProgress />
      <OurServices />
      <Advertisements />
      <OurTeam data={TEAM.slice(0, 8)} />
    </Container>
  );
};

export default MainPage;
