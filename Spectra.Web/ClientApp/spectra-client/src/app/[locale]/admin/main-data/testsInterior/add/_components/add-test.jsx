'use client';

import { TestForm } from '../../_components/test-form';
import { useAddTest } from '../../_hooks/use-add-test';

export const AddTest = () => {
  const [form, status] = useAddTest();

  const { data, error, onSubmit, onChange } = form;

  return (
    <TestForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
      btnLabel='اضافة'
    />
  );
};
