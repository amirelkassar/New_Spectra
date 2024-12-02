'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useUpdatePackage as useUpdatePackageQuery } from '@/hooks/queries/admin/settings/packages';
import ROUTES from '@/routes';

export const useUpdatePackage = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    ...initialValues,
    image: initialValues?.photoPath,
  });

  const {
    mutateAsync: updatePackage,
    error,
    isError,
    isPending,
    reset,
  } = useUpdatePackageQuery();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = getFormData(formData);

      Toast.Promise(updatePackage(data), {
        success: 'تم تعديل الباقة بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(
              ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD
            );
        },
      });
    },
    [updatePackage, formData, router]
  );

  const form = {
    onChange,
    onSubmit,
    data: formData,
    error,
    isPending,
    isError,
  };

  return [form];
};
