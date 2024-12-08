import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Heading } from '@/admin/_components/ui';
import { prefetchInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import { TestInteriorTable } from './_components/test-interior-table';
import ROUTES from '@/routes';
import Card from '@/components/card';

const TestInteriorPage = async () => {
  const queryClient = await prefetchInternalExamination();

  return (
    <Card>
      <Heading
        title='الفحوصات الداخلية'
        btnLabel='اضافة فحص داخلي'
        path={ROUTES.ADMIN.DATAMAIN.TESTSINTERIORADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TestInteriorTable />
      </HydrationBoundary>
    </Card>
  );
};

export default TestInteriorPage;
