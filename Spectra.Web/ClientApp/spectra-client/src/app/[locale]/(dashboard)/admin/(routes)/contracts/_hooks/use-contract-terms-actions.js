'use client';

import { useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import { useLocale } from 'next-intl';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useContractTermsStore } from '@/dashboard/_hooks/use-contract-terms-store';
import { useAdminAcceptContract } from '@/hooks/queries/admin/contract';
import ROUTES from '@/routes';

export const useContractTermsActions = () => {
  const router = useRouter();

  const locale = useLocale();

  const params = useParams();

  const { contractId, versionId } = params;

  const textSections = useContractTermsStore((s) => s.sections);

  const { mutateAsync: acceptContract, isPending } =
    useAdminAcceptContract();

  const onEdit = useCallback(
    () =>
      router.replace(
        ROUTES.ADMIN.CONTRACTS.UPDATE_TERMS(contractId, versionId),
        {
          scroll: false,
        }
      ),
    [router, contractId, versionId]
  );

  const onSave = useCallback(
    () =>
      router.replace(
        ROUTES.ADMIN.CONTRACTS.ACCEPT_VERSION(contractId, versionId),
        {
          scroll: false,
        }
      ),
    [router, contractId, versionId]
  );

  const onSend = useCallback(
    async (signature, closeModal) => {
      if (!signature || !textSections.length) return;

      const data = {
        textSections,
        id: contractId,
        signature,
      };

      const formData = getFormData(data);

      Toast.Promise(acceptContract(formData), {
        success:
          locale === 'ar' ? 'تم قبول العقد' : 'Contract accepted',
        onSuccess: () => {
          closeModal();
          router.push(ROUTES.ADMIN.CONTRACTS.DASHBOARD);
        },
      });
    },
    [contractId, textSections, router, locale, acceptContract]
  );

  return {
    onEdit,
    onSend,
    onSave,
    isPending,
  };
};
