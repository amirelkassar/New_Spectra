'use client';
import React from 'react';
import { DataTable } from '@/components/data-table';
import AddMainData from '../_components/add-drugs';
import ROUTES from '@/routes';
import { DepartmentColumns } from '../_components/departments-columns';
import { GetSection } from '@/hooks/queries/admin/main-data/section';
import HandelShowData from '@/components/handelShowData';

function page() {
  const { data, isLoading } = GetSection();

  return (
    <div>
      <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6'>
        <h2 className='headTitleDash'>الاقسام</h2>
        <AddMainData
          title={'أضافة قسم'}
          path={ROUTES.ADMIN.DATAMAIN.DEPARTMENTSADD}
        />
      </div>
      <HandelShowData
        isLoading={isLoading}
        lengthData={data?.data.data.length}
      >
        <DataTable
          data={data?.data.data}
          columns={DepartmentColumns}
        />
      </HandelShowData>
    </div>
  );
}

export default page;
