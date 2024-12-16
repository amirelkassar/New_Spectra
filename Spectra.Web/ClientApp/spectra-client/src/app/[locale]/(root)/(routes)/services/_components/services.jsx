'use client';

import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

import ROUTES from '@/routes';
import { ServiceCard } from '@/components/services';
import { SERVICESICONS } from '@/lib/demoData';
import { Container, SectionHeading } from '@/guest/_components/ui';
import { usePublicServices } from '@/hooks/queries/public/services';
import { QueryWrapper } from '@/components/query-wrapper';

export const Services = ({ title = 'خدمتنا' }) => {
  const locale = useLocale();

  const query = usePublicServices();

  return (
    <Container
      id='services'
      aria-labelledby='services'
      aria-label='Services'
    >
      <SectionHeading id='services' className='mb-10 text-center'>
        {title}
      </SectionHeading>

      <QueryWrapper query={query}>
        {({ data }) => (
          <div className='grid grid-cols-2 mdl:grid-cols-3 mdl:gap-10 gap-3'>
            {data?.map((service, i) => (
              <Link
                key={service.id}
                href={ROUTES.ROOT.VIEW_SERVICE.replace(
                  ':id',
                  service?.id
                )}
              >
                <Service locale={locale} index={i + 1} {...service} />
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
        )}
      </QueryWrapper>
    </Container>
  );
};

const Service = ({
  index = 1,
  arName = '',
  enName = '',
  arDescription = '',
  enDescription = '',
  locale = 'ar',
  id = '',
}) => {
  const label = locale === 'ar' ? arName : enName;
  const description = locale === 'ar' ? arDescription : enDescription;

  return (
    <ServiceCard
      className='hover:border-blueLight h-full'
      data-id={id}
    >
      <ServiceCard.Icon
        style={{
          backgroundColor:
            SERVICESICONS[index]?.bg || SERVICESICONS[1]?.bg,
          color:
            SERVICESICONS[index]?.color || SERVICESICONS[1]?.color,
        }}
      >
        {SERVICESICONS[index]?.icon || SERVICESICONS[1]?.icon}
      </ServiceCard.Icon>

      <ServiceCard.Body>
        <ServiceCard.Label>{label}</ServiceCard.Label>
        <ServiceCard.Description>
          {description.split(' ').slice(0, 10).join(' ')}...
        </ServiceCard.Description>
      </ServiceCard.Body>
    </ServiceCard>
  );
};
