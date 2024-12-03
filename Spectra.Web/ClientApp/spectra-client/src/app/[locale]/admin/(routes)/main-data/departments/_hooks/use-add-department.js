'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { useCreateSection } from '@/hooks/queries/admin/main-data/section';
import { Toast } from '@/components/toast';
import ROUTES from '@/routes';

export const useAddDepatment = () => {
  const router = useRouter();

  const {
    mutateAsync: CreateSection,
    error,
    isPending,
    isError,
    reset,
  } = useCreateSection();

  const [formData, setFormData] = useState({
    enName: '',
    arName: '',
    headDoctorId: '',
    specsifications: [],
  });

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

      Toast.Promise(CreateSection(formData), {
        success: 'تم اضافة القسم بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.DEPARTMENTS);
        },
      });
    },
    [CreateSection, formData, router]
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
