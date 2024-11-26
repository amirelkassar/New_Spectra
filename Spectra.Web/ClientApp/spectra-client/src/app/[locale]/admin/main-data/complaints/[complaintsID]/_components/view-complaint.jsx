'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetComplaintID } from '@/hooks/queries/admin/main-data/complaints';
import { Info } from '../../../_components/info';

export const ViewComplaint = ({ id }) => {
  const {
    data,
    isError,
    isPaused,
    isPending,
    failureReason,
    refetch,
  } = GetComplaintID(id);

  const errorCode = failureReason?.status;

  const hasData = !!Object.keys(data?.data || {})?.length;

  return (
    <QueryWrapper
      status={{
        errorCode,
        hasData,
        isError,
        isPending,
        isPaused,
      }}
      refetch={refetch}
    >
      <Complaint data={data?.data} />
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
