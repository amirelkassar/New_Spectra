'use client';

import { DrugForm } from '../../../_components/drug-form';
import { useUpdateDrug } from '../../../_hooks/use-update-drug';

export const UpdateDrug = ({ initialValues = {} }) => {
  const [form, status] = useUpdateDrug({ initialValues });

  const { onSubmit, onChange, error, data } = form;

  const { isPending } = status;

  return (
    <DrugForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={isPending}
    />
  );
};
