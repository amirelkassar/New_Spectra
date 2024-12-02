'use client';

import { useRouter } from '@/navigation';

import { QueryWrapper } from '@/components/query-wrapper';
import { usePackageById } from '@/hooks/queries/admin/settings/packages';
import { PackageForm } from '../../_components/package-form';
import { useUpdatePackage } from '../../_hooks/use-update-package';
import ROUTES from '@/routes';

export const UpdatePackage = ({ id }) => {
  const query = usePackageById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdatePackageForm initialValues={data} />
      )}
    </QueryWrapper>
  );
};

const UpdatePackageForm = ({ initialValues }) => {
  const router = useRouter();

  const [form] = useUpdatePackage({
    initialValues,
  });
  return (
    <PackageForm
      title='تعديل الباقة'
      form={form}
      onCancel={() =>
        router.replace(
          ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD
        )
      }
    />
  );
};
