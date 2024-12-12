'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import ROUTES from '@/routes';

import { DeleteMedicalTests } from '@/hooks/queries/admin/main-data/analysis';

export const useAnalysisMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteMedicalTests, isPending } =
    DeleteMedicalTests(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteMedicalTests(), {
          success: 'تم المسح بنجاح',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS);
          },
        });
      },
    });
  }, [deleteMedicalTests, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSDETAILS(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSDETAILSEDIT(id));
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
