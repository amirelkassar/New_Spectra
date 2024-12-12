import {
  H1,
  Container,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { TeamTable } from './_components/team-table';
import { TableActions } from './_components/table-actions';

const TeamPage = () => {
  return (
    <Container className='lg:bg-white'>
      <H1 className='mb-5 mt-3 mdl:mt-0'>فريقنا الطبي</H1>

      <TableActions />

      <TeamTable />
    </Container>
  );
};

export default TeamPage;
