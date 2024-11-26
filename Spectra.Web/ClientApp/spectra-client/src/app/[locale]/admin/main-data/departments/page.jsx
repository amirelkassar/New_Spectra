import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { prefetchSections } from '@/hooks/queries/admin/main-data/section';
import { Heading } from '../_components/heading';
import ROUTES from '@/routes';
import { DepartmentsTable } from './_components/departments-table';

async function DepartmentsPage() {
  const queryClient = await prefetchSections();

  return (
    <div className='space-y-10'>
      <Heading
        btnLabel='اضافة قسم'
        title='الاقسام'
        path={ROUTES.ADMIN.DATAMAIN.DEPARTMENTSADD}
      />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <DepartmentsTable />
      </HydrationBoundary>
    </div>
  );
}

export default DepartmentsPage;
