'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DiagnosticForm } from '../../_components/diagnostic-form';
import { GetDiagnosticsID } from '@/hooks/queries/admin/main-data/diagnostics';
import { useUpdateDaignostic } from '../../_hooks/use-update-daigonstics';

export const UpdateDiagnostic = ({ id }) => {
  const query = GetDiagnosticsID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdateDiagnosticForm initialValues={data} />
      )}
    </QueryWrapper>
  );
};

const UpdateDiagnosticForm = ({ initialValues }) => {
  const [form, status] = useUpdateDaignostic({
    initialValues,
  });

  const { data, error, onSubmit, onChange } = form;

  return (
    <DiagnosticForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
    />
  );
};
