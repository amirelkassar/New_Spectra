'use client';

import { useLocale } from 'next-intl';
import { InfoData } from '@/dashboard/_components/ui/info-data';
import { Card } from '@mantine/core';
import ADHD from '@/assets/icons/adhd';

export const DoctorServicesInfo = ({ data = [] }) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  return (
    <Card className='space-y-5' title='رسوم الخدمات'>
      {!!data?.length ? (
        data.map((service) => (
          <InfoData
            key={service?.id}
            label={service[key]}
            value={`${service?.price || 100} SAR`}
          />
        ))
      ) : (
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          لا يوجد خدمات
        </p>
      )}
    </Card>
  );
};
