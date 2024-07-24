import CircularProgress from '@/components/CircularProgress';
import Card from '@/components/card';

export const ActivityCards = () => {
  const data = [
    {
      label: 'الكشوفات',
      done: 20,
      total: 30,
      percentage: Math.ceil((20 / 30) * 100),
    },
    {
      label: 'الجلسات',
      done: 10,
      total: 30,
      percentage: Math.ceil((10 / 30) * 100),
    },
    {
      label: 'المتابعات',
      done: 25,
      total: 30,
      percentage: Math.ceil((25 / 30) * 100),
    },
  ];
  return (
    <div className='flex gap-5 overflow-x-auto mdl:overflow-x-hidden mdl:flex-wrap'>
      {data.map((item, index) => (
        <Activity key={'activity-card' + index} {...item} />
      ))}
    </div>
  );
};

const Activity = ({ label = '', done = 20, total = 30, percentage = 70 }) => {
  return (
    <Card className='space-y-2' size='sm'>
      {/* PROGRESS */}
      <div className='flex items-center'>
        <div className='mdl:size-20 size-14'>
          <CircularProgress percentage={percentage} />
        </div>

        <h4 className='mdl:text-2xl max-w-[120px] flex-1 text-center text-base text-black font-normal'>
          {label}
        </h4>
      </div>

      {/* INFO */}
      <div className='flex items-center gap-3'>
        <div>
          <span className='text-black text-2xl mdl:text-3xl font-bold'>
            {done}
          </span>
          <span className='text-grayDark text-sm mdl:text-medium font-bold'>
            /{total}
          </span>
        </div>
        <p className='mdl:text-base text-xs shrink-0 font-normal text-[#0A9D4C]'>
          <span className='text-grayDark text-xs w-fit'>ماتم انجازه </span>
          <span>{done} كشف</span>
          <span className='inline-block size-[12.68px] rotate-[35deg]'>
            &#8593;
          </span>
        </p>
      </div>
    </Card>
  );
};
