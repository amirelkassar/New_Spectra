'use client';

import { ComplaintForm } from '../../_components/complaint-form';
import { useAddComplaint } from '../../_hooks/use-add-complaint';

export const AddComplaint = () => {
  const [form, status] = useAddComplaint();

  const { data, error, onSubmit, onChange } = form;

  return (
    <ComplaintForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
      btnLabel='اضافة'
    />
  );
};
