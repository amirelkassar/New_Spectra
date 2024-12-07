import { BackButton } from '@/components/buttons/back-button';
import { ViewAnalysis } from './_components/view-analysis';
import { CellActions } from '../_components/cell-actions';
import Card from '@/components/card';

function ViewAnalysisPage({ params }) {
  const analysisRumorsID = params?.analysisRumorsID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>التحاليل والاشعة</h2>
        </div>
        <CellActions />
      </div>

      <ViewAnalysis id={analysisRumorsID} />
    </Card>
  );
}

export default ViewAnalysisPage;
