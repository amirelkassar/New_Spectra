'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useCreateDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';
import ROUTES from '@/routes';

export const useAddDaignostic = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    code1: '',
    code2: '',
    code3: '',
    description: '',
  });

  const {
    mutateAsync: CreateDiagnostics,
    error,
    isPending,
    isError,
    reset,
  } = useCreateDiagnostics();

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

      Toast.Promise(CreateDiagnostics(formData), {
        success: 'تم اضافة التشخيص بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS);
        },
      });
    },
    [CreateDiagnostics, formData, router]
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
