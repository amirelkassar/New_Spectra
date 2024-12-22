'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { DeleteComplaint } from '@/hooks/queries/admin/main-data/complaints';
import ROUTES from '@/routes';

export const useComplaintsMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteComplaint, isPending } =
    DeleteComplaint(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteComplaint(), {
          success: 'تم مسح الشكوي بنجاح',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.DATAMAIN.COMPLAINTS);
          },
        });
      },
    });
  }, [deleteComplaint, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.COMPLAINTSDETAILS(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.COMPLAINTSDETAILSEDIT(id));
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
