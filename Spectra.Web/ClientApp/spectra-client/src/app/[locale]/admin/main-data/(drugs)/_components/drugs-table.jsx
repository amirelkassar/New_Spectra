'use client';

import { useDrugs } from '@/hooks/queries/admin/main-data/drugs';
import { DataTable } from '@/components/table/data-table';
import { DrugsColumns } from './drugs-columns';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '../../_components/table-item';
import { useQuery } from '@/hooks/queries/use-query';

export const DrugsTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({ query: useDrugs });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={DrugsColumns}>
        <TableItem />
      </DataTable>

      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        pageNumber={pageNumber}
        disabled={status.isPlaceholderData}
      />
    </QueryWrapper>
  );
};
