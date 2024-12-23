import { CellActions } from './cell-actions';

export const DepartmentColumns = [
  {
    accessorKey: 'arName',
    header: 'الاسم باللغة بالعربية',
  },
  {
    accessorKey: 'enName',
    header: 'الاسم باللغة الانجليزية',
  },
  {
    accessorKey: 'specsifications',
    header: 'عدد التخصصات ',
    cell: ({ getValue }) => getValue()?.length,
  },
  {
    accessorKey: 'headDoctorName',
    header: 'رئيس القسم',
    cell: ({ getValue }) => (
      <span className='capitalize'>{getValue()}</span>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];
