import Container from '@/app/[locale]/client/_components/container';
import { servicesData } from '@/lib/demoData';
import { ServiceDetails } from './_components/service-details';

const ServicePage = ({ params }) => {
  const { serviceId } = params;

  const getServiceById = () => {
    return servicesData.find(
      (service) => service.id === serviceId
    );
  };

  return (
    <Container>
      <ServiceDetails data={getServiceById()} />
    </Container>
  );
};

export default ServicePage;
