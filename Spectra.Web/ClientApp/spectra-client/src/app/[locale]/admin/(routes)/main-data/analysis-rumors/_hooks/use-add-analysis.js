'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useCreateMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import ROUTES from '@/routes';

export const useAddAnalysis = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    examinationTypes: '1',
  });

  const {
    mutateAsync: createMedicalTests,
    error,
    isPending,
    isError,
    reset,
  } = useCreateMedicalTests();

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

      Toast.Promise(createMedicalTests(formData), {
        success: 'تم الاضافة بنجاح',
        onSuccess: () => {
          router.replace(
            ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS
          );
        },
      });
    },
    [createMedicalTests, formData, router]
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
