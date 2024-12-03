'use client';

import { useState } from 'react';
import { Link } from '@/navigation';

import { AddButton } from '@/components/buttons/add-button';
import {
  SectionTitle,
  TableItem,
} from '@/admin/_components/ui';
import ROUTES from '@/routes';
import StaffIcon from '@/assets/icons/staff';
import { useStaff } from '@/hooks/queries/admin/staff/staff';
import { QueryWrapper } from '@/components/query-wrapper';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { StaffColumns } from './staff-columns';
import { FilterButton } from '@/components/table/filter-button';
import { FilterType } from '@/components/table/filter-type';

export const StaffTable = () => {
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
        {({
          data,
          isPlaceholderData,
          pageSize,
          totalCount,
        }) => (
          <>
            <StaffTableFilter
              disabled={isPlaceholderData}
              setType={setJobType}
              type={jobType}
            />

            <DataTable data={data} columns={StaffColumns}>
              <TableItem />
            </DataTable>

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
      <Link href={ROUTES.ADMIN.STAFF.STAFFADD}>
        <AddButton>إضافة موظف</AddButton>
      </Link>
    </div>
  );
};

const StaffCount = ({ children }) => {
  if (!children) return null;
  return (
    <div className='font-bold text-greenMain text-sm mdl:text-base flex items-center gap-1'>
      <StaffIcon className='fill-greenMain size-3' />
      {children}
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
      <FilterType>فلتر بالنوع :</FilterType>

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
          سكرتير
        </FilterButton>

        <FilterButton
          onClick={() => setType('4')}
          aria-pressed={type === '4'}
          disabled={disabled}
        >
          محاسب
        </FilterButton>
      </div>
    </div>
  );
};
