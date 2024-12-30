'use client';

import { useLocale } from 'next-intl';
import { useCallback } from 'react';
import { useRouter } from '@/i18n/routing';

import {
  useAdminCancelContract,
  useAdminDeleteContract,
} from '@/hooks/queries/admin/contract';
import ROUTES from '@/routes';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { Toast } from '@/components/toast';
import CloseCircle from '@/assets/icons/close-circle';

export const useContractMenuActions = (
  contractId = '',
  lastVersionId = ''
) => {
  const router = useRouter();

  const locale = useLocale();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteContract, isPending: isDeletePending } =
    useAdminDeleteContract();

  const { mutateAsync: cancelContract, isPending: isCancelPending } =
    useAdminCancelContract();

  const onDelete = useCallback(() => {
    if (!contractId) return;
    open({
      isPending: isDeletePending,
      onConfirm: () => {
        Toast.Promise(deleteContract(contractId), {
          success:
            locale === 'ar'
              ? 'تم مسح العقد بنجاح'
              : 'Contract deleted successfully',
          onSuccess: () =>
            router.replace(ROUTES.ADMIN.CONTRACTS.DASHBOARD),
        });
      },
    });
  }, [
    deleteContract,
    isDeletePending,
    open,
    router,
    contractId,
    locale,
  ]);

  const onView = useCallback(() => {
    if (!contractId) return;
    router.push(ROUTES.ADMIN.CONTRACTS.VIEW_CONTRACT(contractId));
  }, [router, contractId]);

  const onEdit = useCallback(() => {
    if (!contractId || !lastVersionId) return;
    router.push(
      ROUTES.ADMIN.CONTRACTS.UPDATE_VERSION(contractId, lastVersionId)
    );
  }, [router, contractId, lastVersionId]);

  const onCancel = useCallback(() => {
    if (!contractId) return;
    const data = {
      id: contractId,
      reason: null,
    };

    open({
      isPending: isCancelPending,
      message: 'هل انت متأكد من الغاء العقد؟',
      icon: <CloseCircle className='size-16 mdl:size-20 text-red' />,
      onConfirm: () => {
        Toast.Promise(cancelContract(data), {
          success:
            locale === 'ar'
              ? 'تم الغاء العقد بنجاح'
              : 'Contract canceled successfully',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.CONTRACTS.DASHBOARD);
          },
        });
      },
    });
  }, [
    router,
    cancelContract,
    contractId,
    locale,
    isCancelPending,
    open,
  ]);
  return {
    onDelete,
    onView,
    onEdit,
    onCancel,
  };
};
