'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useLocale } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';

import { useUserUpdateAccount } from '@/hooks/queries/user/billing-management';
import { Toast } from '@/components/toast';

const Schema = z.object({
  id: z.string().min(1, 'ID is required'),
  bankName: z
    .string()
    .min(3, 'Bank name must be at least 3 characters long'),
  accountNumber: z.string().min(1, 'Account number is required'),
  accountHolderName: z
    .string()
    .min(1, 'Account holder name is required'),
  branch: z.string().min(1, 'Branch name is required'),
  country: z.string().min(1, 'Country is required'),
  countryCode: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  default: z.boolean().optional(),
});

export const useUpdateAccount = ({ initialValues }) => {
  const locale = useLocale();

  const form = useForm({
    resolver: zodResolver(Schema),
    values: {
      id: initialValues?.id || '',
      bankName: initialValues?.bankName || '',
      accountNumber: initialValues?.accountNumber || '',
      accountHolderName: initialValues?.accountHolderName || '',
      branch: initialValues?.branch || '',
      countryCode: initialValues?.countryCode || '',
      country: initialValues?.country || '',
      city: initialValues?.city || '',
      default: initialValues?.default || false,
    },
  });

  const { mutateAsync: updateAccount } = useUserUpdateAccount();

  const onConfirm = useCallback(
    async (data, cb) => {
      try {
        await Toast.Promise(updateAccount(data), {
          success:
            locale === 'ar'
              ? 'تم تعديل الحساب بنجاح'
              : 'Account Updated successfully',
        });
        cb();
      } catch {}
    },
    [updateAccount, locale]
  );

  return { form, onConfirm };
};
