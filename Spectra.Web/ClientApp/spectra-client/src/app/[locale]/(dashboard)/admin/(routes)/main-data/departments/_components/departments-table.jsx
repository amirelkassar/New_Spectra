'use client';

import { useRouter } from '@/i18n/routing';

import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { useSections } from '@/hooks/queries/admin/main-data/section';
import { TableItem } from '@/admin/_components/ui';
import { DepartmentColumns } from './departments-columns';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { TableCard } from '@/components/table/table-card';
import { CellActions } from './cell-actions';
import ROUTES from '@/routes';

export const DepartmentsTable = () => {
  const router = useRouter();

  const { pageNum, search } = useQueryParams();

  const query = useSections({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data, totalCount, pageSize, isPlaceholderData }) => (
        <>
          <DataTable data={data} columns={DepartmentColumns}>
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
                    ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILS(
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
  const specsifications = item?.specsifications?.length || 0;
  const headDoctorName = item?.headDoctorName || '';

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
              <span>عدد التخصصات</span>
              <span className='font-bold'>{specsifications}</span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>رئيس القسم</span>
              <span className='font-bold'>{headDoctorName}</span>
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
