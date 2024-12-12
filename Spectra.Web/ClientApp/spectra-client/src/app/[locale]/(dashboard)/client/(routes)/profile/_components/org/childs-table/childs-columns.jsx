'use client';

import ThreeDotsIcon from '@/assets/icons/three-dots';
import { CellName } from './cell-name';

export const childsColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم',
    cell: ({ row }) => <CellName row={row} />,
  },
  {
    accessorKey: 'age',
    header: 'العمر',
  },
  {
    accessorKey: 'diagnosis',
    header: 'التشخيص',
  },
  {
    accessorKey: 'gender',
    header: 'الجنس',
  },
  {
    accessorKey: 'nationalId',
    header: 'الرقم القومي',
  },
  {
    id: 'actions',
    cell: () => <ThreeDotsIcon />,
  },
];
