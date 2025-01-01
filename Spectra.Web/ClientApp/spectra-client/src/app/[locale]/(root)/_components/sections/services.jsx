'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import ROUTES from '@/routes';
import { ServiceCard } from '@/components/services';
import { Container, SectionHeading } from '@/guest/_components/ui';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import { SERVICESICONS } from '@/data';
import { usePublicServices } from '@/hooks/queries/public/services';
import { QueryWrapper } from '@/components/query-wrapper';

export const Services = ({ title = '' }) => {
  const locale = useLocale();

  const tg = useTranslations('general_obj');

  const titleValue = title || tg('provided_services');

  const query = usePublicServices();

  return (
    <Container
      aria-label='Services'
      aria-labelledby='services'
      id='services'
    >
      <div className='flex items-center justify-between gap-4 mb-10'>
        <SectionHeading className='capitalize' id='services'>
          {titleValue}
        </SectionHeading>
        <ShowMoreButton
          className='capitalize'
          href={`${ROUTES.ROOT.SERVICES}/#services`}
        >
          {tg('browse_all_services')}
        </ShowMoreButton>
      </div>

      <QueryWrapper query={query}>
        {({ data }) => (
          <div className='grid grid-cols-2 mdl:grid-cols-4 gap-5'>
            {data?.slice(0, 3)?.map((item, index) => (
              <Service
                key={item?.id || item?.enName}
                {...item}
                index={index + 1}
                locale={locale}
                id={item?.id}
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
  id = '',
  arName = '',
  enName = '',
  locale = 'ar',
}) => {
  const label = locale === 'ar' ? arName : enName;
  return (
    <Link href={ROUTES.ROOT.VIEW_SERVICE.replace(':id', id)}>
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
        <ServiceCard.Label className='cursor-pointer'>
          {label}
        </ServiceCard.Label>
      </ServiceCard>
    </Link>
  );
};
