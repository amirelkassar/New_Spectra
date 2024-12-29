'use client';

import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useCallback } from 'react';

import ROUTES from '@/routes';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';

import CloseCircle from '@/assets/icons/close-circle';
import { Toast } from '@/components/toast';
import { useCancelEmployeeContract } from '@/hooks/queries/employee/contract';

export const useCancelContract = (contractId = '') => {
  const router = useRouter();

  const locale = useLocale();

  const open = useConfirmModalStore((s) => s.open);

  const { mutateAsync: cancelContract, isPending } =
    useCancelEmployeeContract();

  const onCancel = useCallback(() => {
    if (!contractId) return;
    const data = {
      id: contractId,
      reason: null,
    };

    open({
      isPending,
      message: 'هل انت متأكد من الغاء العقد؟',
      icon: <CloseCircle className='size-16 mdl:size-20 text-red' />,
      onConfirm: () => {
        Toast.Promise(cancelContract(data), {
          success:
            locale === 'ar'
              ? 'تم الغاء العقد بنجاح'
              : 'Contract canceled successfully',
          onSuccess: () => {
            router.replace(ROUTES.DOCTOR.CONTRACT.DASHBOARD);
          },
        });
      },
    });
  }, [router, cancelContract, contractId, locale, isPending, open]);

  return { onCancel };
};
