import { BackButton } from '@/components/buttons/back-button';
import { UpdateDrug } from '../_components/update-drug';
import Card from '@/components/card';

async function EditDrugPage({ params }) {
  const drugId = params?.drugsID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل العقار</h2>
      </div>

      <UpdateDrug id={drugId} />
    </Card>
  );
}

export default EditDrugPage;
