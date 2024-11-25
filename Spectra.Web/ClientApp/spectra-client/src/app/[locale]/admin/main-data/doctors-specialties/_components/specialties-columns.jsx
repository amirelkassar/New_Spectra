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
    accessorKey: 'doctorCount',
    header: 'عدد الاطباء في هذا التخصص',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];
