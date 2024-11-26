'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { AnalysisForm } from '../../_components/analysis-form';
import { useUpdateAnalysis } from '../../_hooks/use-update-analysis';
import { GetMedicalTestsID } from '@/hooks/queries/admin/main-data/analysis';

export const UpdateAnalysis = ({ id }) => {
  const { data, isPending, isError, isPaused, refetch } =
    GetMedicalTestsID(id);

  const item = data?.data;
  const hasData = !!item?.length;

  return (
    <QueryWrapper
      status={{ isPending, isPaused, isError, hasData }}
      refetch={refetch}
    >
      <UpdateAnalysisForm initialValues={item} />
    </QueryWrapper>
  );
};

const UpdateAnalysisForm = ({ initialValues }) => {
  const [form, status] = useUpdateAnalysis({
    initialValues,
  });

  const { error, onSubmit, onChange, data } = form;

  const { isPending } = status;

  return (
    <AnalysisForm
      data={data}
      onChange={onChange}
      onSubmit={onSubmit}
      isPending={isPending}
      error={error}
    />
  );
};
