'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { useEditDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import ROUTES from '@/routes';

export const useUpdateDaignostic = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialValues);

  const {
    mutateAsync: EditDiagnostic,
    error,
    isError,
    isPending,
    reset,
  } = useEditDiagnostics();

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

      Toast.Promise(EditDiagnostic(formData), {
        success: 'تم التعديل بنجاح',
        onSuccess: () =>
          router.replace(ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS),
      });
    },
    [EditDiagnostic, formData, router]
  );

  const form = {
    onChange,
    onSubmit,
    data: formData,
    error,
  };

  const status = {
    isPending,
    isError,
  };

  return [form, status];
};
