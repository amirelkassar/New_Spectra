'use client';

import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useRouter } from '@/i18n/routing';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';
import { useDeletePackage as useDeletePackageQuery } from '@/hooks/queries/admin/settings/packages';
import ROUTES from '@/routes';

export const useDeletePacakge = (id) => {
  const router = useRouter();

  const open = useConfirmModal((s) => s.open);

  const { mutateAsync: deletePackage, isPending } =
    useDeletePackageQuery(id);

  const onDelete = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      open({
        isPending,
        onConfirm: () => {
          Toast.Promise(deletePackage(), {
            success: 'تم مسح الباقة بنجاح',
            onSuccess: () =>
              router.replace(
                ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD
              ),
          });
        },
      });
    },
    [deletePackage, isPending, open, router]
  );

  return {
    onDelete,
  };
};
