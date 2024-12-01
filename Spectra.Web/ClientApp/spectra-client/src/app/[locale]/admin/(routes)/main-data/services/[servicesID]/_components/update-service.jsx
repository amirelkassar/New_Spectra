'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useServicesById } from '@/hooks/queries/admin/main-data/services';
import { useUpdateService } from '../../_hooks/use-update-service';
import { ServiceFrom } from '../../_components/service-form';

export const UpdateService = ({ id }) => {
  const query = useServicesById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdateServiceForm initialValues={data} />
      )}
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
