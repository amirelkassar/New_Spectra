'use client';

import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { SpecialtiesColumns } from './specialties-columns';
import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '@/admin/_components/ui';
import { useQueryParams } from '@/hooks/queries/use-query-params';

export const SpecialtiesTable = () => {
  const { pageNum, search } = useQueryParams();

  const query = useSpecialization({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({
        data,
        isPlaceholderData,
        totalCount,
        pageSize,
      }) => (
        <>
          <DataTable
            data={data}
            columns={SpecialtiesColumns}
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
