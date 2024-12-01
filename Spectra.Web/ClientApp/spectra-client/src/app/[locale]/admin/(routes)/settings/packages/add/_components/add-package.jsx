'use client';

import { PackageForm } from '../../_components/package-form';
import { useAddPackage } from '../../_hooks/use-add-package';

export function AddPackage() {
  const [form] = useAddPackage();

  return <PackageForm form={form} />;
}
