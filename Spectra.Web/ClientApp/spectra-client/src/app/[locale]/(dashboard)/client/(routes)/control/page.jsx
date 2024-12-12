import {
  Container,
  H1,
} from '@/app/[locale]/(dashboard)/client/_components/ui';

import { ChildSelect } from '@/app/[locale]/(dashboard)/client/_components/child';
import {
  MyWallet,
  PerformanceChart,
  Progress,
  ReminderMessages,
  StatisticsCards,
} from './_components/sections';
import {
  CHILDS,
  PROGRESS,
  REMINDER_MESSAGES,
  USAGE_STATISTICS,
} from '@/data';

const ControlPage = () => {
  return (
    <Container>
      <H1 className='mt-3 mdl:mt-0'>ملخص النشاطات</H1>
      <ChildSelect data={CHILDS} />
      <StatisticsCards data={USAGE_STATISTICS} />
      <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
        <PerformanceChart />
        <ReminderMessages data={REMINDER_MESSAGES} />
      </div>
      <Progress data={PROGRESS} />
      <MyWallet />
    </Container>
  );
};

export default ControlPage;
