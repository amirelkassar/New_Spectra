import { BackButton } from '@/components/buttons/back-button';
import { CellActions } from '../_components/cell-actions';
import { ViewService } from './_components/view-service';

function ViewServicePage({ params }) {
  const serviceId = params?.servicesID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>تفاصيل الخدمة</h2>
        </div>
        <CellActions />
      </div>

      <ViewService id={serviceId} />
    </div>
  );
}

export default ViewServicePage;
