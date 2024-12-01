import { BackButton } from '@/components/buttons/back-button';
import { ViewComplaint } from './_components/view-complaint';
import { CellActions } from '../_components/cell-actions';

function ViewComplaintPage({ params }) {
  const complaintID = params?.complaintsID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>تفاصيل الشكوي</h2>
        </div>

        <CellActions />
      </div>

      <ViewComplaint id={complaintID} />
    </div>
  );
}

export default ViewComplaintPage;
