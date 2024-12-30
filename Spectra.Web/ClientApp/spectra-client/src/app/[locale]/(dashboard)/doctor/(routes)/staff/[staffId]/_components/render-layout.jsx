'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { ViewStaffAside } from './view-staff-aside';
import { useEmployeeHeadEmployeeById } from '@/hooks/queries/employee-head/employee';
import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { DoctorMainInfo } from '@/dashboard/_components/staff/doctor-main-info';
import { DoctorStatistics } from '@/dashboard/_components/staff/doctor-statistics';
import ROUTES from '@/routes';
import Card from '@/components/card';

export const RenderLayout = ({ id = '', children }) => {
  const query = useEmployeeHeadEmployeeById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <ViewStaffLayout data={data}>{children}</ViewStaffLayout>
      )}
    </QueryWrapper>
  );
};

const ViewStaffLayout = ({ data, children }) => {
  return (
    <div className='flex flex-col gap-5 h-full'>
      <MedicalProviderMainInfo data={data} />
      <div className='flex-1 flex flex-col lg:flex-row gap-5'>
        <ViewStaffAside />
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

const MedicalProviderMainInfo = ({ data }) => {
  return (
    <Card className='space-y-10'>
      <div className='flex gap-5'>
        <BackButton href={ROUTES.DOCTOR.STAFF.DASHBOARD} />
        <H1>بيانات مقدم الخدمة</H1>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <DoctorMainInfo {...data} />

        {/* <DoctorServices services={data?.services} /> */}

        <DoctorStatistics licenseNumber={data?.licenseNumber} />
      </div>
    </Card>
  );
};
