import { BackButton } from '@/components/buttons/back-button';
import { AddComplaint } from './_components/add-complaint';
import Card from '@/components/card';

function AddComplaintPage() {
  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة شكوى</h2>
      </div>

      <AddComplaint />
    </Card>
  );
}

export default AddComplaintPage;
