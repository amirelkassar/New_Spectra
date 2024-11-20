'use client';
import React from 'react';
import { DataTable } from '@/components/data-table';
import { SpecialtiesColumns } from '../_components/specialties-columns';
import AddMainData from '../_components/add-drugs';
import ROUTES from '@/routes';
import { GetSpecialization } from '@/useAPI/admin/main-data/specialties';
import HandelShowData from '@/components/handelShowData';

function page() {
  const { data, isLoading } = GetSpecialization();

  return (
    <div>
      <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6'>
        <h2 className='headTitleDash'>تخصصات الاطباء</h2>
        <AddMainData
          title={'أضافة تخصص'}
          path={ROUTES.ADMIN.DATAMAIN.SPECIALTIESADD}
        />
      </div>
      <HandelShowData
        isLoading={isLoading}
        lengthData={data?.data.data.length}
      >
        <DataTable
          data={data?.data.data}
          columns={SpecialtiesColumns}
        />
      </HandelShowData>
    </div>
  );
}

export default page;
