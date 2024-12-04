'use client';

import Card from '@/components/card';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';

export const StaffLayoutProvider = ({ id, children }) => {
  const query = useStaffById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => {
        const jobType = data?.jobType;

        return (
          <RenderLayout jobType={jobType}>
            {children}
          </RenderLayout>
        );
      }}
    </QueryWrapper>
  );
};

const RenderLayout = ({ children, jobType }) => {
  switch (String(jobType)) {
    case '1':
    case '2':
      return (
        <DoctorAndSpecialistLayout>
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

const DoctorAndSpecialistLayout = ({ children }) => {
  return (
    <div>
      <span>doc info</span>
      <div className='flex gap-4'>
        <span>aside</span>
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
