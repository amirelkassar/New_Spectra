'use client';

import ThreeDotsIcon from '@/assets/icons/three-dots';
import { CellName } from './cell-name';

export const clientsColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم',
    cell: ({ row }) => <CellName row={row} />,
  },
  {
    accessorKey: 'childs',
    header: 'عدد الاطفال',
  },
  {
    accessorKey: 'email',
    header: 'الايميل',
  },
  {
    accessorKey: 'type',
    header: 'النوع',
  },
  {
    id: 'actions',
    cell: () => <ThreeDotsIcon />,
  },
];
