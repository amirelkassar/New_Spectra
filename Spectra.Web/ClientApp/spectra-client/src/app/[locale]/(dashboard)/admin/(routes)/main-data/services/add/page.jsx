import { BackButton } from '@/components/buttons/back-button';
import { AddService } from './_components/add-service';
import Card from '@/components/card';

function AddServicePage() {
  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة خدمة</h2>
      </div>

      <AddService />
    </Card>
  );
}

export default AddServicePage;
