'use client';

import { DrugForm } from '../../_components/drug-form';
import { useAddDrug } from '../../_hooks/use-add-drug';

export const AddDrug = () => {
  const [form, status] = useAddDrug();

  const { onSubmit, onChange, error, data } = form;

  const { isPending } = status;

  return (
    <DrugForm
      data={data}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
      isPending={isPending}
      btnLabel='اضافة'
    />
  );
};
