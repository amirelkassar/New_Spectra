import { BackButton } from '@/components/buttons/back-button';
import { AddTest } from './_components/add-test';

function AddTestPage() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة فحص داخلى </h2>
      </div>

      <AddTest />
    </div>
  );
}

export default AddTestPage;
