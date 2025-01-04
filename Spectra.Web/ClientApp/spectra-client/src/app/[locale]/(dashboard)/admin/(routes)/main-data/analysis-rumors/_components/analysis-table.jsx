'use client';

import { useRouter } from '@/i18n/routing';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { useMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import { TableItem } from '@/admin/_components/ui';
import { AnalysisColumns, AnalysisType } from './analysis-columns';
import { Pagination } from '@/components/table/pagination';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import ROUTES from '@/routes';
import { TableCard } from '@/components/table/table-card';
import { CellActions } from './cell-actions';

export const AnalysisTable = () => {
  const router = useRouter();

  const { pageNum, search } = useQueryParams();

  const query = useMedicalTests({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data, pageSize, totalCount, isPlaceholderData }) => (
        <>
          <DataTable data={data} columns={AnalysisColumns}>
            <TableItem className='hidden mdl:table' />
          </DataTable>

          <div className='flex flex-col mt-5 space-y-5 mdl:hidden mb-10'>
            {data?.map((item) => (
              <CardItem
                key={item.id}
                item={item}
                onClick={() => {
                  if (!item?.id) return;
                  router.push(
                    ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSDETAILS(
                      item?.id || ''
                    )
                  );
                }}
              />
            ))}
          </div>

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

const CardItem = ({ item = {}, onClick = () => {} }) => {
  const name = item?.name || '';
  const code = item?.code || '--';
  const type = item?.examinationTypes || '';

  return (
    <TableCard>
      <TableCard.Container role='button' onClick={onClick}>
        <TableCard.Body>
          <div className='flex gap-3 items-start'>
            <AnalysisType type={type} />
            <div className='flex-1 space-y-3'>
              <div className='grid grid-cols-2 gap-5'>
                <span>الاسم</span>
                <span className='font-bold'>{name}</span>
              </div>

              <div className='grid grid-cols-2 gap-5'>
                <span>الكود</span>
                <span className='font-bold'>{code}</span>
              </div>
            </div>
          </div>

          <TableCard.Action>
            <CellActions id={item?.id} />
          </TableCard.Action>
        </TableCard.Body>
      </TableCard.Container>
    </TableCard>
  );
};
