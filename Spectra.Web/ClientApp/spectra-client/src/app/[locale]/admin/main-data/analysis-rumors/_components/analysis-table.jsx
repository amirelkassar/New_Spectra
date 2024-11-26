'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import { useQuery } from '@/hooks/queries/use-query';
import { TableItem } from '../../_components/table-item';
import { AnalysisColumns } from './analysis-columns';
import { Pagination } from '@/components/table/pagination';

export const AnalysisTable = () => {
  const {
    data,
    status,
    refetch,
    pageSize,
    totalCount,
    pageNumber,
  } = useQuery({
    query: useMedicalTests,
  });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={AnalysisColumns}>
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
