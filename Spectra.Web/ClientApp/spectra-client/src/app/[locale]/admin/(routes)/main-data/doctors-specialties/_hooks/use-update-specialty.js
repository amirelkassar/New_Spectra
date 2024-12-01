'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useEditSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import ROUTES from '@/routes';

export const useUpdateSpecialty = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialValues);

  const {
    mutateAsync: EditSpecialization,
    error,
    isError,
    isPending,
    reset,
  } = useEditSpecialization(initialValues?.id);

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

      Toast.Promise(EditSpecialization(formData), {
        success: 'تم تعديل التخصص بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.SPECIALTIES);
        },
      });
    },
    [EditSpecialization, formData, router]
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
