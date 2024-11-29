import { BackButton } from '@/components/buttons/back-button';
import { CellActions } from '../_components/cell-actions';
import { ViewDiagnostic } from './_components/view-diagnostic';

function ViewDiagnosticPage({ params }) {
  const diagnosticsID = params.diagnosticsID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>تفاصيل التشخيص</h2>
        </div>
        <CellActions />
      </div>

      <ViewDiagnostic id={diagnosticsID} />
    </div>
  );
}

export default ViewDiagnosticPage;
