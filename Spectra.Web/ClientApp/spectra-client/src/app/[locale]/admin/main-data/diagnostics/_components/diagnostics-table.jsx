'use client';

import { DataTable } from '@/components/table/data-table';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '../../_components/table-item';
import { useQuery } from '@/hooks/queries/use-query';
import { useDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import { DiagnosticsColumns } from './diagnostics-columns';

export const DiagnosticsTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({ query: useDiagnostics });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={DiagnosticsColumns}>
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
