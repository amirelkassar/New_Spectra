import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Heading } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import ROUTES from '@/routes';
import { prefetchSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { SpecialtiesTable } from './_components/specialties-table';
import Card from '@/components/card';

async function SpecialtiesPage() {
  const queryClient = await prefetchSpecialization();

  return (
    <Card>
      <Heading
        title='تخصصات الاطباء'
        btnLabel='اضافة تخصص'
        path={ROUTES.ADMIN.DATAMAIN.SPECIALTIESADD}
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <SpecialtiesTable />
      </HydrationBoundary>
    </Card>
  );
}

export default SpecialtiesPage;
