'use client';

import { Toast } from '@/components/toast';
import { useRouter } from '@/navigation';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { DeleteSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import ROUTES from '@/routes';
import { useCallback } from 'react';

export const useMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteDiagnostics, isPending } =
    DeleteSpecialization(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: () => {
        Toast.Promise(deleteDiagnostics(), {
          success: 'تم مسح التخصص بنجاح',
          onSuccess: () =>
            router.replace(
              ROUTES.ADMIN.DATAMAIN.SPECIALTIES
            ),
        });
      },
    });
  }, [deleteDiagnostics, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.SPECIALTIESID(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(
      ROUTES.ADMIN.DATAMAIN.SPECIALTIESIDEDIT(id)
    );
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
