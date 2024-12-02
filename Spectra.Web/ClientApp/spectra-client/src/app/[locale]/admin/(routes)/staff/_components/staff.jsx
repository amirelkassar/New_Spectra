'use client';

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

export const Staff = () => {
  const { pageNum, search } = useQueryParams();

  const query = useStaff({
    pageNum,
    search,
  });

  return (
    <div className='space-y-10'>
      <Heading />

      <QueryWrapper query={query} isSearching={!!search}>
        {({
          data,
          isPlaceholderData,
          pageSize,
          totalCount,
        }) => (
          <>
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

const Heading = () => {
  return (
    <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap mdl:flex-row items-start mdl:items-center gap-4 mdl:gap-6'>
      <div className='flex gap-1 items-end'>
        <SectionTitle>الموظفين</SectionTitle>
        <StaffCount></StaffCount>
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
