'use client';

import { useDate } from '@/hooks/use-date';
import { EmployeeCellActions } from './employee-cell-actions';
import { useRouter } from '@/i18n/routing';
import { RenderJobType } from '@/dashboard/_components/staff/render-job-type';
import ROUTES from '@/routes';

export const StaffColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم ',
    cell: ({ row }) => <CellName row={row} />,
  },
  {
    accessorKey: 'emailaddress',
    header: 'البريد الالكتروني',
  },
  {
    accessorKey: 'jobType',
    header: 'الوظيفة',
    cell: ({ row }) => (
      <RenderJobType jobType={row.original?.jobType} />
    ),
  },
  {
    accessorKey: 'created',
    header: ' تاريخ الانضمام',
    cell: ({ getValue }) => <CellDate date={getValue()} />,
  },
  {
    id: 'actions',
    cell: ({ row }) => <EmployeeCellActions id={row.original?.id} />,
  },
];

export const CellDate = ({ date }) => {
  const { fullYear } = useDate(date);

  return fullYear;
};

const CellName = ({ row }) => {
  const router = useRouter();

  if (!row || !row.original) return null;

  const firstName = row.original?.firstName || '';
  const lastName = row.original?.lastName || '';
  const id = row.original?.id || '';

  return (
    <div
      role='button'
      onClick={() => router.push(ROUTES.ADMIN.STAFF.STAFF_ID(id))}
    >
      {firstName} {lastName}
    </div>
  );
};
