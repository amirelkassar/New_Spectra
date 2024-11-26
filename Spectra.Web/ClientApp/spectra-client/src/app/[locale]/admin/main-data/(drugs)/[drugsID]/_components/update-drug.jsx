'use client';

import { GetDrugsID } from '@/hooks/queries/admin/main-data/drugs';
import { DrugForm } from '../../_components/drug-form';
import { useUpdateDrug } from '../../_hooks/use-update-drug';
import { QueryWrapper } from '@/components/query-wrapper';

export const UpdateDrug = ({ id }) => {
  const { data, refetch, isPending, isPaused, isError } =
    GetDrugsID(id);

  const item = data?.data;
  const hasData = !!item?.name;

  return (
    <QueryWrapper
      status={{ isPending, isPaused, isError, hasData }}
      refetch={refetch}
    >
      <UpdateDrugForm initialValues={item} />
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
