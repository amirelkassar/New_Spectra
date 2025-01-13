'use client';

import { CellDate } from './cell-date';
import { CellActions } from './cell-actions';
import { CellStatus } from './cell-status';
import { Translate } from '@/components/translate';

export const clientsScheduleColumns = [
  {
    accessorKey: 'name',
    header: () => <Translate value='name' />,
  },
  {
    accessorKey: 'childName',
    header: () => <Translate value='child_name' />,
  },
  {
    accessorKey: 'sessionType',
    header: () => <Translate value='session_type' />,
  },
  {
    accessorKey: 'date',
    header: () => <Translate value='date' />,
    cell: ({ getValue }) => <CellDate date={getValue()} />,
  },
  {
    accessorKey: 'time',
    header: () => <Translate value='time' />,
    cell: ({ getValue }) => <CellDate date={getValue()} />,
  },
  {
    accessorKey: 'status',
    header: () => <Translate value='status' />,
    cell: ({ getValue }) => <CellStatus status={getValue()} />,
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
