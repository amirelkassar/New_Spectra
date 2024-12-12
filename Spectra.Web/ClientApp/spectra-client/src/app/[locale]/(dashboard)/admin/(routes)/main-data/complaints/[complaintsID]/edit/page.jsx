import { BackButton } from '@/components/buttons/back-button';
import { UpdateComplaint } from '../_components/update-complaint';
import Card from '@/components/card';

function UpdateComplaintPage({ params }) {
  const complaintID = params?.complaintsID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل الشكوي</h2>
      </div>

      <UpdateComplaint id={complaintID} />
    </Card>
  );
}

export default UpdateComplaintPage;
