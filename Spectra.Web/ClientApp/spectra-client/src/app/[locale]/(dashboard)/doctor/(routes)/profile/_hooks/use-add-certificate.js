'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useAddProfileAttachment } from '@/hooks/queries/user/profile';

export const useAddCertificate = () => {
  const {
    mutateAsync: addCertificate,
    isPending,
    error,
    isSuccess,
    reset,
    isError,
  } = useAddProfileAttachment();

  const onSubmit = useCallback(
    (
      attachment = {
        name: '',
        file: undefined,
      },
      closeModal = () => {}
    ) => {
      if (!attachment.file) return;
      if (!attachment.name) return;

      if (isError) reset();

      const data = {
        name: attachment.name,
        file: attachment.file,
        type: 3,
      };

      const formData = getFormData(data);

      Toast.Promise(addCertificate(formData), {
        success: 'تم الاضافة بنجاح',
        onSuccess: closeModal,
      });
    },
    [addCertificate, isError, reset]
  );

  return {
    onSubmit,
    isPending,
    error,
    isSuccess,
    isError,
  };
};
