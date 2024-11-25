'use client';

import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { SpecialtiesColumns } from './specialties-columns';
import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '../../_components/table-item';
import { useQuery } from '@/hooks/queries/use-query';

export const SpecialtiesTable = () => {
  const {
    data,
    status,
    pageSize,
    totalCount,
    pageNumber,
    refetch,
  } = useQuery({ query: useSpecialization });

  return (
    <QueryWrapper status={status} refetch={refetch}>
      <DataTable data={data} columns={SpecialtiesColumns}>
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
