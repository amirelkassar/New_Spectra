import MenuActions from '@/components/menu-actions';
import Statue from '@/components/status';
import Image from 'next/image';
import ReportDecIcon from '@/assets/icons/reportDec';
import LinkGreen from '@/components/linkGreen';
import VideoSessionIcon from '@/assets/icons/videoSession';
export const columns = [
  {
    accessorKey: 'name',
    header: 'الاسم ',
    id: 'name',
    cell: ({ getValue, row }) => {
      const name = getValue();
      const image = row.original.image;
      return (
        <div className={' items-center gap-5    flex'}>
          <div className=' size-14 rounded-full bg-red hidden md:flex items-start justify-center overflow-hidden'>
            <Image
              src={image}
              alt={name}
              className='h-full w-full rounded-full object-cover object-top'
            />
          </div>
          <h3 className='font-bold text-[12px] md:text-[16px]'>
            {name}
          </h3>
        </div>
      );
    },
  },
  {
    accessorKey: 'patientName',
    header: 'اسم الطفل ',
    id: 'patientName',
  },
  {
    accessorKey: 'date',
    header: 'التاريخ',
    id: 'date',
  },

  {
    accessorKey: 'time',
    header: 'الـميعاد',
    id: 'time',
  },

  {
    accessorKey: 'type',
    header: 'الحالة',
    id: 'type',

    cell: ({ row }) => {
      const status = row.original.statu;
      const now = row.original.now;
      return (
        <div className='flex  items-center justify-between gap-3'>
          {!now ? (
            <>
              <Statue statue={status} />
              <div
                className={
                  'flex gap-[10px] md:gap-[40px] justify-end items-center '
                }
              >
                <div className=' mx-3 mdl:mx-6'>
                  <div className='flex size-9 mdl:size-[50px] items-center justify-center p-2 mdl:p-3 rounded-[50%] bg-blueLight'>
                    <ReportDecIcon />
                  </div>
                </div>
                <MenuActions />
              </div>
            </>
          ) : (
            <>
              <div>
                <LinkGreen
                  href='#s'
                  className=' max-w-[160px] h-10 mdl:!h-12 text-sm dml:text-xl font-Bold'
                >
                  انضمام
                </LinkGreen>
              </div>
              <div className=' w-[66px] h-[66px] flex items-center justify-center mb-3 ms-auto'>
                <div className='w-[38px] relative h-[38px] rounded-full flex items-center justify-center bg-greenMain'>
                  <div className='w-[66px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 h-[66px] animate-pulse rounded-full flex items-center justify-center bg-[#01003608]'></div>
                  <div className='w-[54px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 h-[56px] rounded-full delay-100 animate-pulse flex items-center justify-center bg-[#0100360A]'></div>
                  <VideoSessionIcon />
                </div>
              </div>
            </>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'patientDiagnosis',
    id: 'patientDiagnosis',
    // This column will be hidden by default
  },
];
