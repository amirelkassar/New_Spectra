'use client';

import Card from '@/components/card';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';
import { MedicalProviderMainInfo } from './medical-provider-main-info';
import { MedicalProviderAside } from './medical-provider-aside';

export const StaffLayoutProvider = ({ id, children }) => {
  const query = useStaffById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <RenderLayout data={data}>{children}</RenderLayout>
      )}
    </QueryWrapper>
  );
};

const RenderLayout = ({ children, data }) => {
  const jobType = data?.jobType;

  switch (String(jobType)) {
    case '1':
    case '2':
      return (
        <DoctorAndSpecialistLayout data={data}>
          {children}
        </DoctorAndSpecialistLayout>
      );

    case '3':
    case '4':
      return children;
    default:
      return <NotFound />;
  }
};

const DoctorAndSpecialistLayout = ({ data, children }) => {
  return (
    <div className='space-y-5 h-full'>
      <MedicalProviderMainInfo data={data} />
      <div className='flex flex-col lg:flex-row gap-5'>
        <MedicalProviderAside />
        {children}
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <Card className='h-full flex justify-center items-center'>
      <NotFound404 className='flex-none h-fit' />
    </Card>
  );
};
