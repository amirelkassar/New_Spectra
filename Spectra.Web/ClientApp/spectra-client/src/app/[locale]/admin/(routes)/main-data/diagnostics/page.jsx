import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { DiagnosticsTable } from './_components/diagnostics-table';
import { prefetchDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import { Heading } from '@/admin/_components/ui';
import ROUTES from '@/routes';
import Card from '@/components/card';

async function DiagnosticsPage() {
  const queryClient = await prefetchDiagnostics();

  return (
    <Card>
      <Heading
        title='التشخيصات'
        btnLabel='اضافة تشخيص'
        path={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DiagnosticsTable />
      </HydrationBoundary>
    </Card>
  );
}

export default DiagnosticsPage;
