import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Heading } from '@/admin/_components/ui';
import { ServicesTable } from './_components/services-table';
import { prefetchServices } from '@/hooks/queries/admin/main-data/services';
import ROUTES from '@/routes';
import Card from '@/components/card';

async function ServicesPage() {
  const queryClient = await prefetchServices();

  return (
    <Card>
      <Heading
        title='الخدمات'
        path={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
        btnLabel='اضافة خدمة'
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ServicesTable />
      </HydrationBoundary>
    </Card>
  );
}

export default ServicesPage;
