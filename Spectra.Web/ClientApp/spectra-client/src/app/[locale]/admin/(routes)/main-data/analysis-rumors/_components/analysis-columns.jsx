import AnalysisIcon from '@/assets/icons/analysis';
import RumorsIcon from '@/assets/icons/rumors';
import { CellActions } from './cell-actions';

export const AnalysisColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم',
    cell: ({ row }) => (
      <NameAndIconCell
        name={row.original?.name}
        type={row.original?.examinationTypes}
      />
    ),
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

const NameAndIconCell = ({ name, type }) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex bg-blueLight size-6 md:size-10 rounded-full items-center justify-center shrink-0 group-hover:bg-white'>
        {type === 1 ? (
          <AnalysisIcon className='text-greenMain size-3 md:size-5' />
        ) : (
          <RumorsIcon className='text-greenMain size-3 md:size-5' />
        )}
      </div>
      <h3 className='font-Bold'>{name}</h3>
    </div>
  );
};
