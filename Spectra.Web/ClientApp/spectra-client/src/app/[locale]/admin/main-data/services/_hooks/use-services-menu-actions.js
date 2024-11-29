'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/navigation';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { useDeleteService } from '@/hooks/queries/admin/main-data/services';
import ROUTES from '@/routes';

export const useServicesMenuActions = (id) => {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deleteService, isPending } =
    useDeleteService(id);

  const onDelete = useCallback(() => {
    open({
      isPending,
      onConfirm: async () => {
        Toast.Promise(deleteService(), {
          success: 'تم مسح الخدمة بنجاح',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
          },
        });
      },
    });
  }, [deleteService, isPending, open, router]);

  const onView = useCallback(() => {
    router.push(ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id));
  }, [router, id]);

  const onEdit = useCallback(() => {
    router.push(
      ROUTES.ADMIN.DATAMAIN.SERVICESDETAILSEDIT(id)
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
