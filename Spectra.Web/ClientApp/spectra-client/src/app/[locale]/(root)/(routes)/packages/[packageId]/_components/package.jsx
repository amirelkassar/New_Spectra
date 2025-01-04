'use client';

import { useMemo } from 'react';
import { useLocale } from 'next-intl';

import {
  PackageBadge,
  PackageGoals,
  PackageContent,
} from '@/components/packages';
import { PackageIcon } from '@/components/packages/package-icon';
import { usePublicPackages } from '@/hooks/queries/public/packages';
import { QueryWrapper } from '@/components/query-wrapper';
import { Container } from '@/guest/_components/ui';
import Button from '@/components/button';
import { NotFound404 } from '@/components/not-found-404';

export const Package = ({ id }) => {
  const query = usePublicPackages();

  return (
    <Container className='mt-20 mdl:mt-28'>
      <QueryWrapper query={query}>
        {({ data }) => <RenderPackage id={id} packages={data} />}
      </QueryWrapper>
    </Container>
  );
};

const RenderPackage = ({ packages = [], id = '' }) => {
  const packageData = packages.find((pack) => pack.id === id);

  if (!packageData) return <NotFound404 />;

  return <ViewPackage data={packageData} />;
};

const ViewPackage = ({ data = {} }) => {
  const locale = useLocale();

  const {
    arName,
    enName,
    price,
    services,
    discount,
    iconCode,
    goals,
  } = data;

  const name = locale === 'ar' ? arName : enName;

  const features = useMemo(() => {
    if (!services?.length) return [];

    const key = locale === 'ar' ? 'arName' : 'enName';

    // Count occurrences of each service
    const serviceCounts = services.reduce((acc, service) => {
      const serviceName = service[key];
      acc[serviceName] = (acc[serviceName] || 0) + 1;
      return acc;
    }, {});

    // Generate the array with counts and names
    return Object.entries(serviceCounts).map(
      ([name, count]) => `${count} ${name}`
    );
  }, [services, locale]);

  if (!data || !Object.keys(data)?.length) return null;
  return (
    <div>
      <PackageBadge
        name={name}
        price={price}
        features={features}
        discount={discount}
        active
        icon={<PackageIcon iconCode={iconCode} />}
      />

      <PackageContent locale={locale} content={services} />

      <PackageGoals locale={locale} goals={goals} />

      <Button className='mt-5 font-bold w-full' variant='secondary'>
        احجز الان
      </Button>
    </div>
  );
};
