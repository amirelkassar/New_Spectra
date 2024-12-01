import { BackButton } from '@/components/buttons/back-button';
import { AddComplaint } from './_components/add-complaint';

function AddComplaintPage() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة شكوى</h2>
      </div>

      <AddComplaint />
    </div>
  );
}

export default AddComplaintPage;
