'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useAddPackage as useAddPackageQuery } from '@/hooks/queries/admin/settings/packages';
import ROUTES from '@/routes';

export const useAddPackage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    arName: '',
    enName: '',
    price: '',
    discount: '',
    iconCode: '',
    services: [],
    goals: [],
    image: undefined,
  });

  const {
    mutateAsync: addPackage,
    error,
    isError,
    isPending,
    reset,
  } = useAddPackageQuery();

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

      // return console.log(formData);

      const data = getFormData(formData);

      Toast.Promise(addPackage(data), {
        success: 'تم اضافة الباقة بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD);
        },
      });
    },
    [addPackage, formData, router]
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
