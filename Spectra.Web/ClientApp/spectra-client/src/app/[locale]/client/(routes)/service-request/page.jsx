import { Container, H1 } from '@/client/_components/ui';
import { ChildSelect } from '@/client/_components/child';
import { Subscriptions } from './_components/subscriptions';
import { OurServices } from './_components/our-services';
import { CHILDS } from '@/data';

const ServiceRequestPage = () => {
  return (
    <Container>
      <H1>طلب خدمة</H1>
      <ChildSelect data={CHILDS} />
      <Subscriptions />
      {/* <Activities /> */}
      <OurServices />
    </Container>
  );
};

export default ServiceRequestPage;
