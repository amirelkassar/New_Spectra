'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { useDeleteAttachment } from '@/hooks/queries/admin/staff/staff';

export const useAttachmentMenuActions = ({ employeeId }) => {
  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteAttachment, isPending } =
    useDeleteAttachment();

  const onDelete = useCallback(
    (fileId) => {
      open({
        isPending,
        onConfirm: () => {
          Toast.Promise(deleteAttachment({ fileId, employeeId }), {
            success: 'تم مسح المرفق بنجاح',
          });
        },
      });
    },
    [deleteAttachment, isPending, open, employeeId]
  );

  const onDownload = useCallback(() => {}, []);

  const onPrint = useCallback(() => {}, []);

  const onEdit = useCallback(() => {}, []);

  return {
    onDelete,
    onDownload,
    onPrint,
    onEdit,
  };
};
