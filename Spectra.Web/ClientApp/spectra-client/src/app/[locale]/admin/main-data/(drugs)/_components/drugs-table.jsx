'use client';

import { GetDrugs } from '@/useAPI/admin/main-data/drugs';
import { DrugsColumns } from './drugs-columns';
import { DataTable } from '@/components/data-table';

import HandelShowData from '@/components/handelShowData';

export const DrugsTable = () => {
  const { data, isLoading } = GetDrugs();

  const items = data?.data?.items;

  return (
    <HandelShowData
      isLoading={isLoading}
      lengthData={items?.length}
    >
      <DataTable data={items} columns={DrugsColumns} />
    </HandelShowData>
  );
};
