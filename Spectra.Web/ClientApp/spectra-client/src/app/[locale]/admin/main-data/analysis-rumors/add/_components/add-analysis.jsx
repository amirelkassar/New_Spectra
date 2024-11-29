'use client';

import { AnalysisForm } from '../../_components/analysis-form';
import { useAddAnalysis } from '../../_hooks/use-add-analysis';

export const AddAnalysis = () => {
  const [form, status] = useAddAnalysis();

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
