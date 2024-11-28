'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import { TableItem } from '../../_components/table-item';
import { AnalysisColumns } from './analysis-columns';
import { Pagination } from '@/components/table/pagination';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const AnalysisTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useMedicalTests(pageNum, search);

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({
        data,
        pageSize,
        totalCount,
        isPlaceholderData,
      }) => (
        <>
          <DataTable data={data} columns={AnalysisColumns}>
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
