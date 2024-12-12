'use client';

import { useCallback } from 'react';

import { getFormData } from '@/lib/utils';
import { Toast } from '@/components/toast';
import { useUpdateAttachment as useUpdateAttachmentMutation } from '@/hooks/queries/admin/staff/attachment';

export const useUpdateAttachment = ({
  empId = '',
  type = '',
  documentId = '',
}) => {
  const {
    mutateAsync: updateAttachment,
    isPending,
    error,
    isSuccess,
    reset,
    isError,
  } = useUpdateAttachmentMutation(empId);

  const onSubmit = useCallback(
    (
      attachment = {
        name: '',
        file: undefined,
      },
      closeModal = () => {}
    ) => {
      if (!empId) return;
      if (!attachment.file) return;
      if (!attachment.name) return;
      if (!type) return;
      if (!documentId) return;

      if (isError) reset();

      const data = {
        empId,
        documentId,
        name: attachment.name,
        file: attachment.file,
        type,
      };

      const formData = getFormData(data);

      Toast.Promise(updateAttachment(formData), {
        success: 'تم التعديل بنجاح',
        onSuccess: closeModal,
      });
    },
    [updateAttachment, empId, isError, reset, type, documentId]
  );

  return {
    onSubmit,
    isPending,
    error,
    isSuccess,
    isError,
  };
};
