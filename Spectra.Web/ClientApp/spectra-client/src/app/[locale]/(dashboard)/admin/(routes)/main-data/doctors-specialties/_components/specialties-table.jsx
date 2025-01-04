'use client';

import { useRouter } from '@/i18n/routing';

import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { SpecialtiesColumns } from './specialties-columns';
import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { TableItem } from '@/admin/_components/ui';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { formatCurrency } from '@/lib/utils';
import { TableCard } from '@/components/table/table-card';
import { CellActions } from './cell-actions';
import ROUTES from '@/routes';

export const SpecialtiesTable = () => {
  const router = useRouter();

  const { pageNum, search } = useQueryParams();

  const query = useSpecialization({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data, isPlaceholderData, totalCount, pageSize }) => (
        <>
          <DataTable data={data} columns={SpecialtiesColumns}>
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
                    ROUTES.ADMIN.DATAMAIN.SPECIALTIESID(
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
  const arName = item?.arName || '';
  const enName = item?.enName || '';
  const code = item?.code || '--';
  const consultationCost = formatCurrency(
    item?.consultationCost,
    ' ر.س'
  );

  return (
    <TableCard>
      <TableCard.Container role='button' onClick={onClick}>
        <TableCard.Body>
          <div className='flex-1 space-y-3'>
            <div className='grid grid-cols-2 gap-5'>
              <span>الاسم بالعربي</span>
              <span className='font-bold'>{arName}</span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>الاسم بالانجليزي</span>
              <span className='font-bold'>{enName}</span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>كود التخصص</span>
              <span className='font-bold'>{code}</span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>تكلفة</span>
              <span className='font-bold'>{consultationCost}</span>
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
