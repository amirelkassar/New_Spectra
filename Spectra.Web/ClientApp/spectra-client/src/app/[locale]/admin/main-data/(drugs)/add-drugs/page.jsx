import { BackButton } from '@/components/buttons/back-button';
import { AddDrug } from './_components/add-drug';

function Page() {
  return (
    <div>
      <div className='flex mb-10 items-center gap-4'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة عقار</h2>
      </div>

      <AddDrug />
    </div>
  );
}

export default Page;
