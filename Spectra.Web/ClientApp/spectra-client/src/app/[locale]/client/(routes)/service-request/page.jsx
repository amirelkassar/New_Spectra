import { Container, H1 } from '@/client/_components/ui';
import { ChildSelect } from '@/client/_components/child';
import { CHILDSDATA } from '@/lib/demoData';
import { Activities } from '@/client/_components/services';
import { Subscriptions } from './_components/subscriptions';
import { OurServices } from './_components/our-services';

const ServiceRequestPage = () => {
  return (
    <Container className='space-y-5'>
      <H1>طلب خدمة</H1>
      <ChildSelect data={CHILDSDATA} />
      <Subscriptions />
      <Activities />
      <OurServices />
    </Container>
  );
};

export default ServiceRequestPage;
