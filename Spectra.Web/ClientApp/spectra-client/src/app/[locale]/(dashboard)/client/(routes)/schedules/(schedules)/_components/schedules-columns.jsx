'use client';

import { CellDate } from './cell-date';
import { CellActions } from './cell-actions';
import { CellStatus } from './cell-status';

export const schedulesColumns = [
  {
    accessorKey: 'label',
    header: () => <Header />,
  },
  {
    accessorKey: 'doctor',
    header: 'اسم الاخصائى',
    cell: ({ row }) => (
      <Doctor
        name={row.original.doctor}
        proffession={row.original.doctorProffession}
      />
    ),
  },
  {
    accessorKey: 'child',
    header: 'اسم الطفل',
  },
  {
    accessorKey: 'date',
    header: 'الميعاد',
    cell: ({ getValue }) => <CellDate date={getValue()} />,
  },
  {
    accessorKey: 'status',
    header: () => (
      <span className='block text-center'>الحالة</span>
    ),
    cell: ({ getValue }) => (
      <CellStatus status={getValue()} />
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];

const Header = () => {
  return (
    <>
      رقم الكشف/
      <br />
      جلسة
    </>
  );
};

const Doctor = ({ name, proffession }) => {
  return (
    <>
      {name} <br /> {proffession}
    </>
  );
};
