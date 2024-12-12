import PillsIcon from '@/assets/icons/pills';
import ActionMenu from './ActionMenu-prescriptions';

export const columns = [
  {
    accessorKey: 'therapy',
    header: 'الاسم ',
    id: 'therapy',
    cell: ({ getValue }) => {
      const name = getValue();
      return (
        <div className='flex items-center gap-6'>
          <div className='flex bg-blueLight size-[38px] rounded-full items-center justify-center p-1'>
            <PillsIcon className='text-greenMain' />
          </div>
          <h2 className='text-[12px] lg:text-base'>{name}</h2>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: 'التاريخ',
    id: 'date',
  },
  {
    accessorKey: 'nameFamily',
    header: 'المريض',
    id: 'nameFamily',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
