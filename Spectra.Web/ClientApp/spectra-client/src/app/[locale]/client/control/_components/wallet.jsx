import DollarCircle from '@/assets/icons/dollar-circle';
import UpDown from '@/assets/icons/up-down';
import Button from '@/components/button';
import { GradientCard } from '@/components/gradient-card';

const DATA = [
  {
    label: 'المستخدم',
    value: 5.455,
    currancy: '$',
  },
  {
    label: 'إيداع',
    value: 5.455,
    currancy: '$',
  },
  {
    label: 'عدد التحويلات',
    value: 50,
    currancy: '',
  },
];

export const Wallet = () => {
  return (
    <section>
      <h3 className='font-bold text-sm mdl:text-2xl'>
        رصيدي
      </h3>

      <GradientCard className='space-y-7'>
        <div className='flex items-center flex-col mdl:flex-row mdl:flex-nowrap mdl:justify-between gap-5'>
          <div className='flex items-center gap-3 shrink-0'>
            <DollarCircle />
            <p className='text-sm mdl:text-xl'>
              الرصيد الحالي
            </p>
            <span className='text-2xl mdl:text-3xl font-bold !ms-10'>
              $ 274.192
            </span>
          </div>

          <div className='w-full max-w-80 shrink'>
            <Button
              variant='secondary'
              className='font-bold text-sm mdl:text-xl py-2 w-full'
            >
              إيداع في المحفظة
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-5'>
          {DATA.map((d, i) => (
            <StatusCard key={i} {...d} />
          ))}
        </div>
      </GradientCard>
    </section>
  );
};

const StatusCard = ({
  label = '',
  value = '',
  currancy = '',
}) => {
  return (
    <div
      style={{
        boxShadow: '7px 8px 12.6px -2px #10B0C11A',
      }}
      className='bg-blueLight rounded-2xl gap-5 flex flex-col items-center p-3'
    >
      <UpDown className='size-6 mdl:size-7' />
      <p className='text-xs mdl:text-base'>{label}</p>
      <span className='text-sm mdl:text-xl font-bold'>
        {currancy} {value}
      </span>
    </div>
  );
};
