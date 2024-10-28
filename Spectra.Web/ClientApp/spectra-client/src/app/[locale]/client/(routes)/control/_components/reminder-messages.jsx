import Card from '@/components/card';
import { AddReminderModal } from './add-reminder-modal';

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

export const ReminderMessages = () => {
  return (
    <section>
      <Card className='h-full'>
        <div className='flex items-center justify-between'>
          <h3 className='font-bold text-sm lg:text-medium text-black'>
            رسائل التذكير
          </h3>
          <AddReminderModal />
        </div>
        {data.map((item, index) => (
          <Medical key={'ReminderMessages' + index} {...item} />
        ))}
      </Card>
    </section>
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
