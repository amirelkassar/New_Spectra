'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { DeleteDrugs } from '@/hooks/queries/admin/main-data/drugs';
import ROUTES from '@/routes';

export const useDrugsMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteDrug, isPending } = DeleteDrugs(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: () => {
        Toast.Promise(deleteDrug(), {
          success: 'تم مسح العقار بنجاح',
          onSuccess: () => router.replace(ROUTES.ADMIN.DATAMAIN.HOME),
        });
      },
    });
  }, [deleteDrug, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.DRUGSDETAILSEDIT(id));
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
