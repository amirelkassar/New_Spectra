import { CellActions } from './cell-actions';

export const DiagnosticsColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم ',
  },
  {
    accessorKey: 'code1',
    header: 'الكود 1  ',
  },
  {
    accessorKey: 'code2',
    header: 'الكود 2',
  },
  {
    accessorKey: 'code3',
    header: 'الكود 3 ',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];
