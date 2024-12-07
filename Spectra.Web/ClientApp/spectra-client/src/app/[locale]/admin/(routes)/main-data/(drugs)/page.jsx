import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Heading } from '@/admin/_components/ui';
import { DrugsTable } from './_components/drugs-table';
import ROUTES from '@/routes';
import { prefetchDrugs } from '@/hooks/queries/admin/main-data/drugs';
import Card from '@/components/card';

const DrugPage = async () => {
  const queryClient = await prefetchDrugs();

  return (
    <Card>
      <Heading
        title='العقاقير'
        btnLabel='اضافة عقار'
        path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DrugsTable />
      </HydrationBoundary>
    </Card>
  );
};

export default DrugPage;
