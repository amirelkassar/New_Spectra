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
        onConfirm: async () => {
          await Toast.Promise(
            deleteAttachment({ fileId, employeeId }),
            {
              success: 'تم مسح المرفق بنجاح',
            }
          );
        },
      });
    },
    [deleteAttachment, isPending, open, employeeId]
  );

  const onDownload = useCallback(async (url, fileName) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || 'downloaded-file';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
      });
  }, []);

  const onPrint = useCallback(() => {}, []);

  return {
    onDelete,
    onDownload,
    onPrint,
  };
};
