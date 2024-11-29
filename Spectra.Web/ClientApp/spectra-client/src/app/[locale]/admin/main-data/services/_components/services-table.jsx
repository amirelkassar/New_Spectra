'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useServices } from '@/hooks/queries/admin/main-data/services';
import { TableItem } from '../../_components/table-item';
import { Pagination } from '@/components/table/pagination';
import { servicesColumns } from './services-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const ServicesTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useServices(pageNum, search);

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({
        data,
        isPlaceholderData,
        totalCount,
        pageSize,
      }) => (
        <>
          <DataTable data={data} columns={servicesColumns}>
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
