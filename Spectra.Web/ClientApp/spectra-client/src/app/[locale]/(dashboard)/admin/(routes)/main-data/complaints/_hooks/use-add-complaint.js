'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { useCreateComplaint } from '@/hooks/queries/admin/main-data/complaints';
import ROUTES from '@/routes';

export const useAddComplaint = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    complaintName: '',
    code1: '',
    descriptionOfTheComplaint: '',
  });

  const {
    mutateAsync: CreateComplaint,
    error,
    isPending,
    isError,
    reset,
  } = useCreateComplaint();

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

      Toast.Promise(CreateComplaint(formData), {
        success: 'تم ارسال الشكوي بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.COMPLAINTS);
        },
      });
    },
    [CreateComplaint, formData, router]
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
