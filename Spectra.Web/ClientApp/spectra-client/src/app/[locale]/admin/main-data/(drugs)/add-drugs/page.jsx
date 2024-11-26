import { BackButton } from '@/components/buttons/back-button';
import { AddDrug } from './_components/add-drug';

function Page() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة عقار</h2>
      </div>

      <AddDrug />
    </div>
  );
}

export default Page;
