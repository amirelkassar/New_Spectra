'use client';

import { DiagnosticForm } from '../../_components/diagnostic-form';
import { useAddDaignostic } from '../../_hooks/use-add-daignostics';

export const AddDiagnostic = () => {
  const [form, status] = useAddDaignostic();

  const { data, error, onSubmit, onChange } = form;

  return (
    <DiagnosticForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
      btnLabel='اضافة'
    />
  );
};
