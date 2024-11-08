import { servicesData } from '@/lib/demoData';
import { Service } from './_components/service';

const ServicePage = ({ params }) => {
  const serviceId = params?.serviceId;

  const service = servicesData.find(
    (s) => s.id === serviceId
  );

  return (
    <main>
      <Service data={service} />
    </main>
  );
};

export default ServicePage;
