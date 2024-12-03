'use client';

import { useRouter } from '@/navigation';

import { QueryWrapper } from '@/components/query-wrapper';
import { usePackageById } from '@/hooks/queries/admin/settings/packages';
import Card from '@/components/card';
import {
  PackageBadge,
  PackageGoals,
  PackageContent,
} from '@/components/packages';
import { H1, BackButton } from '@/client/_components/ui';
import { useLocale } from 'next-intl';
import { PackageIcon } from '../../_components/package-icon';
import { useMemo } from 'react';
import { EditButton } from '@/components/buttons/edit-button';
import ROUTES from '@/routes';
import { useImagePath } from '@/hooks/use-image-path';
import Image from 'next/image';

export const ViewPackage = ({ id }) => {
  const query = usePackageById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Package data={data} />}
    </QueryWrapper>
  );
};

export const Package = ({ data = {} }) => {
  const locale = useLocale();

  const router = useRouter();

  const {
    arName,
    enName,
    id,
    price,
    services,
    discount,
    iconCode,
    goals,
    photoPath,
  } = data;

  const path = useImagePath(photoPath);

  const name = locale === 'ar' ? arName : enName;

  const features = useMemo(() => {
    if (!services?.length) return [];

    const key = locale === 'ar' ? 'arName' : 'enName';

    // Count occurrences of each service
    const serviceCounts = services.reduce(
      (acc, service) => {
        const serviceName = service[key];
        acc[serviceName] = (acc[serviceName] || 0) + 1;
        return acc;
      },
      {}
    );

    // Generate the array with counts and names
    return Object.entries(serviceCounts).map(
      ([name, count]) => `${count} ${name}`
    );
  }, [services, locale]);

  if (!data || !Object.keys(data)?.length) return null;
  return (
    <div className='space-y-5'>
      <Card className='h-full'>
        <div className='flex items-center gap-5 mb-10'>
          <BackButton />
          <H1>الباقات - {name}</H1>
        </div>
        <div className='max-w-[1000px] mx-auto'>
          <PackageBadge
            name={name}
            price={price}
            features={features}
            discount={discount}
            active
            icon={<PackageIcon iconCode={iconCode} />}
          />

          <PackageContent content={services} />

          <PackageGoals goals={goals} />
        </div>
      </Card>

      <Card title='الصورة الدعائية'>
        {path ? (
          <Image
            src={path}
            alt={enName}
            width={500}
            height={500}
            className='h-32 mdl:h-52 w-auto'
          />
        ) : (
          <p className='h-32 mdl:h-52 w-full flex items-center justify-center border-2 border-grayLight rounded-xl'>
            لا يوجد صورة!
          </p>
        )}
      </Card>

      <EditButton
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          router.push(
            ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESEDIT(id),
            { scroll: false }
          );
        }}
        className='bg-white border-2 w-full mdl:max-w-xs transition hover:border-greenMain rounded-3xl'
      >
        تعديل
      </EditButton>
    </div>
  );
};
