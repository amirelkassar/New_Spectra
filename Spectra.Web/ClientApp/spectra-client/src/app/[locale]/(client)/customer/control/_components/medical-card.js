'use client';

import BarsIcon from '@/assets/icons/bars';
import CalenderIcon from '@/assets/icons/calender';
import PhoneIcon from '@/assets/icons/phone';
import clsx from 'clsx';

export const MedicalCards = () => {
  const data = [
    {
      label: 'الوصفات الطبية',
      number: 1002,
      percentage: 40,
      icon: <BarsIcon className='w-5 mdl:w-auto' />,
      color: 'bg-red/10',
    },
    {
      label: 'الاستشارات',
      number: 1002,
      percentage: 40,
      icon: <PhoneIcon className='w-5 mdl:w-auto' />,
      color: 'bg-purple/10',
    },
    {
      label: 'المواعيد',
      number: 1250,
      percentage: -10,
      icon: <CalenderIcon className='w-5 mdl:w-auto' />,
      color: 'bg-greenMain/10',
    },
  ];
  return (
    <div className='flex items-center gap-3 overflow-x-auto mdl:overflow-x-hidden mdl:flex-wrap my-5 w-full'>
      {data.map((item, index) => (
        <Card key={'medical-card' + index} {...item} />
      ))}
    </div>
  );
};

const Card = ({
  icon = '',
  color = '',
  label = '',
  number = 0,
  percentage = 0,
}) => {
  return (
    <div
      style={{
        boxShadow: '0px 4px 12px 0px #0000000A',
      }}
      className='bg-white flex-1 w-fit max-w-full space-y-3 py-3 px-8 rounded-[10px] min-w-[213px] mdl:min-w-max'
    >
      {/* ICON AND LABEL */}
      <div className='flex items-center gap-x-3'>
        {/* ICON */}
        <div
          className={`size-10 shrink-0 mdl:size-16 rounded-full flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
        {/* LABEL */}
        <h3 className='text-black mdl:text-medium text-sm font-normal'>
          {label}
        </h3>
      </div>

      {/* NUMBER AND PERCENTAGE INFO */}
      <div className='flex items-center gap-x-3'>
        {/* NUMBER */}
        <p className='text-black mdl:text-[28px] leading-10 text-base font-bold'>
          {number.toLocaleString('en-US')}
        </p>
        {/* PERCENTAGE */}

        <p
          className={`text-xs w-full shrink-0 font-normal ${
            percentage > 0 ? 'text-[#0A9D4C]' : 'text-red'
          }`}
        >
          <span className='text-grayDark'>الاسبوع السابق </span>%{percentage}
          <span
            className={clsx('inline-block size-[12.68px]', {
              'rotate-[135deg]': percentage < 0,
              'rotate-[35deg]': percentage > 0,
            })}
          >
            &#8593;
          </span>
        </p>
        {/* INFO */}
      </div>
    </div>
  );
};
