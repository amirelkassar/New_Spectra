'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';

import { Toast } from '@/components/toast';
import { useForgetPasswordMutation } from '@/hooks/queries/auth';

const Schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email'),
});

export const useForgetPassword = () => {
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      email: '',
    },
  });

  const {
    mutateAsync: sendEmail,
    isPending,
    reset,
    error,
  } = useForgetPasswordMutation();

  const onSend = useCallback(
    async (data) => {
      try {
        await sendEmail(data);
        setSuccess(true);
        setCountdown(60);
      } catch {
        form.setError('email', {
          message:
            error?.response?.data?.errors?.NotFoundError?.join(', '),
        });
      }
    },
    [sendEmail, error, form]
  );

  const onResend = useCallback(async () => {
    reset();
    const { email } = form.getValues();

    try {
      await sendEmail({ email });
      setCountdown(60);
    } catch {
      Toast.Error('Something went wrong');
    }
  }, [reset, sendEmail, form]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(
        () => setCountdown((prev) => prev - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return {
    form,
    success,
    countdown,
    onSend,
    onResend,
    isPending,
  };
};
