import { Container, H1 } from '@/client/_components/ui';
import { ChildSelect } from '@/client/_components/child';
import { Subscriptions } from './_components/subscriptions';
import { OurServices } from './_components/our-services';
import { CHILDS, PROGRESS } from '@/data';
import { Progress } from './_components/progress';

const ServiceRequestPage = () => {
  return (
    <Container>
      <H1 className='mt-3 mdl:mt-0'>طلب خدمة</H1>
      <ChildSelect data={CHILDS} />
      <Subscriptions />
      <Progress data={PROGRESS} />
      <OurServices />
    </Container>
  );
};

export default ServiceRequestPage;
