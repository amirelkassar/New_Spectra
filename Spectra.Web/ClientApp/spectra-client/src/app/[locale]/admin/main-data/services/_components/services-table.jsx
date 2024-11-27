'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useServices } from '@/hooks/queries/admin/main-data/services';
import { useQuery } from '@/hooks/queries/use-query';
import { TableItem } from '../../_components/table-item';
import { Pagination } from '@/components/table/pagination';
import { servicesColumns } from './services-columns';

export const ServicesTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({
    query: useServices,
  });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={servicesColumns}>
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
