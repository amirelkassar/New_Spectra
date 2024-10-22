import Container from '../../_components/container';
import { ClientsTable } from './_components/clients-table';
import { OrgProfile } from './_components/org-profile';

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

const OrgProfilePage = () => {
  return (
    <Container className='space-y-5'>
      <OrgProfile initialData={DATA} />

      <ClientsTable />
    </Container>
  );
};

export default OrgProfilePage;
