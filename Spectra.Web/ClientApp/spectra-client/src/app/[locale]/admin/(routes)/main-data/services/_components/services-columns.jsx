import { useDate } from '@/hooks/use-date';
import { CellActions } from './cell-actions';
import { cn, formatCurrency } from '@/lib/utils';

export const servicesColumns = [
  {
    accessorKey: 'arName',
    header: 'الاسم بالعربي',
  },
  {
    accessorKey: 'enName',
    header: 'الاسم بالنجليزي',
  },
  {
    accessorKey: 'created',
    header: 'تاريخ الاضافة ',
    cell: ({ getValue }) => <CellDate date={getValue()} />,
  },
  {
    accessorKey: 'serviceType',
    header: 'نوع الخدمة',
    cell: ({ getValue }) => (
      <CellStatus status={getValue()} />
    ),
  },
  {
    accessorKey: 'price',
    header: 'رسوم الخدمة',
    cell: ({ getValue }) =>
      formatCurrency(getValue(), 'SAR'),
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];

const CellDate = ({ date }) => {
  const { fullYear } = useDate(date);

  return fullYear;
};

const CellStatus = ({ status }) => {
  const { label, variant } = getLabelAndVariant({ status });

  return <Status variant={variant}>{label}</Status>;
};

const Status = ({ variant, children }) => {
  return (
    <span
      className={cn(
        'bg-blueLighter rounded-xl px-4 py-1 text-xs md:text-base font-bold text-greenMain text-center',
        variant === 'purple' && 'text-purple bg-purple/10'
      )}
    >
      {children}
    </span>
  );
};

function getLabelAndVariant({ status }) {
  const variant = String(status) === '1' ? 'purple' : '';
  const label = String(status) === '1' ? 'داخلية' : 'تعرض';

  return {
    label,
    variant,
  };
}
