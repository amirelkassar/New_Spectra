'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetSpecializationID } from '@/hooks/queries/admin/main-data/specialties';
import { SpecialityForm } from '../../_components/specialty-form';
import { useUpdateSpecialty } from '../../_hooks/use-update-specialty';

export const UpdateSpecialty = ({ id }) => {
  const query = GetSpecializationID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <UpdateForm initialValues={data} />}
    </QueryWrapper>
  );
};

const UpdateForm = ({ initialValues }) => {
  const [form, status] = useUpdateSpecialty({
    initialValues,
  });

  const { onSubmit, onChange, error, data } = form;

  const { isPending } = status;

  return (
    <SpecialityForm
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      data={data}
      isPending={isPending}
      btnLabel='تعديل'
    />
  );
};
