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
      <section className='lg:flex space-y-5 w-full lg:space-y-0 gap-5'>
        <ScheduleTabs slug={schedules} />
        <div className='w-full space-y-5 relative'>
          <Heading
            className='lg:gap-x-9 flex-col lg:flex-row gap-3 items-start lg:items-center'
            label='المواعيد'
            icon={<AddAppointment />}
          />
          <ChildPopover className='lg:min-w-[65%]' data={childPopupData} />
          <Schedules slug={schedules} />
        </div>
      </section>
    </Container>
  );
};

export default schedulesPage;
