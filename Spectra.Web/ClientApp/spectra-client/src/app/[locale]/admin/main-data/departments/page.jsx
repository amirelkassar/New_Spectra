'use client';

import { DataTable } from '@/components/data-table';
import ROUTES from '@/routes';
import { DepartmentColumns } from '../_components/departments-columns';
import { useSections } from '@/hooks/queries/admin/main-data/section';
import HandelShowData from '@/components/handelShowData';
import { Heading } from '../_components/heading';

function DepartmentsPage() {
  const { data, isLoading } = useSections();

  return (
    <div>
      <Heading
        btnLabel='اضافة قسم'
        title='الاقسام'
        path={ROUTES.ADMIN.DATAMAIN.DEPARTMENTS}
      />
      <HandelShowData
        isLoading={isLoading}
        lengthData={data?.data.length}
      >
        <DataTable
          data={data?.data}
          columns={DepartmentColumns}
        />
      </HandelShowData>
    </div>
  );
}

export default DepartmentsPage;
