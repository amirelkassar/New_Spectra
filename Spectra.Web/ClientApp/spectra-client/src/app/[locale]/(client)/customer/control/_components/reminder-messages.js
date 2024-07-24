import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import Card from '@/components/card';
import React from 'react';

export const ReminderMessages = () => {
  const data = [
    {
      title: 'كشف 2',
      subtitle: 'كشف ابنى محمد مع الدكتور احمد ',
      time: '10:30',
      date: '10/10/2021',
    },
    {
      title: 'كشف 2',
      subtitle: 'كشف ابنى محمد مع الدكتور احمد ',
      time: '10:30',
      date: '10/10/2021',
    },
    {
      title: 'كشف 2',
      subtitle: 'كشف ابنى محمد مع الدكتور احمد ',
      time: '10:30',
      date: '10/10/2021',
    },
  ];
  return (
    <Card title='رسائل التذكير'>
      <button className='absolute top-1 left-1 mdl:top-5 mdl:left-5'>
        <PlusInsideCircleIcon className='size-8' />
      </button>

      {data.map((item, index) => (
        <Medical key={'ReminderMessages' + index} {...item} />
      ))}
    </Card>
  );
};

const Medical = ({ title = '', subtitle = '', time = '', date = '' }) => {
  return (
    <div className='w-full py-4 last:border-transparent border-b-2 border-grayLight text-black flex items-center gap-5'>
      {/* INFO */}
      <div className='flex-1'>
        <h4 className='text-sm mdl:text-medium font-bold'>{title}</h4>
        <p className='text-xs mdl:text-base font-normal'>{subtitle}</p>
      </div>

      {/* TIME */}
      <span className='text-xs text-grayDark mdl:text-base'>{time}</span>

      {/* DATE */}
      <span className='text-xs text-grayDark mdl:text-base'>{date}</span>
    </div>
  );
};
