'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';

import { useImagePath } from '@/hooks/use-image-path';
import Avatar from '@/components/avatar';
import ROUTES from '@/routes';

export const TeamColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم ',
    cell: ({ row }) => <CellDoctor row={row} />,
  },
  {
    accessorKey: 'emailaddress',
    header: 'الايميل',
  },
  {
    accessorKey: 'mainSpecialization',
    header: 'التخصص الرئيسي',
    cell: ({ row }) => <CellSpecialization row={row} />,
  },
  {
    accessorKey: 'experienceYears',
    header: 'سنوات الخبرة',
  },
  {
    id: 'actions',
    cell: () => {},
  },
];

const CellDoctor = ({ row }) => {
  const router = useRouter();
  const path = useImagePath(row?.original?.userImage);

  if (!row || !row.original) return null;

  const id = row.original?.id;
  const firstName = row.original?.firstName || '';
  const lastName = row.original?.lastName || '';
  const doctor = `${firstName} ${lastName}`;
  const avatar = path || '';
  return (
    <div
      role='button'
      onClick={() => router.push(ROUTES.DOCTOR.TEAM.VIEW_TEAM(id))}
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

export const CellSpecialization = ({ row }) => {
  const locale = useLocale();

  if (!row || !row.original) return null;

  const specialization =
    locale === 'ar'
      ? row.original?.mainSpecializationArName
      : row.original?.mainSpecializationEnName;

  return specialization;
};
