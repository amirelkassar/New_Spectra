'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import Card from '@/components/card';
import { H1 } from '@/dashboard/_components/ui/h1';
import { TableItem } from '@/admin/_components/ui';
import { DataTable } from '@/components/table/data-table';
import { QueryWrapper } from '@/components/query-wrapper';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { Pagination } from '@/components/table/pagination';
import { contractsColumns } from './contracts-columns';
import { StateFilter } from '@/dashboard/_components/contract/state-filter';
import { CardItem } from '@/dashboard/_components/contract/contracts-table';
import { CellActions } from './cell-actions';
import { useEmployeeHeadContracts } from '@/hooks/queries/employee-head/contract';

export const ContractsTable = () => {
  const t = useTranslations('contract_obj');

  const { pageNum, search } = useQueryParams();

  const [state, setState] = useState('');

  const query = useEmployeeHeadContracts({
    pageNum,
    search,
    state,
  });

  return (
    <Card className='h-full space-y-10'>
      <H1>{t('contracts')}</H1>

      <QueryWrapper
        query={query}
        isFiltered={!!state}
        isSearching={!!search}
      >
        {({ data, isPlaceholderData, pageSize, totalCount }) => (
          <>
            <StateFilter value={state} setValue={setState} />

            <DataTable data={data} columns={contractsColumns}>
              <TableItem className='hidden mdl:table' />

              <div className='flex flex-col mt-5 space-y-5 mdl:hidden'>
                {data?.map((item) => (
                  <CardItem key={item.id} item={item}>
                    <CellActions
                      lastVersionId={item?.lastVersionId}
                      contractId={item.id}
                    />
                  </CardItem>
                ))}
              </div>
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
    </Card>
  );
};
