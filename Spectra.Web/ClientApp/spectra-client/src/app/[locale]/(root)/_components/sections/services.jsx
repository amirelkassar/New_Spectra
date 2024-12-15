'use client';

import { useLocale } from 'next-intl';

import ROUTES from '@/routes';
import { ServiceCard } from '@/components/services';
import { Container, SectionHeading } from '@/guest/_components/ui';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import { SERVICESICONS } from '@/data';
import { usePublicServices } from '@/hooks/queries/public/services';
import { QueryWrapper } from '@/components/query-wrapper';

export const Services = ({ title = 'الخدمات المقدمة' }) => {
  const locale = useLocale();

  const query = usePublicServices();

  return (
    <Container
      aria-label='Services'
      aria-labelledby='services'
      id='services'
    >
      <div className='flex items-center justify-between gap-4 mb-10'>
        <SectionHeading id='services'>{title}</SectionHeading>
        <ShowMoreButton href={`${ROUTES.ROOT.SERVICES}/#services`}>
          تصفح جميع الخدمات
        </ShowMoreButton>
      </div>

      <QueryWrapper query={query}>
        {({ data }) => (
          <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5'>
            {data?.slice(0, 3)?.map((item, index) => (
              <Service
                key={item.label}
                index={index + 1}
                locale={locale}
                {...item}
              />
            ))}
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
  locale = 'ar',
}) => {
  const label = locale === 'ar' ? arName : enName;
  return (
    <ServiceCard className='border-none'>
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
      <ServiceCard.Label>{label}</ServiceCard.Label>
    </ServiceCard>
  );
};
