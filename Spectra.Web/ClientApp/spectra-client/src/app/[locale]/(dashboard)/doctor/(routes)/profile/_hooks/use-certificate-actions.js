'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { useDeleteProfileAttachment } from '@/hooks/queries/user/profile';
import { downloadFile, printFile } from '@/lib/utils';

export const useCertificateActions = () => {
  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteCertificate, isPending } =
    useDeleteProfileAttachment();

  const onDelete = useCallback(
    (fileId) => {
      open({
        isPending,
        onConfirm: async () => {
          Toast.Promise(deleteCertificate(fileId), {
            success: 'تم مسح الشهادة بنجاح',
          });
        },
      });
    },
    [deleteCertificate, isPending, open]
  );

  const onDownload = useCallback(downloadFile, []);

  const onPrint = useCallback(printFile, []);

  return {
    onDelete,
    onDownload,
    onPrint,
  };
};
