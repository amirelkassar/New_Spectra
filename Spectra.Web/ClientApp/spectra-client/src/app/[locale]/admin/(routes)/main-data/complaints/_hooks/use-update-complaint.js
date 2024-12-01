'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useEditComplaint } from '@/hooks/queries/admin/main-data/complaints';
import ROUTES from '@/routes';

export const useUpdateComplaint = ({ initialValues }) => {
  const router = useRouter();

  const [formData, setFormData] = useState(initialValues);

  const {
    mutateAsync: EditComplaint,
    error,
    isError,
    isPending,
    reset,
  } = useEditComplaint();

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

      Toast.Promise(EditComplaint(formData), {
        success: 'تم تعديل الشكوى بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.COMPLAINTS);
        },
      });
    },
    [EditComplaint, formData, router]
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
