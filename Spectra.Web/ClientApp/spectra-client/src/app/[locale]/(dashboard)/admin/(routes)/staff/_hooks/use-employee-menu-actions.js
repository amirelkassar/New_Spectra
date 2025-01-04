'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { useDeleteStaff } from '@/hooks/queries/admin/staff/staff';
import ROUTES from '@/routes';

export const useEmployeeMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteStaff, isPending } = useDeleteStaff(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: () => {
        Toast.Promise(deleteStaff(), {
          success: 'تم مسح الموظف بنجاح',
          onSuccess: () => router.replace(ROUTES.ADMIN.STAFF.HOME),
        });
      },
    });
  }, [deleteStaff, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.STAFF.STAFF_ID(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.STAFF.STAFF_ID_EDIT(id));
  }, [router, id]);

  const onExport = useCallback(() => {}, []);

  const onPrint = useCallback(() => {}, []);

  return {
    onDelete,
    onView,
    onEdit,
    onExport,
    onPrint,
  };
};
