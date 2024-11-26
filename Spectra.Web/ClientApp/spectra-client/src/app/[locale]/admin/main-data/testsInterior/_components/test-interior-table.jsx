'use client';

import { DataTable } from '@/components/table/data-table';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '../../_components/table-item';
import { useQuery } from '@/hooks/queries/use-query';
import { useInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import { TestsInteriorColumns } from './testsInterior-columns';

export const TestInteriorTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({ query: useInternalExamination });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={TestsInteriorColumns}>
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
