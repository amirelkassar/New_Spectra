import { ClientsTable } from './_components/clients-table';
import { ProfileInfo } from './_components/profile-info';
import { Container } from '@/client/_components/ui';

const DATA = {
  fullname: 'منظمة الامل',
  email: 'alamal@gmail.com',
  avatar: '',
  id: 1235346313864,
  country: 'مصر',
  city: 'الاسكندرية',
  specialization: 'هيئة تطوعية',
  type: 'هيئة حكومية',
  clientsNo: '150',
  sessionsNo: '300',
  reportsNo: '500',
  followingsNo: '100',
};

const OrgProfile = () => {
  return (
    <Container className='space-y-5'>
      <ProfileInfo initialData={DATA} />

      <ClientsTable />
    </Container>
  );
};

export default OrgProfile;
