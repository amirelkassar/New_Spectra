import { BackButton } from '@/components/buttons/back-button';
import { UpdateAnalysis } from '../_components/update-analysis';
import Card from '@/components/card';

function UpdateAnalysisPage({ params }) {
  const analysisRumorsID = params?.analysisRumorsID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل</h2>
      </div>

      <UpdateAnalysis id={analysisRumorsID} />
    </Card>
  );
}

export default UpdateAnalysisPage;
