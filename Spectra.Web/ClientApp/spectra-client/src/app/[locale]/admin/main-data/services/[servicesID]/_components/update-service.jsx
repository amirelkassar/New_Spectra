'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useServicesById } from '@/hooks/queries/admin/main-data/services';
import { useUpdateService } from '../../_hooks/use-update-service';
import { ServiceFrom } from '../../_components/service-form';

export const UpdateService = ({ id }) => {
  const {
    data,
    isPending,
    isError,
    isPaused,
    refetch,
    failureReason,
  } = useServicesById(id);

  const item = data?.data;
  const hasData = !!item?.length;
  const errorCode = failureReason?.status;

  return (
    <QueryWrapper
      status={{
        isPending,
        isPaused,
        isError,
        hasData,
        errorCode,
      }}
      refetch={refetch}
    >
      <UpdateServiceForm initialValues={item} />
    </QueryWrapper>
  );
};

const UpdateServiceForm = ({ initialValues }) => {
  const [form, status] = useUpdateService({
    initialValues,
  });

  const { error, onSubmit, onChange, data } = form;

  const { isPending } = status;

  return (
    <ServiceFrom
      data={data}
      onChange={onChange}
      onSubmit={onSubmit}
      isPending={isPending}
      error={error}
    />
  );
};
