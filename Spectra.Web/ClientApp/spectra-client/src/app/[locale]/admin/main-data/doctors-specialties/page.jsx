import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { Heading } from '../_components/heading';
import ROUTES from '@/routes';
import { prefetchSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { SpecialtiesTable } from './_components/specialties-table';

async function SpecialtiesPage() {
  const queryClient = await prefetchSpecialization();

  return (
    <div>
      <Heading
        title='تخصصات الاطباء'
        btnLabel='اضافة تخصص'
        path={ROUTES.ADMIN.DATAMAIN.SPECIALTIESADD}
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <SpecialtiesTable />
      </HydrationBoundary>
    </div>
  );
}

export default SpecialtiesPage;
