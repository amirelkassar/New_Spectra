'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { notFound, useSearchParams } from 'next/navigation';

import { Toast } from '@/components/toast';
import { passwordValidation } from '@/lib/utils';
import { useResetPasswordMutation } from '@/hooks/queries/auth';
import ROUTES from '@/routes';

const Schema = z
  .object({
    newPassword: passwordValidation,
    confirmPassword: z
      .string()
      .min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords must match',
  });

export const useResetPassword = () => {
  const router = useRouter();

  const locale = useLocale();

  const searchParams = useSearchParams();

  const email = searchParams?.get('email')?.toLocaleLowerCase() || '';
  const token = searchParams?.get('token') || '';

  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const { mutateAsync: resetPassword, isPending } =
    useResetPasswordMutation();

  if (!email && !token) notFound();

  const onConfirm = useCallback(
    async ({ newPassword }) => {
      const data = {
        email,
        token,
        newPassword,
      };

      Toast.Promise(resetPassword(data), {
        success:
          locale === 'ar'
            ? 'تم استعادة كلمة المرور بنجاح'
            : 'Password reset successfully',
        onSuccess: () => {
          sessionStorage.setItem('loginEmail', email);
          sessionStorage.setItem('loginPassword', newPassword);
          router.replace(ROUTES.AUTH.LOGIN);
        },
      });
    },
    [email, token, router, resetPassword, locale]
  );

  return { form, onConfirm, isPending };
};
