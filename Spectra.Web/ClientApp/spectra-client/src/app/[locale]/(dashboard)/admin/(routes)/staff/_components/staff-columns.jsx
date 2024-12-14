'use client';

import { useDate } from '@/hooks/use-date';
import { EmployeeCellActions } from './employee-cell-actions';

export const StaffColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم ',
    cell: ({ row }) => {
      const firstName = row.original?.firstName;
      const lastName = row.original?.lastName;

      if (firstName && lastName) {
        return `${firstName} ${lastName}`;
      }

      return firstName;
    },
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
    cell: ({ row }) => <EmployeeCellActions id={row.original?.id} />,
  },
];

const RenderJobType = ({ jobType }) => {
  switch (String(jobType)) {
    case '1':
      return 'طبيب';
    case '2':
      return 'اخصائي';
    case '3':
      return 'محاسب';
    case '4':
      return 'سكرتير';
  }
};

const CellDate = ({ date }) => {
  const { fullYear } = useDate(date);

  return fullYear;
};
