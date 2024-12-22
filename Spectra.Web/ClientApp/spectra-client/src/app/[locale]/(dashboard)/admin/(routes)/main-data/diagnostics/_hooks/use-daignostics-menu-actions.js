'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import ROUTES from '@/routes';
import { DeleteDiagnostics } from '@/hooks/queries/admin/main-data/diagnostics';

export const useDaignosticsMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteDiagnostics, isPending } =
    DeleteDiagnostics(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteDiagnostics(), {
          success: 'تم المسح بنجاح',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS);
          },
        });
      },
    });
  }, [deleteDiagnostics, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILS(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILSEDIT(id));
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
