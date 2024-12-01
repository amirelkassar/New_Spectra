'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { useEditSection } from '@/hooks/queries/admin/main-data/section';
import ROUTES from '@/routes';
import { Toast } from '@/components/toast';

export const useUpdateDepatment = ({ initialValues }) => {
  const router = useRouter();

  const {
    mutateAsync: updateSection,
    error,
    isPending,
    isError,
    reset,
  } = useEditSection();

  const [formData, setFormData] = useState(initialValues);

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

      Toast.Promise(updateSection(formData), {
        success: 'تم تعديل القسم بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.DEPARTMENTS);
        },
      });
    },
    [updateSection, formData, router]
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
