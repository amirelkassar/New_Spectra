import { useRouter } from '@/i18n/routing';
import { CellActions } from './cell-actions';
import ROUTES from '@/routes';

export const DepartmentColumns = [
  {
    accessorKey: 'arName',
    header: 'الاسم باللغة بالعربية',
    cell: ({ row }) => (
      <CellArName value={row.original.arName} id={row.original.id} />
    ),
  },
  {
    accessorKey: 'enName',
    header: 'الاسم باللغة الانجليزية',
  },
  {
    accessorKey: 'specsifications',
    header: 'عدد التخصصات',
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

const CellArName = ({ value, id }) => {
  const router = useRouter();

  return (
    <div
      role='button'
      onClick={() => {
        if (!id) return;
        router.push(ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILS(id));
      }}
    >
      {value}
    </div>
  );
};
