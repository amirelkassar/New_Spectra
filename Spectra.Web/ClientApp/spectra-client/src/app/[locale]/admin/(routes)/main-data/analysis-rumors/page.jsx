import { prefetchMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import { Heading } from '@/admin/_components/ui';
import { AnalysisTable } from './_components/analysis-table';
import ROUTES from '@/routes';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Card from '@/components/card';

async function AnalysisPage() {
  const queryClient = await prefetchMedicalTests();

  return (
    <Card className='space-y-10'>
      <Heading
        title='التحاليل و الاشعة'
        btnLabel='اضافة نوع'
        path={ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSADD}
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <AnalysisTable />
      </HydrationBoundary>
    </Card>
  );
}

export default AnalysisPage;
