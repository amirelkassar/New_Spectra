'use client';

import { GetDrugsID } from '@/hooks/queries/admin/main-data/drugs';
import { DrugForm } from '../../_components/drug-form';
import { useUpdateDrug } from '../../_hooks/use-update-drug';
import { QueryWrapper } from '@/components/query-wrapper';

export const UpdateDrug = ({ id }) => {
  const query = GetDrugsID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdateDrugForm initialValues={data} />
      )}
    </QueryWrapper>
  );
};

const UpdateDrugForm = ({ initialValues }) => {
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
