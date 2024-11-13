'use client';

import { useRouter } from '@/navigation';

import Avatar from '@/components/avatar';
import ROUTES from '@/routes';

export const CellName = ({ row }) => {
  const router = useRouter();
  if (!row) return null;
  const id = row.original?.id;
  const name = row.original?.name;
  const avatar = row.original?.avatar;
  return (
    <div
      role='button'
      onClick={() =>
        router.push(
          ROUTES.CLIENT.PROFILE.VIEW_ORG_CHILD.replace(
            ':id',
            id
          )
        )
      }
      className='flex items-center gap-5 w-full min-w-max'
    >
      <Avatar
        name={name}
        src={avatar}
        className='lg:size-14 size-10'
      />
      <span className='font-bold'>{name}</span>
    </div>
  );
};
