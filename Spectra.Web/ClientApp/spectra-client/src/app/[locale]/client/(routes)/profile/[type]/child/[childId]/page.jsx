import { Container, H1 } from '@/client/_components/ui';
import { AddChild } from '../../../_family/_components/add-child';
import { ChildPortfolio } from '../../../_family/_components/child-portfolio';
import { ProfileInfo } from '../../../_family/_components/profile-info';
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

const ChildPage = ({ params }) => {
  const type = params?.type;
  const childId = params?.childId;

  return (
    <Container>
      <div className='flex items-center gap-5 mt-5 lg:mt-0 mb-5'>
        <H1 id='family-profile'>ملفي</H1>

        <AddChild />
      </div>

      {type === 'family' && (
        <ProfileInfo initialData={DATA} />
      )}

      <ChildSelect data={CHILDS} />

      <ChildPortfolio />
    </Container>
  );
};

export default ChildPage;
