'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useCreateSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import ROUTES from '@/routes';

export const useAddSpecialty = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    enName: '',
    arName: '',
    enDescription: '',
    arDescription: '',
    code: '',
    consultationCost: '',
  });

  const {
    mutateAsync: CreateSpecialization,
    error,
    isError,
    isPending,
    reset,
  } = useCreateSpecialization();

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

      Toast.Promise(CreateSpecialization(formData), {
        success: 'تم اضافة التخصص بنجاح',
        onSuccess: () =>
          router.replace(ROUTES.ADMIN.DATAMAIN.SPECIALTIES),
      });
    },
    [CreateSpecialization, formData, router]
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
