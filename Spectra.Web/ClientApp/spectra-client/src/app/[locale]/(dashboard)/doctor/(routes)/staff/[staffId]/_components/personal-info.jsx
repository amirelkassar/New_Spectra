'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DoctorCareerInfo } from '@/dashboard/_components/staff/doctor-career-info';
import { DoctorPersonalInfo } from '@/dashboard/_components/staff/doctor-personal-info';
import { DoctorCertificationsInfo } from '@/dashboard/_components/staff/doctor-certifications-info';
import { DoctorSpecializationsInfo } from '@/dashboard/_components/staff/doctor-specializations-info';
import { useEmployeeHeadEmployeeById } from '@/hooks/queries/employee-head/employee';

export const PersonalInfo = ({ id = '' }) => {
  const query = useEmployeeHeadEmployeeById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <RenderPersonalInfo data={data} />}
    </QueryWrapper>
  );
};

const RenderPersonalInfo = ({ data }) => {
  return (
    <div className='flex-1 space-y-5'>
      <DoctorPersonalInfo data={data} />
      <DoctorCareerInfo data={data} />
      <DoctorSpecializationsInfo {...data} />
      {/* <DoctorServicesInfo data={data?.services} /> */}
      <DoctorCertificationsInfo data={data?.attachments} />
    </div>
  );
};
