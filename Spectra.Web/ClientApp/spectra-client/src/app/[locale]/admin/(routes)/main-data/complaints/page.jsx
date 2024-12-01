import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { Heading } from '@/admin/_components/ui';
import { ComplaintsTable } from './_components/complaints-table';
import { prefetchComplaints } from '@/hooks/queries/admin/main-data/complaints';
import ROUTES from '@/routes';

const ComplaintsPage = async () => {
  const queryClient = await prefetchComplaints();

  return (
    <div>
      <Heading
        title='الشكاوي'
        btnLabel='اضافة شكوي'
        path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ComplaintsTable />
      </HydrationBoundary>
    </div>
  );
};

export default ComplaintsPage;
