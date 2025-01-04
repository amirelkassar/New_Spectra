import SessionIcon from '@/assets/icons/session';

export const DoctorStatistics = ({
  licenseNumber = '',
  sessionCount = 0,
}) => {
  return (
    <div className='hidden lg:flex mdl:flex-col gap-5 items-center justify-center border-s-2 border-grayLight ps-5'>
      <div className='flex flex-col gap-1 items-center pb-5 border-b-2 border-grayLight last:pb-0 last:border-b-transparent'>
        <p>رقم الترخيص</p>
        <p className='font-bold text-xl mdl:text-2xl'>
          {licenseNumber}
        </p>
      </div>

      <div className='flex flex-col gap-1 items-center pb-5 border-b-2 border-grayLight last:pb-0 last:border-b-transparent'>
        <div className=' size-8 mdl:size-10 rounded-full bg-blueLighter p-1 flex items-center justify-center'>
          <SessionIcon />
        </div>
        <p className='font-bold text-xl mdl:text-2xl'>
          {sessionCount?.toLocaleString()}
        </p>
        <p>جلسة</p>
      </div>
    </div>
  );
};
