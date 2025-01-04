'use client';

import { useCallback } from 'react';

import { useDeleteGroupMember } from '@/hooks/queries/admin/staff/team';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { Toast } from '@/components/toast';

export const useDeleteMember = ({ ownerId }) => {
  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteMember, isPending } =
    useDeleteGroupMember();

  const onDelete = useCallback(
    (memberId) => {
      open({
        isPending,
        onConfirm: () => {
          Toast.Promise(deleteMember({ ownerId, memberId }), {
            success: 'تم مسح الطبيب بنجاح',
          });
        },
      });
    },
    [deleteMember, isPending, open, ownerId]
  );

  return { onDelete };
};
