'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';
import { StaffInfo } from './staff-info';
import { MedicalProviderInfo } from './medical-provider-info';

export const ViewStaff = ({ id }) => {
  const query = useStaffById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <RenderPage data={data} />}
    </QueryWrapper>
  );
};

const RenderPage = ({ data }) => {
  const jobType = data?.jobType;

  switch (String(jobType)) {
    case '1':
      return <Doctor data={data} />;
    case '2':
      return <Specialist data={data} />;
    case '3':
      return <Secretary data={data} />;
    case '4':
      return <Accountant data={data} />;
    default:
      return null;
  }
};

const Doctor = ({ data }) => <MedicalProviderInfo data={data} />;

const Specialist = ({ data }) => <MedicalProviderInfo data={data} />;

const Secretary = ({ data }) => <StaffInfo data={data} />;

const Accountant = ({ data }) => <StaffInfo data={data} />;
