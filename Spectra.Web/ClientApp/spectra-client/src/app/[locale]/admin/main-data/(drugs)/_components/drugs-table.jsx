'use client';

import { useDrugs } from '@/hooks/queries/admin/main-data/drugs';
import { DataTable } from '@/components/table/data-table';
import { DrugsColumns } from './drugs-columns';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '../../_components/table-item';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const DrugsTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useDrugs(pageNum, search);

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({
        data,
        pageSize,
        totalCount,
        isPlaceholderData,
      }) => (
        <>
          <DataTable data={data} columns={DrugsColumns}>
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
