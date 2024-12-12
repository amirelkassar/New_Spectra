'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetComplaintID } from '@/hooks/queries/admin/main-data/complaints';
import { ComplaintForm } from '../../_components/complaint-form';
import { useUpdateComplaint } from '../../_hooks/use-update-complaint';

export const UpdateComplaint = ({ id }) => {
  const query = GetComplaintID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdateComplaintForm initialValues={data} />
      )}
    </QueryWrapper>
  );
};

const UpdateComplaintForm = ({ initialValues }) => {
  const [form, status] = useUpdateComplaint({
    initialValues,
  });

  const { error, onSubmit, onChange, data } = form;

  return (
    <ComplaintForm
      data={data}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      isPending={status.isPending}
    />
  );
};
