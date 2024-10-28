import Container from '../../../_components/ui/container';
import { Heading } from '../../../_components/ui/heading';
import { AddAppointment } from './_components/add-appointment';
import CalendarWithBg from '@/assets/icons/calendar-with-bg';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import { ChildSelect } from '@/client/_components/child';
import { CHILDSDATA } from '@/lib/demoData';

const schedulesPage = ({ children }) => {
  return (
    <Container>
      <section className='lg:grid lg:grid-cols-5 space-y-5 w-full lg:space-y-0 gap-5'>
        <Heading
          className='lg:gap-x-9 shrink-0 flex-col lg:flex-row gap-3 items-start lg:items-center lg:col-span-4'
          label='المواعيد'
          icon={<AddAppointment />}
        />

        <div className='lg:col-span-4 lg:order-2'>
          <ChildSelect data={CHILDSDATA} />
        </div>

        {children}
      </section>
      <Link
        href={`${ROUTES.CLIENT.SCHEDULES}/calendar`}
        className='absolute top-5 end-5 lg:top-3'
      >
        <CalendarWithBg />
      </Link>
    </Container>
  );
};

export default schedulesPage;
