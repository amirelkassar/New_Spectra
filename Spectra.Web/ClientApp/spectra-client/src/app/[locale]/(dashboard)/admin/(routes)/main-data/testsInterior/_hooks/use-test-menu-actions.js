'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { DeleteInternalExamination } from '@/hooks/queries/admin/main-data/testsInterior';
import ROUTES from '@/routes';

export const useTestMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteInternalExamination, isPending } =
    DeleteInternalExamination(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteInternalExamination(), {
          success: 'تم المسح بنجاح',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR);
          },
        });
      },
    });
  }, [deleteInternalExamination, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.TESTSINTERIORDETAILS(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.TESTSINTERIORDETAILSEDIT(id));
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
