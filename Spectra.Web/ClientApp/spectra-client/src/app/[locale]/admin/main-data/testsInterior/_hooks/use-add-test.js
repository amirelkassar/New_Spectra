'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useCreateInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import ROUTES from '@/routes';

export const useAddTest = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
  });

  const {
    mutateAsync: createInternalExamination,
    error,
    isPending,
    isError,
    reset,
  } = useCreateInternalExamination();

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

      Toast.Promise(createInternalExamination(formData), {
        success: 'تم اضافة الفحص بنجاح',
        onSuccess: () => {
          router.replace(
            ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR
          );
        },
      });
    },
    [createInternalExamination, formData, router]
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
