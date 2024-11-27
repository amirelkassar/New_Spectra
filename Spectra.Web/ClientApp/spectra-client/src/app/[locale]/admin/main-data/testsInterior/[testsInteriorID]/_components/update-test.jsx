'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetInternalExaminationID } from '@/hooks/queries/admin/main-data/testsInterior';
import { useUpdateTest } from '../../_hooks/use-update-test';
import { TestForm } from '../../_components/test-form';

export const UpdateTest = ({ id }) => {
  const {
    data,
    isError,
    isPaused,
    isPending,
    failureReason,
    refetch,
  } = GetInternalExaminationID(id);

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
      <UpdateTestForm initialValues={data?.data} />
    </QueryWrapper>
  );
};

const UpdateTestForm = ({ initialValues }) => {
  const [form, status] = useUpdateTest({
    initialValues,
  });

  const { error, onSubmit, onChange, data } = form;

  return (
    <TestForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
    />
  );
};
