'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/navigation';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { useDeleteStaff } from '@/hooks/queries/admin/staff/staff';
import ROUTES from '@/routes';

export const useEmployeeMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteStaff, isPending } =
    useDeleteStaff(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: () => {
        Toast.Promise(deleteStaff(), {
          success: 'تم مسح الموظف بنجاح',
          onSuccess: () =>
            router.replace(ROUTES.ADMIN.STAFF.DASHBOARD),
        });
      },
    });
  }, [deleteStaff, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.STAFF.STAFFID(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.STAFF.STAFFIDEDIT(id));
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
