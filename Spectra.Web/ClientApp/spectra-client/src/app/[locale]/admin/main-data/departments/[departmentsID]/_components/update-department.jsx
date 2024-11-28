'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useUpdateDepatment } from '../../_hooks/use-update-department';
import { GetSectionID } from '@/hooks/queries/admin/main-data/section';
import { DepartmentForm } from '../../_components/department-form';

export const UpdateDepartment = ({ id }) => {
  const {
    data,
    refetch,
    isPending,
    isPaused,
    isError,
    failureReason,
  } = GetSectionID(id);

  const item = data?.data;
  const hasData = !!item?.name;
  const errorCode = failureReason?.status;

  return (
    <QueryWrapper
      status={{
        isPending,
        isPaused,
        isError,
        hasData,
        errorCode,
      }}
      refetch={refetch}
    >
      <UpdateDepartmentForm initialValues={item} />
    </QueryWrapper>
  );
};

const UpdateDepartmentForm = ({ initialValues }) => {
  const [form, status] = useUpdateDepatment({
    initialValues,
  });

  const { onSubmit, onChange, error, data } = form;

  const { isPending } = status;

  return (
    <DepartmentForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={isPending}
    />
  );
};
