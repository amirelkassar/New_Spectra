import { BackButton } from '@/components/buttons/back-button';
import { UpdateTest } from '../_components/update-test';
import Card from '@/components/card';

function UpdateTestPage({ params }) {
  const testsInteriorID = params?.testsInteriorID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة فحص داخلى </h2>
      </div>

      <UpdateTest id={testsInteriorID} />
    </Card>
  );
}

export default UpdateTestPage;
