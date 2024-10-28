import CircularProgress from '@/components/CircularProgress';
import Card from '@/components/card';

const data = [
  {
    label: 'الكشوفات',
    done: 20,
    total: 30,
    percentage: Math.ceil((20 / 30) * 100),
  },
  {
    label: 'الجلسات التقيمية',
    done: 10,
    total: 30,
    percentage: Math.ceil((10 / 30) * 100),
  },
  {
    label: 'الجلسات العلاجية',
    done: 25,
    total: 30,
    percentage: Math.ceil((25 / 30) * 100),
  },
  {
    label: 'المتابعات',
    done: 25,
    total: 30,
    percentage: Math.ceil((25 / 30) * 100),
  },
];

export const ActivityCards = () => {
  return (
    <section className='space-y-3'>
      <h3 className='font-bold text-sm mdl:text-2xl text-black'>
        طلب الخدمة
      </h3>
      <div className='flex gap-5 overflow-x-auto lg:overflow-x-hidden lg:grid lg:grid-cols-3 xl:grid-cols-4'>
        {data.map((item, index) => (
          <Activity
            key={'activity-card' + index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

const Activity = ({
  label = '',
  done = 20,
  total = 30,
  percentage = 70,
}) => {
  return (
    <Card className='flex flex-col gap-2 w-auto' size='sm'>
      {/* PROGRESS */}
      <div className='flex items-center flex-1 flex-col gap-2'>
        <div className='lg:size-20 size-14'>
          <CircularProgress
            percentage={percentage}
            text={`${percentage}%`}
          />
        </div>

        <h4 className='lg:text-xl xl:text-2xl flex-1 text-center text-base text-black font-normal'>
          {label}
        </h4>
      </div>

      {/* INFO */}
      <div className='flex flex-col text-center gap-3 *:shrink-0'>
        <div>
          <span className='text-black text-2xl lg:text-3xl font-bold'>
            {done}
          </span>
          <span className='text-grayDark text-sm lg:text-medium font-bold'>
            /{total}
          </span>
        </div>
        <div>
          <p className='lg:text-base text-xs shrink-0 font-normal text-greenMain'>
            <span className='text-grayDark inline-block me-1 text-xs w-fit'>
              ماتم انجازه
            </span>
            <span>{done} كشف</span>
            <span className='inline-block size-[12.68px] rotate-[35deg]'>
              &#8593;
            </span>
          </p>
          <p className='lg:text-base text-xs shrink-0 font-normal text-greenMain'>
            <span className='text-grayDark text-xs w-fit inline-block me-1'>
              المتبقي
            </span>
            <span>{total - done} كشف</span>
            <span className='inline-block size-[12.68px] rotate-[35deg]'>
              &#8593;
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};
