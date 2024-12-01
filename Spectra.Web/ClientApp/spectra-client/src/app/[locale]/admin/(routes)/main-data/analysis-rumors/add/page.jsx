import { BackButton } from '@/components/buttons/back-button';
import { AddAnalysis } from './_components/add-analysis';

function AddAnalysisPage() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة نوع</h2>
      </div>

      <AddAnalysis />
    </div>
  );
}

export default AddAnalysisPage;
