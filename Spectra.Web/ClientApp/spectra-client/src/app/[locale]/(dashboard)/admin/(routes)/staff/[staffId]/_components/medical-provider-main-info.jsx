'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';

import Card from '@/components/card';

import ROUTES from '@/routes';
import { DoctorMainInfo } from '@/dashboard/_components/staff/doctor-main-info';
import { DoctorStatistics } from '@/dashboard/_components/staff/doctor-statistics';

export const MedicalProviderMainInfo = ({ data }) => {
  const isEdit = useSearchParams().get('edit') === 'true';

  const title = useMemo(
    () =>
      isEdit ? 'تعديل بيانات مقدم الخدمة' : 'بيانات مقدم الخدمة',
    [isEdit]
  );

  return (
    <Card className='space-y-10'>
      <div className='flex gap-5'>
        <BackButton href={ROUTES.ADMIN.STAFF.HOME} />
        <H1>{title}</H1>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <DoctorMainInfo {...data} />

        {/* <DoctorServices services={data?.services} /> */}

        <DoctorStatistics licenseNumber={data?.licenseNumber} />
      </div>
    </Card>
  );
};
