'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useEditMedicalTests } from '@/hooks/queries/admin/main-data/analysis';
import ROUTES from '@/routes';

export const useUpdateAnalysis = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialValues);

  const {
    mutateAsync: EditMedicalTests,
    error,
    isError,
    isPending,
    reset,
  } = useEditMedicalTests(formData?.id);

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

      Toast.Promise(EditMedicalTests(formData), {
        success: 'تم التعديل بنجاح',
        onSuccess: () => {
          router.replace(
            ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS
          );
        },
      });
    },
    [EditMedicalTests, formData, router]
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
