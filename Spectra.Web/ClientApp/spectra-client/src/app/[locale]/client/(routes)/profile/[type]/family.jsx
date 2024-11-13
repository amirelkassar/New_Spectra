import { Container } from '@/client/_components/ui';
import {
  FamilyHeading,
  FamilyInfo,
  NoChilds,
} from '../_components/family';
import { ChildPortfolio } from '../_components/child';
import { ChildSelect } from '@/client/_components/child';
import { CHILDS } from '@/data';

const DATA = {
  fullname: 'عبدالله الشيخ',
  email: 'mohamed@gmail.com',
  avatar: '',
  id: 12345678902,
  country: 'المملكة العربية السعودية',
  city: 'الرياض',
  profession: 'مدير هيئة حكومية',
  childs: [],
};

const getChilds = async () => true;

const FamilyPage = async () => {
  const hasChild = await getChilds();

  return (
    <Container>
      <FamilyHeading hasChild={hasChild} />

      <FamilyInfo initialData={DATA} />

      {!hasChild && <NoChilds />}

      {hasChild && <ChildSelect data={CHILDS} />}

      {hasChild && <ChildPortfolio />}
    </Container>
  );
};

export default FamilyPage;
