'use client';

import { DataTable } from '@/components/table/data-table';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '../../_components/table-item';
import { useQuery } from '@/hooks/queries/use-query';
import { useComplaints } from '@/hooks/queries/admin/main-data/complaints';
import { ComplaintsColumns } from './complaints-columns';

export const ComplaintsTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({ query: useComplaints });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={ComplaintsColumns}>
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
