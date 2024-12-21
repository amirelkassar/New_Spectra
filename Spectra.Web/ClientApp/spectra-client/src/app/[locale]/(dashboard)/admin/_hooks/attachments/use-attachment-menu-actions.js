'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { useDeleteAttachment } from '@/hooks/queries/admin/staff/staff';
import { downloadFile, printFile } from '@/lib/utils';

export const useAttachmentMenuActions = ({ employeeId }) => {
  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteAttachment, isPending } =
    useDeleteAttachment();

  const onDelete = useCallback(
    (fileId) => {
      open({
        isPending,
        onConfirm: async () => {
          Toast.Promise(deleteAttachment({ fileId, employeeId }), {
            success: 'تم مسح المرفق بنجاح',
          });
        },
      });
    },
    [deleteAttachment, isPending, open, employeeId]
  );

  const onDownload = useCallback(downloadFile, []);

  const onPrint = useCallback(printFile, []);

  return {
    onDelete,
    onDownload,
    onPrint,
  };
};
