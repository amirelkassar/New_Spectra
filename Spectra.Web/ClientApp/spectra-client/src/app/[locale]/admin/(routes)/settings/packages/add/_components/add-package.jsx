'use client';

import { useRouter } from '@/navigation';

import { PackageForm } from '../../_components/package-form';
import { useAddPackage } from '../../_hooks/use-add-package';
import ROUTES from '@/routes';

export function AddPackage() {
  const router = useRouter();

  const [form] = useAddPackage();

  return (
    <PackageForm
      form={form}
      btnLabel='اضافة'
      onCancel={() =>
        router.replace(
          ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD
        )
      }
    />
  );
}
