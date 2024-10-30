import { H1, Container } from '@/client/_components/ui';
import { TeamTable } from './_components/team-table';

const TeamPage = () => {
  return (
    <Container className='lg:bg-white'>
      <H1>فريقنا الطبي</H1>

      <TeamTable />
    </Container>
  );
};

export default TeamPage;
