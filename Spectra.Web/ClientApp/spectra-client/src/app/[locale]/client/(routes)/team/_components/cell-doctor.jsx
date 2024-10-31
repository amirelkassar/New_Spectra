'use client';

import { useRouter } from '@/navigation';

import Avatar from '@/components/avatar';
import ROUTES from '@/routes';

export const CellDoctor = ({ row }) => {
  const router = useRouter();
  if (!row) return null;
  const id = row.original?.id;
  const doctor = row.original?.doctor;
  const avatar = row.original?.avatar;
  return (
    <div
      role='button'
      onClick={() =>
        router.push(
          ROUTES.CLIENT.TEAM.VIEW_DOCTOR.replace(':id', id)
        )
      }
      className='flex items-center gap-5 w-full min-w-max'
    >
      <Avatar
        name={doctor}
        src={avatar}
        className='lg:size-14 size-10'
      />
      <span className='font-bold'>{doctor}</span>
    </div>
  );
};
