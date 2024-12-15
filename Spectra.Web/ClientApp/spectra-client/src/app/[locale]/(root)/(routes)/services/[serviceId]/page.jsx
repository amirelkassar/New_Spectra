import { Service } from './_components/service';

const ServicePage = ({ params }) => {
  const serviceId = params?.serviceId;

  return (
    <main>
      <Service id={serviceId} />
    </main>
  );
};

export default ServicePage;
