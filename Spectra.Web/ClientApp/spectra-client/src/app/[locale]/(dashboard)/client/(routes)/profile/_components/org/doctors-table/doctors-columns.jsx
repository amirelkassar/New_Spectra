'use client';

import { CellRate } from './cell-rate';
import { CellDoctor } from './cell-doctor';
import ThreeDotsIcon from '@/assets/icons/three-dots';

export const doctorsColumns = [
  {
    accessorKey: 'doctor',
    header: 'الطبيب',
    cell: ({ row }) => <CellDoctor row={row} />,
  },
  {
    accessorKey: 'profession',
    header: 'التخصص',
  },
  {
    accessorKey: 'rate',
    header: 'التقييم',
    cell: ({ getValue }) => <CellRate rate={getValue()} />,
  },
  {
    accessorKey: 'exp',
    header: 'سنوات الخبرة',
  },
  {
    id: 'actions',
    cell: () => <ThreeDotsIcon />,
  },
];
