'use client';

import { ColumnDef } from '@tanstack/react-table';

import { formatCurrency } from '@/lib/utils';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import MessageIconGreenMain from '@/assets/icons/message-green';
import StarGoldIcon from '@/assets/icons/starGold';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MedicalTeamTableData = {
  id: string;
  doctor: string;
  profession: string;
  avatar: string;
  rate: number;
  cost: number;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: 'doctor',
    header: 'الطبيب',
    cell: ({ getValue, row }) => {
      const doctor = getValue<string>();
      const avatar = row.original.avatar;
      return (
        <div className='lg:flex items-center gap-5 w-full min-w-max'>
          <Avatar
            name={doctor}
            src={avatar}
            className='hidden lg:block size-14'
          />
          <span className='text-black font-bold text-xs'>{doctor}</span>
        </div>
      );
    },
  },

  {
    accessorKey: 'profession',
    header: 'التخصص',
  },
  {
    accessorKey: 'rate',
    header: 'التقييم',
    cell: ({ getValue }) => {
      const rate = getValue<number>();
      return (
        <span className='flex items-center gap-1 text-grayDark'>
          <span className='mt-0.5'>{rate}</span>
          <StarGoldIcon />
        </span>
      );
    },
  },
  {
    accessorKey: 'cost',
    header: 'السعر',
    cell: ({ getValue }) => formatCurrency(getValue<number>() || 0),
  },
  {
    id: 'message',
    cell: () => (
      <span className='lg:size-14 size-8 rounded-full bg-blueLight flex items-center justify-center'>
        <MessageIconGreenMain className='size-4 lg:size-7' />
      </span>
    ),
  },
  {
    id: 'action',
    cell: () => (
      <Button variant='secondary' className='px-2 py-1 rounded-lg'>
        <span>
          حجز <span className='hidden lg:inline'>ميعاد</span>
        </span>
      </Button>
    ),
  },
];
