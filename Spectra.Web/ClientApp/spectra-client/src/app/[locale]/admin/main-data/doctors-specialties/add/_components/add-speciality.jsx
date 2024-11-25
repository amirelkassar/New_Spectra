'use client';

import { SpecialityForm } from '../../_components/specialty-form';
import { useAddSpecialty } from '../../_hooks/use-add-specialty';

export const AddSpeciality = () => {
  const [form, status] = useAddSpecialty();

  const { onSubmit, onChange, error, data } = form;

  const { isPending } = status;

  return (
    <SpecialityForm
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      data={data}
      isPending={isPending}
      btnLabel='اضافة'
    />
  );
};
