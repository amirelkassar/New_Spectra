'use client';

import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';
import { useLocale } from 'next-intl';

import ROUTES from '@/routes';
import { useAdminRejectContract } from '@/hooks/queries/admin/contract';
import { Toast } from '@/components/toast';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import CloseCircle from '@/assets/icons/close-circle';

export const useContractVersionActions = ({ contractId, id }) => {
  const router = useRouter();

  const locale = useLocale();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: rejectContract, isPending } =
    useAdminRejectContract();

  const onEdit = useCallback(
    () =>
      router.push(
        ROUTES.ADMIN.CONTRACTS.UPDATE_VERSION(contractId, id)
      ),
    [router, contractId, id]
  );

  const onReject = useCallback(() => {
    if (!contractId) return;
    const data = {
      id: contractId,
      reason: null,
    };

    open({
      isPending,
      message: 'هل انت متأكد من رفض العقد؟',
      icon: <CloseCircle className='size-16 mdl:size-20 text-red' />,
      onConfirm: () => {
        Toast.Promise(rejectContract(data), {
          success:
            locale === 'ar'
              ? 'تم رفض العقد بنجاح'
              : 'Contract rejected successfully',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.CONTRACTS.DASHBOARD);
          },
        });
      },
    });
  }, [router, rejectContract, contractId, locale, isPending, open]);

  const onAccept = useCallback(
    () =>
      router.push(
        ROUTES.ADMIN.CONTRACTS.ACCEPT_VERSION(contractId, id)
      ),
    [router, contractId, id]
  );

  return {
    onEdit,
    onReject,
    onAccept,
  };
};
