'use client';

import Image from 'next/image';
import { useRouter } from '@/i18n/routing';

import { useDrugs } from '@/hooks/queries/admin/main-data/drugs';
import { DataTable } from '@/components/table/data-table';
import { DrugsColumns } from './drugs-columns';
import { QueryWrapper } from '@/components/query-wrapper';
import { Pagination } from '@/components/table/pagination';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { TableCard } from '@/components/table/table-card';
import { TableItem } from '@/admin/_components/ui';
import { CellActions } from './cell-actions';
import { useImagePath } from '@/hooks/use-image-path';
import ROUTES from '@/routes';

export const DrugsTable = () => {
  const router = useRouter();

  const { pageNum, search } = useQueryParams();

  const query = useDrugs({ pageNum, search });

  return (
    <QueryWrapper query={query} isSearching={!!search}>
      {({ data, pageSize, totalCount, isPlaceholderData }) => (
        <>
          <DataTable data={data} columns={DrugsColumns}>
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
                    ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(item?.id || '')
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
  const src = useImagePath(item?.imagePath);
  const name = item?.name || '';
  const activeIngredient = item?.activeIngredient || '';
  const type = item?.type || '';
  const code = item?.code || '';

  return (
    <TableCard>
      <TableCard.Container role='button' onClick={onClick}>
        <TableCard.Body>
          <div className='flex gap-2'>
            <div className='size-10 flex items-center justify-center overflow-hidden shrink-0'>
              {src && (
                <Image
                  src={src}
                  alt={name}
                  width={49}
                  height={51}
                  className='w-full h-auto object-center object-contain max-w-full max-h-full shrink-0'
                />
              )}
            </div>
            <div className='flex-1 space-y-3'>
              <div className='grid grid-cols-2 gap-5'>
                <span>اسم العقار</span>
                <span className='font-bold'>{name}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>المادة الفعالة</span>
                <span className='font-bold'>{activeIngredient}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>النوع</span>
                <span className='font-bold'>{type}</span>
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
