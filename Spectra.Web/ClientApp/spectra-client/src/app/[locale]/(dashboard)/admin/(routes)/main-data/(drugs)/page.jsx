import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Heading } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { DrugsTable } from './_components/drugs-table';
import ROUTES from '@/routes';
import { prefetchDrugs } from '@/hooks/queries/admin/main-data/drugs';
import Card from '@/components/card';
import { getAuth } from '@/lib/auth';

const DrugPage = async () => {
  const [queryClient, session] = await Promise.all([
    prefetchDrugs(),
    getAuth(),
  ]);

  const permissions = session?.permissions;

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
