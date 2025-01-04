import { formatCurrency } from '@/lib/utils';
import { CellActions } from './cell-actions';
import { useRouter } from '@/i18n/routing';
import ROUTES from '@/routes';

export const SpecialtiesColumns = [
  {
    accessorKey: 'arName',
    header: 'الاسم بالعربي',
    cell: ({ row }) => (
      <CellArName value={row.original.arName} id={row.original.id} />
    ),
  },
  {
    accessorKey: 'enName',
    header: 'الاسم بالانجليزي',
  },
  {
    accessorKey: 'code',
    header: 'كود التخصص',
    cell: ({ getValue }) => getValue() || '--',
  },
  {
    accessorKey: 'consultationCost',
    header: 'تكلفة',
    cell: ({ getValue }) => {
      return formatCurrency(getValue(), ' ر.س');
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

const CellArName = ({ value, id }) => {
  const router = useRouter();

  return (
    <div
      role='button'
      onClick={() => {
        if (!id) return;
        router.push(ROUTES.ADMIN.DATAMAIN.SPECIALTIESID(id));
      }}
    >
      {value}
    </div>
  );
};
