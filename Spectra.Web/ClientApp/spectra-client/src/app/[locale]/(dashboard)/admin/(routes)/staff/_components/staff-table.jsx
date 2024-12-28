'use client';

import { useState } from 'react';
import { Link, useRouter } from '@/i18n/routing';

import { AddButton } from '@/components/buttons/add-button';
import { SectionTitle, TableItem } from '@/admin/_components/ui';
import ROUTES from '@/routes';
import { useStaff } from '@/hooks/queries/admin/staff/staff';
import { QueryWrapper } from '@/components/query-wrapper';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import {
  CellDate,
  RenderJobType,
  StaffColumns,
} from './staff-columns';
import { FilterButton } from '@/components/table/filter-button';
import { FilterType } from '@/components/table/filter-type';
import { StaffCount } from '@/dashboard/_components/ui/staff-count';
import { TableCard } from '@/components/table/table-card';
import { EmployeeCellActions } from './employee-cell-actions';

export const StaffTable = () => {
  const router = useRouter();

  const [jobType, setJobType] = useState('');

  const { pageNum, search } = useQueryParams();

  const query = useStaff({
    pageNum,
    search,
    jobType,
  });

  return (
    <div className='space-y-10'>
      <Heading totalCount={query.data?.data?.totalCount} />

      <QueryWrapper
        query={query}
        isSearching={!!search}
        isFiltered={!!jobType}
      >
        {({ data, isPlaceholderData, pageSize, totalCount }) => (
          <>
            <StaffTableFilter
              disabled={isPlaceholderData}
              setType={setJobType}
              type={jobType}
            />

            <DataTable data={data} columns={StaffColumns}>
              <TableItem className='hidden mdl:table' />
            </DataTable>

            <div className='flex flex-col mt-5 space-y-5 mdl:hidden'>
              {data?.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  onClick={() =>
                    router.push(
                      ROUTES.ADMIN.STAFF.STAFF_ID(item?.id || '')
                    )
                  }
                />
              ))}
            </div>

            <Pagination
              pageNumber={pageNum}
              pageSize={pageSize}
              totalCount={totalCount}
              disabled={isPlaceholderData}
            />
          </>
        )}
      </QueryWrapper>
    </div>
  );
};

const Heading = ({ totalCount }) => {
  return (
    <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap mdl:flex-row items-start mdl:items-center gap-4 mdl:gap-6'>
      <div className='flex gap-1 items-end'>
        <SectionTitle>الموظفين</SectionTitle>
        <StaffCount>{totalCount}</StaffCount>
      </div>
      <Link href={ROUTES.ADMIN.STAFF.STAFF_ADD}>
        <AddButton>اضافة موظف</AddButton>
      </Link>
    </div>
  );
};

const StaffTableFilter = ({
  type = '',
  setType = () => {},
  disabled = false,
}) => {
  return (
    <div className='flex flex-col mdl:flex-row gap-y-4 mdl:gap-x-6 mb-5'>
      <FilterType>فلتر بالنوع:</FilterType>

      <div className='flex *:flex-1 mdl:*:flex-none'>
        <FilterButton
          onClick={() => setType('')}
          aria-pressed={type === ''}
          disabled={disabled}
        >
          الكل
        </FilterButton>

        <FilterButton
          onClick={() => setType('1')}
          aria-pressed={type === '1'}
          disabled={disabled}
        >
          طبيب
        </FilterButton>

        <FilterButton
          onClick={() => setType('2')}
          aria-pressed={type === '2'}
          disabled={disabled}
        >
          اخصائي
        </FilterButton>

        <FilterButton
          onClick={() => setType('3')}
          aria-pressed={type === '3'}
          disabled={disabled}
        >
          محاسب
        </FilterButton>

        <FilterButton
          onClick={() => setType('4')}
          aria-pressed={type === '4'}
          disabled={disabled}
        >
          سكرتير
        </FilterButton>
      </div>
    </div>
  );
};

const CardItem = ({ item = {}, onClick = () => {} }) => {
  const firstName = item?.firstName || '';
  const lastName = item?.lastName || '';
  const fullName = `${firstName} ${lastName}`;

  return (
    <TableCard>
      <TableCard.Container role='button' onClick={onClick}>
        <TableCard.Body>
          <div className='flex-1 space-y-3'>
            <div className='grid grid-cols-2 gap-5'>
              <span>الاسم</span>
              <span className='font-bold'>{fullName}</span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>البريد الالكتروني</span>
              <span className='font-bold'>{item?.emailaddress}</span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>الوظيفة</span>
              <span className='font-bold'>
                <RenderJobType jobType={item?.jobType} />
              </span>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <span>تاريخ الانضمام</span>
              <span className='font-bold'>
                <CellDate date={item?.created} />
              </span>
            </div>
          </div>

          <TableCard.Action>
            <EmployeeCellActions id={item?.id} />
          </TableCard.Action>
        </TableCard.Body>
      </TableCard.Container>
    </TableCard>
  );
};
