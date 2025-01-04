'use client';

import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useCallback } from 'react';

import ROUTES from '@/routes';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import {
  useAcceptEmployeeContract,
  useRejectEmployeeContract,
} from '@/hooks/queries/employee/contract';
import CloseCircle from '@/assets/icons/close-circle';
import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';

export const useContractVersionActions = (
  versionId = '',
  contractId = ''
) => {
  const router = useRouter();

  const locale = useLocale();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: rejectContract, isPending: isPendingReject } =
    useRejectEmployeeContract();

  const { mutateAsync: acceptContract, isPending: isPendingAccept } =
    useAcceptEmployeeContract();

  const onEdit = useCallback(
    () =>
      router.push(ROUTES.DOCTOR.CONTRACT.EDIT_CONTRACT(versionId)),
    [router, versionId]
  );

  const onReject = useCallback(() => {
    if (!contractId) return;
    const data = {
      id: contractId,
      reason: null,
    };

    open({
      isPending: isPendingReject,
      message: 'هل انت متأكد من رفض العقد؟',
      icon: <CloseCircle className='size-16 mdl:size-20 text-red' />,
      onConfirm: () => {
        Toast.Promise(rejectContract(data), {
          success:
            locale === 'ar'
              ? 'تم رفض العقد بنجاح'
              : 'Contract rejected successfully',
          onSuccess: () => {
            router.replace(ROUTES.DOCTOR.CONTRACT.DASHBOARD);
          },
        });
      },
    });
  }, [
    router,
    rejectContract,
    contractId,
    locale,
    isPendingReject,
    open,
  ]);

  const onAccept = useCallback(
    (signature, closeModal) => {
      if (!contractId || !signature) return;

      const data = {
        id: contractId,
        signature,
      };

      const formData = getFormData(data);

      Toast.Promise(acceptContract(formData), {
        success:
          locale === 'ar'
            ? 'تم قبول العقد بنجاح'
            : 'Contract accepted successfully',
        onSuccess: () => {
          router.replace(ROUTES.DOCTOR.CONTRACT.DASHBOARD);
          closeModal();
        },
      });
    },
    [router, contractId, locale, acceptContract]
  );

  return { onEdit, onAccept, onReject, isPendingAccept };
};
