'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetInternalExaminationID } from '@/hooks/queries/admin/main-data/testsInterior';
import { useUpdateTest } from '../../_hooks/use-update-test';
import { TestForm } from '../../_components/test-form';

export const UpdateTest = ({ id }) => {
  const query = GetInternalExaminationID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdateTestForm initialValues={data} />
      )}
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
