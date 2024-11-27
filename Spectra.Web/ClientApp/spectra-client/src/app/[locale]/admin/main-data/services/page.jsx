import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { Heading } from '../_components/heading';
import { ServicesTable } from './_components/services-table';
import { prefetchServices } from '@/hooks/queries/admin/main-data/services';
import ROUTES from '@/routes';

async function ServicesPage() {
  const queryClient = await prefetchServices();

  return (
    <div>
      <Heading
        title='الخدمات'
        path={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
        btnLabel='اضافة خدمة'
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ServicesTable />
      </HydrationBoundary>
    </div>
  );
}

export default ServicesPage;
