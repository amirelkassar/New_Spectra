import {
  BackButton,
  Container,
} from '@/client/_components/ui';

import { ChildSelect } from '@/client/_components/child';
import { CHILDS } from '@/data';
import {
  FamilyInfo,
  NoChilds,
} from '../../../_components/family';
import { ChildPortfolio } from '../../../_components/child';

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

const OrgFamilyPage = async () => {
  const hasChild = await getChilds();

  return (
    <Container>
      <BackButton />

      <FamilyInfo initialData={DATA} />

      {!hasChild && <NoChilds />}

      {hasChild && <ChildSelect data={CHILDS} />}

      {hasChild && <ChildPortfolio />}
    </Container>
  );
};

export default OrgFamilyPage;
