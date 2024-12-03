'use client';

import { useDate } from '@/hooks/use-date';
import { EmployeeCellActions } from './employee-cell-actions';

export const StaffColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم ',
    cell: ({ row }) =>
      `${row.original?.firstName} ${row.original?.lastName}`,
  },
  {
    accessorKey: 'emailaddress',
    header: 'الايميل',
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
    cell: ({ row }) => (
      <EmployeeCellActions id={row.original?.id} />
    ),
  },
];

const RenderJobType = ({ jobType }) => {
  switch (String(jobType)) {
    case '1':
      return 'طبيب';
    case '2':
      return 'اخصائي';
    case '3':
      return 'سكرتير';
    case '4':
      return 'محاسب';
  }
};

const CellDate = ({ date }) => {
  const { fullYear } = useDate(date);

  return fullYear;
};
