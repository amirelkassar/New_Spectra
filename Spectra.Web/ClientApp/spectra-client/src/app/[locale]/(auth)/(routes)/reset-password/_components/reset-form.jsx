'use client';

import { useTranslations } from 'next-intl';

import { FormTitle } from '../../../_components/form-title';
import { useResetPassword } from '../../../_hooks/use-reset-password';
import Button from '@/components/button';
import PasswordInput from '@/components/inputs/password-input';

export const ResetForm = () => {
  const tg = useTranslations('general_obj');

  const { form, onConfirm, isPending } = useResetPassword();

  return (
    <form
      onSubmit={form.handleSubmit(onConfirm)}
      className='flex flex-col lg:max-w-xl gap-5 h-[80vh] mdl:h-[68vh]'
    >
      <FormTitle heading={tg('reset_password_heading')} />

      <PasswordInput
        label={tg('new_password')}
        placeholder={tg('password')}
        size='lg'
        {...form.register('newPassword')}
        error={form.formState.errors.newPassword?.message}
      />

      <PasswordInput
        label={tg('confirm_new_password')}
        placeholder={tg('confirm_password')}
        size='lg'
        {...form.register('confirmPassword')}
        error={form.formState.errors.confirmPassword?.message}
      />

      <div className='flex flex-1 items-end'>
        <Button
          variant='secondary'
          type='submit'
          className='w-full font-bold'
          disabled={isPending}
        >
          {tg('confirm')}
        </Button>
      </div>
    </form>
  );
};
