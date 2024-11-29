import { prefetchMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import { Heading } from '../_components/heading';
import { AnalysisTable } from './_components/analysis-table';
import ROUTES from '@/routes';
import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

async function AnalysisPage() {
  const queryClient = await prefetchMedicalTests();

  return (
    <div className='space-y-10'>
      <Heading
        title='التحاليل و الاشعة'
        btnLabel='اضافة نوع'
        path={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSADD}
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <AnalysisTable />
      </HydrationBoundary>
    </div>
  );
}

export default AnalysisPage;
