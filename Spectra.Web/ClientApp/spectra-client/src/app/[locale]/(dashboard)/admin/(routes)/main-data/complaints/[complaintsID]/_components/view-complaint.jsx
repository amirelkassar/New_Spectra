'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetComplaintID } from '@/hooks/queries/admin/main-data/complaints';
import { Info } from '@/app/[locale]/(dashboard)/admin/_components/ui';

export const ViewComplaint = ({ id }) => {
  const query = GetComplaintID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Complaint data={data} />}
    </QueryWrapper>
  );
};

const Complaint = ({ data }) => {
  return (
    <div className='flex flex-col gap-5'>
      <Info data={data.complaintName} label='اسم الشكوى' />

      <Info data={data.code1} label='كود الشكوى' />

      <Info
        data={data.descriptionOfTheComplaint}
        label='وصف الشكوى'
      />
    </div>
  );
};
