'use client';

import { DataTable } from '@/components/table/data-table';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { useDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import { DiagnosticsColumns } from './diagnostics-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const DiagnosticsTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useDiagnostics({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data, totalCount, pageSize, isPlaceholderData }) => (
        <>
          <DataTable data={data} columns={DiagnosticsColumns}>
            <TableItem />
          </DataTable>

          <Pagination
            pageSize={pageSize}
            totalCount={totalCount}
            pageNumber={pageNum}
            disabled={isPlaceholderData}
          />
        </>
      )}
    </QueryWrapper>
  );
};
