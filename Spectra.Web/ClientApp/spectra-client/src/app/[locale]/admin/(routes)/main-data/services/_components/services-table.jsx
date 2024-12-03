'use client';

import { useState } from 'react';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useServices } from '@/hooks/queries/admin/main-data/services';
import { TableItem } from '@/admin/_components/ui';
import { Pagination } from '@/components/table/pagination';
import { servicesColumns } from './services-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { ServicesTableFilter } from './services-table-filter';

export const ServicesTable = () => {
  const [serviceType, setServiceType] = useState('');

  const { pageNum, search } = useQueryParams();

  const query = useServices({
    pageNum,
    search,
    serviceType,
  });

  return (
    <QueryWrapper
      query={query}
      isSearching={!!search}
      isFiltered={!!serviceType}
    >
      {({
        data,
        isPlaceholderData,
        totalCount,
        pageSize,
      }) => (
        <>
          <ServicesTableFilter
            type={serviceType}
            setType={setServiceType}
          />

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
