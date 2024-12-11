'use client';

import { useRouter } from '@/i18n/routing';

import ROUTES from '@/routes';

export const CellName = ({ row }) => {
  const router = useRouter();
  if (!row) return null;
  const id = row.original?.id;
  const name = row.original?.name;
  return (
    <div
      role='button'
      onClick={() =>
        router.push(
          ROUTES.CLIENT.PROFILE.VIEW_ORG_CLIENT.replace(':id', id)
        )
      }
      className='font-bold'
    >
      {name}
    </div>
  );
};
