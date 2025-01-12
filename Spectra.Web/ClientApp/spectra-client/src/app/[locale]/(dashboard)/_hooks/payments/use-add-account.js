'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useLocale } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';

import { useUserAddAccount } from '@/hooks/queries/user/billing-management';
import { Toast } from '@/components/toast';

const Schema = z.object({
  bankName: z
    .string()
    .min(3, 'Bank name must be at least 3 characters long'),
  accountNumber: z
    .string()
    .min(1, 'Account number is required')
    .regex(
      /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/,
      'Invalid account number'
    ),
  accountHolderName: z
    .string()
    .min(1, 'Account holder name is required'),
  country: z.string().min(1, 'Country is required'),
  countryCode: z.string().optional(),
  default: z.boolean().optional().default(true),
});

export const useAddAccount = () => {
  const locale = useLocale();

  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      bankName: '',
      accountNumber: '',
      accountHolderName: '',
      countryCode: '',
      country: '',
      default: true,
    },
  });

  const { mutateAsync: addAccount } = useUserAddAccount();

  const onConfirm = useCallback(
    async (data, cb) => {
      try {
        await Toast.Promise(addAccount(data), {
          success:
            locale === 'ar'
              ? 'تم إضافة الحساب بنجاح'
              : 'Account added successfully',
        });
        cb();
      } catch {}
    },
    [addAccount, locale]
  );

  return { form, onConfirm };
};
