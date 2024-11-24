import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { prefetchDrugs } from '@/useAPI/admin/main-data/drugs';
import { Heading } from '../_components/heading';
import { DrugsTable } from './_components/drugs-table';
import ROUTES from '@/routes';

const DrugClient = async () => {
  const queryClient = await prefetchDrugs();
  return (
    <div>
      <Heading
        title='العقاقير'
        btnLabel='اضافة عقار'
        path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DrugsTable />
      </HydrationBoundary>
    </div>
  );
};

export default DrugClient;
