'use client';

import { DepartmentForm } from '../../_components/department-form';
import { useAddDepatment } from '../../_hooks/use-add-department';

export const AddDepartment = () => {
  const [form, status] = useAddDepatment();

  const { onChange, onSubmit, data, error } = form;

  const { isPending } = status;
  return (
    <DepartmentForm
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      data={data}
      isPending={isPending}
    />
  );
};
