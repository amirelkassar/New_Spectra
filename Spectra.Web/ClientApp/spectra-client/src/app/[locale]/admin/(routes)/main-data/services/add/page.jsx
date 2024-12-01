import { BackButton } from '@/components/buttons/back-button';
import { AddService } from './_components/add-service';

function AddServicePage() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة خدمة</h2>
      </div>

      <AddService />
    </div>
  );
}

export default AddServicePage;
