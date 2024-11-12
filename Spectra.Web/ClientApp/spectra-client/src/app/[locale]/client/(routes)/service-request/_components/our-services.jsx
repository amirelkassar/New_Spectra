import Card from '@/components/card';
import { ServiceCard } from '@/components/services';
import {
  servicesData,
  SERVICESICONS,
} from '@/lib/demoData';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import { Section } from '@/client/_components/ui';

export const OurServices = () => {
  return (
    <Section>
      <Card id='services' title='خدمتنا'>
        <div className='grid grid-cols-2 mdl:grid-cols-3 2xl:grid-cols-5 gap-3 mdl:gap-5'>
          {servicesData.map((service, index) => (
            <Link
              key={service?.label}
              href={ROUTES.CLIENT.SERVICE_REQUEST.VIEW_SERVICE.replace(
                ':id',
                service?.id
              )}
            >
              <Service key={index} {...service} />
            </Link>
          ))}
        </div>
      </Card>
    </Section>
  );
};

const Service = ({
  label = '',
  description = '',
  id = '',
  subscribed = false,
}) => {
  return (
    <ServiceCard className='h-full' data-id={id}>
      <ServiceCard.Icon
        style={{
          backgroundColor:
            SERVICESICONS[id]?.bg || SERVICESICONS[1]?.bg,
          color:
            SERVICESICONS[id]?.color ||
            SERVICESICONS[1]?.color,
        }}
      >
        {SERVICESICONS[id]?.icon || SERVICESICONS[1]?.icon}
      </ServiceCard.Icon>

      <ServiceCard.Body>
        <ServiceCard.Label>{label}</ServiceCard.Label>
        <ServiceCard.Description>
          {description}
        </ServiceCard.Description>
      </ServiceCard.Body>

      <ServiceCard.Button subscribed={subscribed}>
        {subscribed ? 'تم الحجز' : 'احجز الان'}
      </ServiceCard.Button>
    </ServiceCard>
  );
};
