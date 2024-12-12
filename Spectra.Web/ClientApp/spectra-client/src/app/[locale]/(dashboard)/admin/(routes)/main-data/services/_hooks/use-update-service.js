'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useUpdateCurrentService } from '@/hooks/queries/admin/main-data/services';
import ROUTES from '@/routes';

export const useUpdateService = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    ...initialValues,
    heroImage: initialValues?.heroImagePath,
  });

  const {
    mutateAsync: UpdateService,
    error,
    isError,
    isPending,
    reset,
  } = useUpdateCurrentService();

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

      Toast.Promise(UpdateService(data), {
        success: 'تم تعديل الخدمة بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
        },
      });
    },
    [UpdateService, formData, router]
  );

  const onCancel = useCallback(() => {
    router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
  }, [router]);

  const form = {
    onChange,
    onSubmit,
    onCancel,
    data: formData,
    error,
  };

  const status = {
    isPending,
    isError,
  };

  return [form, status];
};
