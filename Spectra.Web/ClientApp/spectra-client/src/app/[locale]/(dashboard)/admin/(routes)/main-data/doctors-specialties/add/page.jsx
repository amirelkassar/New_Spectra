import { BackButton } from '@/components/buttons/back-button';
import { AddSpeciality } from './_components/add-speciality';
import Card from '@/components/card';

function Page() {
  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة تخصص</h2>
      </div>

      <AddSpeciality />
    </Card>
  );
}

export default Page;
