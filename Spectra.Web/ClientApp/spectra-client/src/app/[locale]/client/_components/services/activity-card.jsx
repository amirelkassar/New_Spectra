import CircularProgress from '@/components/CircularProgress';
import Card from '@/components/card';

export const ActivityCard = ({
  label = '',
  done = 20,
  total = 30,
  percentage = 70,
}) => {
  return (
    <Card
      className='flex flex-col border-2 border-grayLight mdl:border-transparent gap-2 w-auto'
      size='sm'
    >
      {/* PROGRESS */}
      <div className='flex items-center flex-1 flex-col gap-2'>
        <div className='mdl:size-20 size-14'>
          <CircularProgress
            percentage={percentage}
            text={`${percentage}%`}
          />
        </div>

        <h4 className='mdl:text-xl xl:text-2xl flex-1 text-center text-base text-black font-normal'>
          {label}
        </h4>
      </div>

      {/* INFO */}
      <div className='flex flex-col text-center gap-3 *:shrink-0'>
        <div>
          <span className='text-black text-2xl mdl:text-3xl font-bold'>
            {done}
          </span>
          <span className='text-grayDark text-sm mdl:text-medium font-bold'>
            /{total}
          </span>
        </div>
        <div>
          <p className='mdl:text-base text-xs shrink-0 font-normal text-greenMain'>
            <span className='text-grayDark inline-block me-1 text-xs w-fit'>
              ماتم انجازه
            </span>
            <span>{done} كشف</span>
            <span className='inline-block size-[12.68px] rotate-[35deg]'>
              &#8593;
            </span>
          </p>
          <p className='mdl:text-base text-xs shrink-0 font-normal text-greenMain'>
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
