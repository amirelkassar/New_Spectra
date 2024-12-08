import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { prefetchSections } from '@/hooks/queries/admin/main-data/section';
import { Heading } from '@/admin/_components/ui';
import ROUTES from '@/routes';
import { DepartmentsTable } from './_components/departments-table';
import Card from '@/components/card';

async function DepartmentsPage() {
  const queryClient = await prefetchSections();

  return (
    <Card className='space-y-10'>
      <Heading
        btnLabel='اضافة قسم'
        title='الاقسام'
        path={ROUTES.ADMIN.DATAMAIN.DEPARTMENTSADD}
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <DepartmentsTable />
      </HydrationBoundary>
    </Card>
  );
}

export default DepartmentsPage;
