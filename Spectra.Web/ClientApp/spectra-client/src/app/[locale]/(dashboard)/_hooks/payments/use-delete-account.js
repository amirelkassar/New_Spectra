'use client';

import { useLocale } from 'next-intl';
import { useCallback } from 'react';

import { Toast } from '@/components/toast';
import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import { useUserDeleteAccount } from '@/hooks/queries/user/billing-management';

export const useDeleteAccount = () => {
  const locale = useLocale();

  const open = useConfirmModalStore((state) => state.open);

  const { mutateAsync: deleteAccount } = useUserDeleteAccount();

  const onDelete = useCallback(
    (accountId) => {
      open({
        onConfirm: async () => {
          try {
            await Toast.Promise(deleteAccount(accountId), {
              success:
                locale === 'ar'
                  ? 'تم حذف الحساب بنجاح'
                  : 'Account deleted successfully',
            });
          } catch {}
        },
      });
    },
    [deleteAccount, locale, open]
  );

  return { onDelete };
};
