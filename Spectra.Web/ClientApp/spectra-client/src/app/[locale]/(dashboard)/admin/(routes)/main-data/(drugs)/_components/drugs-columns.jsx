'use client';

import Image from 'next/image';

import { CellActions } from './cell-actions';
import { useImagePath } from '@/hooks/use-image-path';
import { useRouter } from '@/i18n/routing';
import ROUTES from '@/routes';

export const DrugsColumns = [
  {
    accessorKey: 'name',
    header: 'اسم العقار',
    id: 'name',
    cell: ({ row }) => (
      <ImageAndNameCell
        name={row.original?.name}
        image={row.original?.imagePath}
        id={row.original?.id}
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

const ImageAndNameCell = ({ name, image, id }) => {
  const router = useRouter();

  const src = useImagePath(image);

  return (
    <div
      onClick={() => {
        if (!id) return;
        router.push(ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(id));
      }}
      role='button'
      className='items-center gap-2 lg:gap-5 flex'
    >
      <div className='size-7 mdl:size-12 flex items-center overflow-hidden shrink-0'>
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
