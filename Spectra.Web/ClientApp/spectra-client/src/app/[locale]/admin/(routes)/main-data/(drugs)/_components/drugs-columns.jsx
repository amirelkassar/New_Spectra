'use client';

import Image from 'next/image';

import { CellActions } from './cell-actions';
import { useImagePath } from '@/hooks/use-image-path';

export const DrugsColumns = [
  {
    accessorKey: 'name',
    header: 'اسم العقار',
    id: 'name',
    cell: ({ row }) => (
      <ImageAndNameCell
        name={row.original?.name}
        image={row.original?.imagePath}
      />
    ),
  },
  {
    accessorKey: 'activeIngredient',
    header: 'المادة الفعالة',
    id: 'activeIngredient',
  },
  {
    accessorKey: 'type',
    header: 'النوع',
    id: 'type',
  },
  {
    accessorKey: 'code',
    header: 'الكود',
    id: 'code',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <CellActions id={id} />;
    },
  },
];

const ImageAndNameCell = ({ name, image }) => {
  const src = useImagePath(image);

  return (
    <div className='items-center gap-2 lg:gap-5 flex'>
      <div className='size-7 lg:size-12 flex items-center overflow-hidden'>
        {src && (
          <Image
            src={src}
            alt={name}
            width={49}
            height={51}
            className='w-full h-auto object-center object-contain max-w-full max-h-full shrink-0'
          />
        )}
      </div>
      <h3 className='font-bold text-xs md:text-base flex-1'>
        {name}
      </h3>
    </div>
  );
};
