import { redirect } from '@/navigation';
import { AddChild } from './_components/add-child';
import { ProfileInfo } from './_components/profile-info';
import {
  Container,
  H1,
  NoDataYet,
} from '@/client/_components/ui';

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

const FamilyProfile = async () => {
  const hasChild = await getChilds();
  if (hasChild) redirect('/client/profile/family/child/1');
  return (
    <Container>
      <H1 id='family-profile' className='mb-5'>
        ملفي
      </H1>

      <ProfileInfo initialData={DATA} />

      <NoDataYet
        title='لم يتم إضافة طفل بعد'
        descriptions={[
          'يُرجى إضافة بيانات الطفل لتتمكن من الوصول إلى جميع الخدمات والمعلومات المتاحة على المنصة، مثل متابعة التقييمات، والتقارير، والخطط العلاجية.',
        ]}
      >
        <AddChild className='bg-greenMain text-white *:text-white hover:bg-greenMain/90 !px-16' />
      </NoDataYet>
    </Container>
  );
};

export default FamilyProfile;
