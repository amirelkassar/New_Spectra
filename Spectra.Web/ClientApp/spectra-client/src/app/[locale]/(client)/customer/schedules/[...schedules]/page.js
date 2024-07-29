import Container from '../../../_components/container';
import { Schedules } from './_components/schedules';
import { ScheduleTabs } from './_components/schedule-tabs';
import { Heading } from '../../../_components/heading';
import { AddAppointment } from './_components/add-appointment';
import ChildPopover from '../../../_components/child-popover';
import { childPopupData } from '@/lib/demoData';

const schedulesPage = ({ params }) => {
  const { schedules } = params;

  return (
    <Container className='p-1 mdl:p-4 xl:p-6 bg-white lg:bg-transparent'>
      <section className='lg:grid lg:grid-cols-5 space-y-5 w-full lg:space-y-0 gap-5'>
        <Heading
          className='lg:gap-x-9 flex-col lg:flex-row gap-3 items-start lg:items-center lg:col-span-4'
          label='المواعيد'
          icon={<AddAppointment />}
        />
        <div className='lg:col-span-4 lg:order-2'>
          <ChildPopover className='lg:min-w-[65%]' data={childPopupData} />
        </div>
        <ScheduleTabs slug={schedules} />
        <Schedules slug={schedules} />
      </section>
    </Container>
  );
};

export default schedulesPage;
