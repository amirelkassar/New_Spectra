import { CHILDS } from '@/data';
import { Family } from './family';

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
  return <Family parentData={DATA} childData={CHILDS} />;
};

export default FamilyProfilePage;
