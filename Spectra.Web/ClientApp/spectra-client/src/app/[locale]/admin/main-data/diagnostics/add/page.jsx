import { BackButton } from '@/components/buttons/back-button';
import { AddDiagnostic } from './_components/add-diagnostic';

function AddDaignosticPage() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة تشخيص</h2>
      </div>

      <AddDiagnostic />
    </div>
  );
}

export default AddDaignosticPage;
