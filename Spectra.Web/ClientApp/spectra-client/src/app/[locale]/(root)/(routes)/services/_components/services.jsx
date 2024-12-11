import { Link } from '@/i18n/routing';

import ROUTES from '@/routes';
import { ServiceCard } from '@/components/services';
import { SERVICESICONS } from '@/lib/demoData';
import { Container, SectionHeading } from '@/guest/_components/ui';

export const Services = ({ title = 'خدمتنا', data = [] }) => {
  if (!data.length) return null;
  return (
    <Container
      id='services'
      aria-labelledby='services'
      aria-label='Services'
    >
      <SectionHeading id='services' className='mb-10 text-center'>
        {title}
      </SectionHeading>
      <div className='grid grid-cols-2 mdl:grid-cols-3 mdl:gap-10 gap-3'>
        {data?.map((item) => (
          <Link
            key={item.label}
            href={ROUTES.ROOT.SERVICES.VIEW_SERVICE.replace(
              ':id',
              item?.id
            )}
          >
            <Service {...item} />
          </Link>
        ))}
        <ServiceCard className='bg-blueLighter border-none flex flex-col items-center justify-center py-10'>
          <ServiceCard.Label>
            لا تعرف مالذي يحتاجه طفلك؟
          </ServiceCard.Label>
          <ServiceCard.Button>
            حجز استشارة مدفوعة لمدة 30د
          </ServiceCard.Button>
        </ServiceCard>
      </div>
    </Container>
  );
};

const Service = ({ label = '', description = '', id = '' }) => {
  return (
    <ServiceCard
      className='hover:border-blueLight h-full'
      data-id={id}
    >
      <ServiceCard.Icon
        style={{
          backgroundColor:
            SERVICESICONS[id]?.bg || SERVICESICONS[1]?.bg,
          color: SERVICESICONS[id]?.color || SERVICESICONS[1]?.color,
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
    </ServiceCard>
  );
};
