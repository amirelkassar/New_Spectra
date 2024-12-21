'use client';

import { useRouter } from '@/i18n/routing';

import Avatar from '@/components/avatar';
import { useImagePath } from '@/hooks/use-image-path';
import ROUTES from '@/routes';

export const CellName = ({ row }) => {
  const router = useRouter();

  const avatar = row.original?.imagePath;
  const path = useImagePath(avatar);

  const id = row.original?.id;
  const name = row.original?.employeeName;

  if (!name || !id) return null;
  return (
    <div
      role='button'
      onClick={() =>
        router.push(ROUTES.ADMIN.CONTRACTS.VIEW_CONTRACT(id))
      }
      className='flex items-center gap-5 w-full min-w-max'
    >
      <Avatar name={name} src={path} className='lg:size-14 size-10' />
      <span className='font-bold'>{name}</span>
    </div>
  );
};
