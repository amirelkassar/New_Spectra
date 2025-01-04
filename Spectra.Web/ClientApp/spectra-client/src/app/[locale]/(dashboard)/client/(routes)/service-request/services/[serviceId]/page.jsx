import { Container } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { servicesData } from '@/lib/demoData';
import { ServiceDetails } from './_components/service-details';

const ServicePage = ({ params }) => {
  const serviceId = params?.serviceId;

  const service = servicesData.find(
    (service) => service.id === serviceId
  );

  return (
    <Container>
      <ServiceDetails data={service} />
    </Container>
  );
};

export default ServicePage;
