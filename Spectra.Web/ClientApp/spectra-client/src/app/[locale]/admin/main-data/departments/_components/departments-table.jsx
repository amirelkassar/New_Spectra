'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { useSections } from '@/hooks/queries/admin/main-data/section';
import { useQuery } from '@/hooks/queries/use-query';
import { TableItem } from '../../_components/table-item';
import { DepartmentColumns } from './departments-columns';

export const DepartmentsTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({
    query: useSections,
  });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={DepartmentColumns}>
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
