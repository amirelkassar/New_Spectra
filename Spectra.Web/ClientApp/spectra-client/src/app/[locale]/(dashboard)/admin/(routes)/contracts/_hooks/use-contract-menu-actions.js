'use client';

import { useLocale } from 'next-intl';
import { useCallback } from 'react';
import { useRouter } from '@/i18n/routing';

import { useAdminDeleteContract } from '@/hooks/queries/admin/contract';
import ROUTES from '@/routes';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';

export const useContractMenuActions = (contractId) => {
  const router = useRouter();

  const locale = useLocale;

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: deleteContract, isPending } =
    useAdminDeleteContract();

  const onDelete = useCallback(() => {
    open({
      isPending,
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
  }, [deleteContract, isPending, open, router, contractId, locale]);

  const onView = useCallback(
    () =>
      router.push(ROUTES.ADMIN.CONTRACTS.VIEW_CONTRACT(contractId)),
    [router, contractId]
  );

  const onEdit = useCallback(() => {}, []);

  const onCancel = useCallback(() => {}, []);

  return {
    onDelete,
    onView,
    onEdit,
    onCancel,
  };
};
