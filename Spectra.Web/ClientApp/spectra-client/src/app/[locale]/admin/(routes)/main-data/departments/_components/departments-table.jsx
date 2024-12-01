'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { useSections } from '@/hooks/queries/admin/main-data/section';
import { TableItem } from '@/admin/_components/ui';
import { DepartmentColumns } from './departments-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const DepartmentsTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useSections(pageNum, search);

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({
        data,
        totalCount,
        pageSize,
        isPlaceholderData,
      }) => (
        <>
          <DataTable
            data={data}
            columns={DepartmentColumns}
          >
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
