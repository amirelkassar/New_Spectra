import {
  Container,
  H1,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { OrgClients, OrgInfo } from '../_components/org';

const DATA = {
  fullname: 'منظمة الامل',
  email: 'alamal@gmail.com',
  avatar: '',
  id: 1235346313864,
  phone: '01000000000',
  country: 'مصر',
  city: 'الاسكندرية',
  specialization: 'هيئة تطوعية',
  type: 'خيرية',
};

const OrgPage = () => {
  return (
    <Container>
      <H1 className='mt-5 mdl:mt-0'>ملفي</H1>

      <OrgInfo initialData={DATA} />

      <OrgClients />
    </Container>
  );
};

export default OrgPage;
