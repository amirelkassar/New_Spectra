'use client';

import { DataTable } from '@/components/table/data-table';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { useInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import { TestsInteriorColumns } from './testsInterior-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const TestInteriorTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useInternalExamination({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data, isPlaceholderData, totalCount, pageSize }) => (
        <>
          <DataTable data={data} columns={TestsInteriorColumns}>
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
