import { Container } from '@/client/_components/ui';
import { ChildSelect } from '@/client/_components/child';
import { CHILDSDATA } from '@/lib/demoData';
import { ScheduleHeader } from './_components/schedule-header';
import { ScheduleNav } from './_components/schedule-nav';

const schedulesPage = ({ children }) => {
  return (
    <Container className='space-y-5'>
      <ScheduleHeader />

      <ChildSelect data={CHILDSDATA} />

      <section className='lg:grid lg:grid-cols-12 lg:gap-5 space-y-5 lg:space-y-0'>
        <ScheduleNav />
        <div className='lg:col-span-9 xl:col-span-10'>
          {children}
        </div>
      </section>
    </Container>
  );
};

export default schedulesPage;
