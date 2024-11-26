import { CellActions } from './cell-actions';

export const SpecialtiesColumns = [
  {
    accessorKey: 'name',
    header: 'التخصص',
  },
  {
    accessorKey: 'code',
    header: 'كود التخصص',
  },
  {
    accessorKey: 'consultationCost',
    header: 'تكلفة',
    cell: ({ getValue }) => {
      return getValue() + ' ر.س';
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];
