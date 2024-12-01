import { CellActions } from './cell-actions';

export const TestsInteriorColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم',
  },
  {
    accessorKey: 'code',
    header: 'الكود ',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];
