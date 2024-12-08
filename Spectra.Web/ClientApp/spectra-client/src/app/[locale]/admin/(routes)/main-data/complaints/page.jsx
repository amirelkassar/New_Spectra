import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Heading } from '@/admin/_components/ui';
import { ComplaintsTable } from './_components/complaints-table';
import { prefetchComplaints } from '@/hooks/queries/admin/main-data/complaints';
import ROUTES from '@/routes';
import Card from '@/components/card';

const ComplaintsPage = async () => {
  const queryClient = await prefetchComplaints();

  return (
    <Card>
      <Heading
        title='الشكاوي'
        btnLabel='اضافة شكوي'
        path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ComplaintsTable />
      </HydrationBoundary>
    </Card>
  );
};

export default ComplaintsPage;
