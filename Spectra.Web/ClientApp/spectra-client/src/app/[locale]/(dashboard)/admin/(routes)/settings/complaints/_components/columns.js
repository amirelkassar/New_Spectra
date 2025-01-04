import LinkGreen from '@/components/linkGreen';
import StatusComplaints from './statusComplaints';
import Image from 'next/image';

export const Columns = [
  {
    accessorKey: 'complaintNumber',
    header: 'رقم الشكوى',
    cell: ({ getValue, row }) => {
      const complaintNumber = getValue();
      const img = row.original.image;

      return (
        <div className='flex items-center gap-2'>
          <Image
            src={img}
            alt={complaintNumber}
            width={80}
            height={80}
            className=' size-10 rounded-full object-cover object-top'
          />
          <h3>{complaintNumber}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'الاسم ',
  },
  {
    accessorKey: 'complaintType',
    header: 'نوع الشكوى ',
  },
  {
    accessorKey: 'date',
    header: 'تاريخ الشكوى ',
  },
  {
    accessorKey: 'status',
    header: 'الحالة ',
    cell: ({ getValue }) => {
      const status = getValue();
      return <StatusComplaints title={status} />;
    },
  },

  {
    id: 'actions',
    cell: () => {
      return (
        <div className='flex items-center justify-end'>
          <LinkGreen className='w-[120px] h-12 font-Bold' href='#'>
            عرض
          </LinkGreen>
        </div>
      );
    },
  },
];
