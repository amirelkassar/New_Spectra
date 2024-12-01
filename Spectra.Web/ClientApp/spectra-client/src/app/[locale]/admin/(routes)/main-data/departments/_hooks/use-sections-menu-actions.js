'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/navigation';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { DeleteSection } from '@/hooks/queries/admin/main-data/section';
import ROUTES from '@/routes';

export const useSectionsMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteSection, isPending } =
    DeleteSection(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteSection(), {
          success: 'تم المسح بنجاح',
          onSuccess: () => {
            router.replace(
              ROUTES.ADMIN.DATAMAIN.DEPARTMENTS
            );
          },
        });
      },
    });
  }, [deleteSection, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(
      ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILS(id)
    );
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(
      ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILSEDIT(id)
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
