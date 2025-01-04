'use client';

import { useMemo, useState } from 'react';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useServices } from '@/hooks/queries/admin/main-data/services';
import { TableItem } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { Pagination } from '@/components/table/pagination';
import { servicesColumns } from './services-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { ServicesTableFilter } from './services-table-filter';

export const ServicesTable = () => {
  const [filter, setFilter] = useState('');

  const { pageNum, search } = useQueryParams();

  const { freeLancerOnly, serviceType, spectraTeamOnly } = useMemo(
    () => handleFilter(filter),
    [filter]
  );

  const query = useServices({
    pageNum,
    search,
    serviceType,
    freeLancerOnly,
    spectraTeamOnly,
  });

  return (
    <QueryWrapper
      query={query}
      isSearching={!!search}
      isFiltered={!!filter}
    >
      {({ data, isPlaceholderData, totalCount, pageSize }) => (
        <>
          <ServicesTableFilter type={filter} setType={setFilter} />

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

function handleFilter(type = '') {
  switch (type) {
    case '':
      return {
        serviceType: '',
        freeLancerOnly: '',
        spectraTeamOnly: '',
      };
    case '1':
      return {
        serviceType: '1',
        freeLancerOnly: '',
        spectraTeamOnly: '',
      };
    case '2':
      return {
        serviceType: '2',
        freeLancerOnly: '',
        spectraTeamOnly: '',
      };
    case '3':
      return {
        serviceType: '',
        freeLancerOnly: '',
        spectraTeamOnly: 'true',
      };
    case '4':
      return {
        serviceType: '',
        freeLancerOnly: 'true',
        spectraTeamOnly: '',
      };
  }
}
