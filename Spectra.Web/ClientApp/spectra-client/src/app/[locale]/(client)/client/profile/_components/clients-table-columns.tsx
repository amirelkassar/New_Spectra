'use client';

import { ColumnDef } from '@tanstack/react-table';
import ThreeDotsIcon from '@/assets/icons/three-dots';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ClientsTableData = {
  id: string;
  clientName: string;
  childrensNo: string;
  email: string;
  kind: 'family' | 'firm' | 'medicalProvider';
};

export const columns: ColumnDef<ClientsTableData>[] = [
  {
    accessorKey: 'clientName',
    header: 'الاسم',
  },

  {
    accessorKey: 'childrensNo',
    header: 'عدد الاطفال',
  },
  {
    accessorKey: 'email',
    header: 'الايميل',
  },
  {
    accessorKey: 'kind',
    header: 'النوع',
    cell: ({ getValue }) => {
      const kind = getValue<string>();
      if (kind === 'family') {
        return 'عائلة طفل';
      } else if (kind === 'firm') {
        return 'منظمة';
      } else if (kind === 'medicalProvider') {
        return 'مقدم الخدمة الطبية';
      }
    },
  },

  {
    id: 'action',
    cell: ({ row }) => (
      <div className='w-fit'>
        <ThreeDotsIcon />
      </div>
    ),
  },
];
