import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { DiagnosticsTable } from './_components/diagnostics-table';
import { prefetchDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import { Heading } from '../_components/heading';
import ROUTES from '@/routes';

async function page() {
  const queryClient = await prefetchDiagnostics();

  return (
    <div>
      <Heading
        title='التشخيصات'
        btnLabel='اضافة تشخيص'
        path={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DiagnosticsTable />
      </HydrationBoundary>
    </div>
  );
}

export default page;
