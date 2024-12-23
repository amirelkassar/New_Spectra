'use client';

import { useRouter } from '@/i18n/routing';
import { useCallback } from 'react';
import { useLocale } from 'next-intl';

import ROUTES from '@/routes';
import { Toast } from '@/components/toast';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import CloseCircle from '@/assets/icons/close-circle';
import {
  useEmployeeHeadAcceptContract,
  useEmployeeHeadRejectContract,
} from '@/hooks/queries/employee-head/contract';
import { getFormData } from '@/lib/utils';

export const useContractVersionActions = ({ contractId }) => {
  const router = useRouter();

  const locale = useLocale();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: rejectContract, isPending: isPendingReject } =
    useEmployeeHeadRejectContract();

  const { mutateAsync: acceptContract, isPending: isPendingAccept } =
    useEmployeeHeadAcceptContract();

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
            router.replace(ROUTES.DOCTOR.CONTRACTS.DASHBOARD);
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
          router.replace(ROUTES.DOCTOR.CONTRACTS.DASHBOARD);
          closeModal();
        },
      });
    },
    [router, contractId, locale, acceptContract]
  );

  return {
    onReject,
    onAccept,
    isPendingAccept,
  };
};
