'use client';

import { useCallback } from 'react';

import { useAddAttachment as useAddAttachmentMutation } from '@/hooks/queries/admin/staff/attachment';
import { getFormData } from '@/lib/utils';
import { Toast } from '@/components/toast';

export const useAddAttachment = ({ empId = '', type = '' }) => {
  const {
    mutateAsync: addAttachment,
    isPending,
    error,
    isSuccess,
    reset,
    isError,
  } = useAddAttachmentMutation(empId);

  const onSubmit = useCallback(
    (
      attachment = {
        name: '',
        file: undefined,
      },
      closeModal = () => {}
    ) => {
      if (!type && !empId) return;
      if (!attachment.file) return;
      if (!attachment.name) return;

      if (isError) reset();

      const data = {
        empId,
        name: attachment.name,
        file: attachment.file,
        type,
      };

      const formData = getFormData(data);

      Toast.Promise(addAttachment(formData), {
        success: 'تم الاضافة بنجاح',
        onSuccess: closeModal,
      });
    },
    [addAttachment, empId, isError, reset, type]
  );

  return {
    onSubmit,
    isPending,
    error,
    isSuccess,
    isError,
  };
};
