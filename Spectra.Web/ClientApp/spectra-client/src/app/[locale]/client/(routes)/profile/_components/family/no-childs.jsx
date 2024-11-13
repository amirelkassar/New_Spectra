import { NoDataYet } from '@/client/_components/ui';
import { AddChild } from './add-child';

export const NoChilds = () => {
  return (
    <NoDataYet
      title='لم يتم إضافة طفل بعد'
      descriptions={[
        'يُرجى إضافة بيانات الطفل لتتمكن من الوصول إلى جميع الخدمات والمعلومات المتاحة على المنصة، مثل متابعة التقييمات، والتقارير، والخطط العلاجية.',
      ]}
    >
      <AddChild className='bg-greenMain text-white *:text-white hover:bg-greenMain/90 !px-16' />
    </NoDataYet>
  );
};
