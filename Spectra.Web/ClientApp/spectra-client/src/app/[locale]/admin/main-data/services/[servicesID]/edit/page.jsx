import { BackButton } from '@/components/buttons/back-button';
import { UpdateService } from '../_components/update-service';

function UpdateServicePage({ params }) {
  const serviceId = params?.servicesID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل الخدمة</h2>
      </div>

      <UpdateService id={serviceId} />
    </div>
  );
}

export default UpdateServicePage;
