import { BackButton } from '@/components/buttons/back-button';
import { AddSpeciality } from './_components/add-speciality';

function Page() {
  return (
    <div className='space-y-5'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة تخصص</h2>
      </div>

      <AddSpeciality />
    </div>
  );
}

export default Page;
