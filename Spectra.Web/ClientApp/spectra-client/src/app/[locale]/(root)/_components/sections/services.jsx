'use client';

import ROUTES from '@/routes';
import { ServiceCard } from '@/components/services';
import { Container, SectionHeading } from '@/guest/_components/ui';
import { ShowMoreButton } from '@/components/buttons/show-more-button';

export const Services = ({
  data = [],
  title = 'الخدمات المقدمة',
}) => {
  if (!data.length) return null;
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

      <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5'>
        {data?.map((item) => (
          <Service key={item.label} {...item} />
        ))}
      </div>
    </Container>
  );
};

const Service = ({ icon, label, color }) => {
  return (
    <ServiceCard className='border-none'>
      <ServiceCard.Icon className={color}>{icon}</ServiceCard.Icon>
      <ServiceCard.Label>{label}</ServiceCard.Label>
    </ServiceCard>
  );
};
