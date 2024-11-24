'use client';

import AddMainData from '../_components/add-drugs';
import { DataTable } from '@/components/data-table';
import { GetComplaint } from '@/useAPI/admin/main-data/complaints';
import { ComplaintsColumns } from '../_components/complaints-columns';
import HandelShowData from '@/components/handelShowData';
import ROUTES from '@/routes';

function page() {
  const { data, isLoading } = GetComplaint();

  const items = data?.data?.data?.items;

  return (
    <div>
      <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6'>
        <h2 className='headTitleDash'>الشكاوى العامة</h2>
        <AddMainData
          title={' أضافة شكوى'}
          path={ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD}
        />
      </div>

      <HandelShowData
        isLoading={isLoading}
        lengthData={items?.length}
      >
        <DataTable
          data={items}
          columns={ComplaintsColumns}
        />
      </HandelShowData>
    </div>
  );
}

export default page;
