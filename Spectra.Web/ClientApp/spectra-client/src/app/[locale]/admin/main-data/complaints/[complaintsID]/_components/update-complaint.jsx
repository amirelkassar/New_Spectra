'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetComplaintID } from '@/hooks/queries/admin/main-data/complaints';
import { ComplaintForm } from '../../_components/complaint-form';
import { useUpdateComplaint } from '../../_hooks/use-update-complaint';

export const UpdateComplaint = ({ id }) => {
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
      <UpdateComplaintForm initialValues={data?.data} />
    </QueryWrapper>
  );
};

const UpdateComplaintForm = ({ initialValues }) => {
  const [form, status] = useUpdateComplaint({
    initialValues,
  });

  const { error, onSubmit, onChange, data } = form;

  return (
    <ComplaintForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
    />
  );
};
