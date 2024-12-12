'use client';

import { MakeAppointment } from './make-appointment';
import { CellRate } from './cell-rate';
import { CellDoctor } from './cell-doctor';

export const teamColumns = [
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
    cell: () => <MakeAppointment />,
  },
];
