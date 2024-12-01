import { BackButton } from '@/components/buttons/back-button';
import { UpdateDiagnostic } from '../_components/update-diagnostic';

function UpdateDiagnosticPage({ params }) {
  const diagnosticID = params.diagnosticsID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل التشخيص</h2>
      </div>

      <UpdateDiagnostic id={diagnosticID} />
    </div>
  );
}

export default UpdateDiagnosticPage;
