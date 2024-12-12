'use client';

import { useCallback } from 'react';

import { useDeleteGroupMember } from '@/hooks/queries/admin/staff/team';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { Toast } from '@/components/toast';

export const useDeleteMember = ({ ownerId }) => {
  const open = useConfirmModal((s) => s.open);

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
