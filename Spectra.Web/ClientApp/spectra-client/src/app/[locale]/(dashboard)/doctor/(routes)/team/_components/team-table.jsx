'use client';

import { useMemo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';

import { H1 } from '@/dashboard/_components/ui/h1';
import { StaffCount } from '@/dashboard/_components/ui/staff-count';
import { useProfileEmployeeGroups } from '@/hooks/queries/user/employee-groups';
import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { TeamColumns } from './team-columns';
import { TableItem } from '@/dashboard/admin/_components/ui';
import { Pagination } from '@/components/table/pagination';
import { TableCard } from '@/components/table/table-card';
import { useImagePath } from '@/hooks/use-image-path';
import { useQueryParams } from '@/hooks/queries/use-query-params';
import Card from '@/components/card';
import Avatar from '@/components/avatar';
import ROUTES from '@/routes';

export const TeamTable = () => {
  const router = useRouter();

  const { pageNum, search } = useQueryParams();

  const query = useProfileEmployeeGroups();

  const totalCount = useMemo(
    () => query.data?.data?.length || 0,
    [query.data]
  );

  return (
    <Card className='h-full space-y-10'>
      <div className='flex gap-1 items-end'>
        <H1>إدارة الفريق</H1>
        <StaffCount>{totalCount}</StaffCount>
      </div>

      <QueryWrapper query={query} isSearching={!!search}>
        {({ data, isPlaceholderData, pageSize, totalCount }) => (
          <>
            <DataTable data={data} columns={TeamColumns}>
              <TableItem className='hidden mdl:table' />
            </DataTable>

            <div className='flex flex-col mt-5 space-y-5 mdl:hidden'>
              {data?.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  onClick={() =>
                    router.push(
                      ROUTES.DOCTOR.TEAM.VIEW_TEAM(item?.id || '')
                    )
                  }
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
    </Card>
  );
};

const CardItem = ({ item = {}, onClick = () => {} }) => {
  const path = useImagePath(item?.userImage);
  const locale = useLocale();

  const firstName = item?.firstName || '';
  const lastName = item?.lastName || '';

  const doctor = `${firstName} ${lastName}`;

  const specialization =
    locale === 'ar'
      ? item?.mainSpecializationArName
      : item?.mainSpecializationEnName;

  return (
    <TableCard>
      <TableCard.Container role='button' onClick={onClick}>
        <TableCard.Body>
          <div className='flex gap-2'>
            <Avatar name={doctor} src={path} className='size-10' />
            <div className='flex-1 space-y-3'>
              <div className='grid grid-cols-2 gap-5'>
                <span>الاسم</span>
                <span className='font-bold'>{doctor}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>الايميل</span>
                <span className='font-bold'>
                  {item?.emailaddress}
                </span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>التخصص</span>
                <span className='font-bold'>{specialization}</span>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <span>سنوات الخبرة</span>
                <span className='font-bold'>
                  {item?.experienceYears}
                </span>
              </div>
            </div>
          </div>
        </TableCard.Body>
      </TableCard.Container>
    </TableCard>
  );
};
