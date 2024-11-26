import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { Heading } from '../_components/heading';
import { prefetchInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import { TestInteriorTable } from './_components/test-interior-table';
import ROUTES from '@/routes';

const TestInteriorPage = async () => {
  const queryClient = await prefetchInternalExamination();

  return (
    <div>
      <Heading
        title='الفحوصات الداخلية'
        btnLabel='اضافة فحص داخلي'
        path={ROUTES.ADMIN.DATAMAIN.TESTSINTERIORADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TestInteriorTable />
      </HydrationBoundary>
    </div>
  );
};

export default TestInteriorPage;
