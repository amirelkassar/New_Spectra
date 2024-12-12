import Card from '@/components/card';
import { AddReminderModal } from '../add-reminder-modal';
import {
  Section,
  SectionTitle,
} from '@/app/[locale]/(dashboard)/client/_components/ui';

export const ReminderMessages = ({ data = [] }) => {
  if (!data.length) return null;
  return (
    <Section id='reminder-messages'>
      <Card>
        <div className='flex items-center justify-between mb-5'>
          <SectionTitle id='reminder-messages'>
            رسائل التذكير
          </SectionTitle>
          <AddReminderModal />
        </div>

        <ul>
          {data?.map((item) => (
            <Message key={item.id} {...item} />
          ))}
        </ul>
      </Card>
    </Section>
  );
};

const Message = ({
  title = '',
  subtitle = '',
  time = '',
  date = '',
}) => {
  return (
    <li className='py-4 last:border-transparent border-b-2 border-grayLight flex items-center gap-3 text-xs mdl:text-base'>
      {/* INFO */}
      <div className='flex-1'>
        <h4 className='text-sm mdl:text-xl font-bold'>{title}</h4>
        <p>{subtitle}</p>
      </div>

      {/* TIME */}
      <span className='text-grayDark'>{time}</span>

      {/* DATE */}
      <span className='text-grayDark'>{date}</span>
    </li>
  );
};
