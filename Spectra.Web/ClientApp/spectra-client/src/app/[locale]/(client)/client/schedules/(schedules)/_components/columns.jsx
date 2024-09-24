'use client';

import { ColumnDef } from '@tanstack/react-table';

import ThreeDotsIcon from '@/assets/icons/three-dots';
import { cn } from '@/lib/utils';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns= [
  {
    accessorKey: 'type',
    header: 'رقم الكشف/جلسة',
    cell: ({ getValue, row }) => {
      const type = getValue();
      const id = row.original.id;
      switch (type) {
        case 'session':
          return `جلسة ${id}`;
        case 'appointment':
          return `كشف ${id}`;
        default:
          return type;
      }
    },
  },
  {
    accessorKey: 'doctor',
    header: 'اسم الاخصائى',
  },
  {
    accessorKey: 'child',
    header: 'اسم الطفل',
  },
  {
    accessorKey: 'date',
    header: 'الميعاد',
  },
  {
    accessorKey: 'status',
    header: 'الحالة',
    cell: ({ getValue }) => {
      const status = getValue();
      switch (status) {
        case 'notStarted':
          return <Badge status={status}>لم يبدأ</Badge>;
        case 'processing':
          return <Badge status={status}>جاري</Badge>;
        case 'done':
          return <Badge status={status}>تمت</Badge>;
        default:
          return status;
      }
    },
  },
  {
    id: 'actions',
    cell: () => <ThreeDotsIcon />,
  },
];

const Badge = ({ children, status }) => {
  return (
    <span
      className={cn(
        'bg-grayLight w-full rounded-lg px-1 lg:px-2 py-1 text-black block text-nowrap text-center',
        {
          'bg-blueLight': status === 'processing',
          'bg-greenMain text-white': status === 'done',
        }
      )}
    >
      {children}
    </span>
  );
};
