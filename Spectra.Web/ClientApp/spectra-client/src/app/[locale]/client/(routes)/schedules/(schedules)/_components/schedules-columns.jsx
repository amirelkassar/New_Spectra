'use client';

import IncomingMeet from '@/assets/icons/incoming-meet';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import Button from '@/components/button';
import { StatusBadge } from '@/client/_components/schedules';
import { cn, getDate } from '@/lib/utils';
import { useLocale } from 'next-intl';

export const schedulesColumns = [
  {
    accessorKey: 'label',
    header: () => <Header />,
  },
  {
    accessorKey: 'doctor',
    header: 'اسم الاخصائى',
    cell: ({ row }) => (
      <Doctor
        name={row.original.doctor}
        proffession={row.original.doctorProffession}
      />
    ),
  },
  {
    accessorKey: 'child',
    header: 'اسم الطفل',
  },
  {
    accessorKey: 'date',
    header: 'الميعاد',
    cell: ({ getValue }) => <Date date={getValue()} />,
  },
  {
    accessorKey: 'status',
    header: 'الحالة',
    cell: ({ getValue }) => (
      <StatusBadge
        id={getValue()}
        status={getValue()}
        className={cn(
          'min-w-fit mdl:min-w-fit max-w-28 w-full mx-auto mdl:ms-auto',
          getValue() === 'done' && 'group-hover:bg-white'
        )}
      >
        {getStatus(getValue())}
      </StatusBadge>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];

const Date = ({ date }) => {
  const locale = useLocale();
  const { fullYear, time } = getDate(date, locale);
  return (
    <>
      {fullYear} <br /> {time}
    </>
  );
};

const Header = () => {
  return (
    <>
      رقم الكشف/
      <br />
      جلسة
    </>
  );
};

const Doctor = ({ name, proffession }) => {
  return (
    <>
      {name} <br /> {proffession}
    </>
  );
};

const CellActions = ({ data }) => {
  if (data.status === 'available') return <IncomingMeet />;
  return (
    <div className='flex justify-center items-center'>
      <Button variant='ghost'>
        <ThreeDotsIcon />
      </Button>
    </div>
  );
};

function getStatus(status) {
  switch (status) {
    case 'available':
      return 'انضمام';
    case 'pending':
      return 'لم يتم بعد';
    case 'done':
      return 'تمت';
  }
}
