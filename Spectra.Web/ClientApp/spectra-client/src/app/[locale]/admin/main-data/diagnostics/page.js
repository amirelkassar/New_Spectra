'use client';

import AddMainData from '../_components/add-drugs';
import { DataTable } from '@/components/data-table';
import ROUTES from '@/routes';
import { DiagnosticsColumns } from '../_components/diagnostics-columns';
import { GetDiagnostics } from '@/useAPI/admin/main-data/diagnostics';
import HandelShowData from '@/components/handelShowData';

function page() {
  const { data, isLoading } = GetDiagnostics();

  const items = data?.data?.data?.items;

  return (
    <div>
      <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6'>
        <h2 className='headTitleDash'>التشخيصات </h2>
        <AddMainData
          title={'أضافة تشخيص '}
          path={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSADD}
        />
      </div>
      <HandelShowData
        isLoading={isLoading}
        lengthData={items?.length}
      >
        <DataTable
          data={items}
          columns={DiagnosticsColumns}
        />
      </HandelShowData>
    </div>
  );
}

export default page;
