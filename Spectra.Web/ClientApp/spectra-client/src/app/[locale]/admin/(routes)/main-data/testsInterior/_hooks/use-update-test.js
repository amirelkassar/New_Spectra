'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { useEditInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import ROUTES from '@/routes';

export const useUpdateTest = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialValues);

  const {
    mutateAsync: EditInternalExamination,
    error,
    isPending,
    isError,
    reset,
  } = useEditInternalExamination();

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

      Toast.Promise(EditInternalExamination(formData), {
        success: 'تم التعديل بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR);
        },
      });
    },
    [EditInternalExamination, formData, router]
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
