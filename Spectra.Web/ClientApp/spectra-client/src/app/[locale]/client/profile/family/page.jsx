import Container from '../../_components/container';
import { CHILDSDATA } from '@/lib/demoData';
import { FamProfile } from './_components/fam-profile';
import { ChildSelect } from '../../_components/child-select';
import { ChildPortfolio } from './_components/child-portfolio';

const DATA = {
  fullname: 'محمد محمد علي',
  email: 'mohamed@gmail.com',
  avatar: '',
  id: 12345678902,
  country: 'المملكة العربية السعودية',
  city: 'الرياض',
  profession: 'مدير هيئة حكومية',
};

const FamilyProfilePage = () => {
  return (
    <Container className='space-y-5'>
      <FamProfile initialData={DATA} />

      <ChildSelect data={CHILDSDATA} />

      <ChildPortfolio />
    </Container>
  );
};

export default FamilyProfilePage;
