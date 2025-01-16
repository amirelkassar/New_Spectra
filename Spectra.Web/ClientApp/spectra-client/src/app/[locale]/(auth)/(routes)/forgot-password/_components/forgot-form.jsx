'use client';

import { useTranslations } from 'next-intl';

import { FormTitle } from '../../../_components/form-title';
import { useForgetPassword } from '../../../_hooks/use-forget-password';
import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';
import CheckHeartIcon from '@/assets/icons/check-heart';

export const ForgotForm = () => {
  const tg = useTranslations('general_obj');

  const { form, success, onSend, onResend, isPending, countdown } =
    useForgetPassword();

  if (success)
    return (
      <SuccessUi
        onResend={onResend}
        countdown={countdown}
        isPending={isPending}
      />
    );

  return (
    <form
      onSubmit={form.handleSubmit(onSend)}
      className='flex flex-col lg:max-w-xl gap-5 h-[80vh] mdl:h-[68vh]'
    >
      <FormTitle
        heading={tg('reset_password_heading')}
        subheading={tg('reset_password_subheading')}
      />

      <TextInput
        label={tg('email')}
        placeholder={tg('email')}
        size='lg'
        {...form.register('email')}
        error={form.formState.errors.email?.message}
      />

      <div className='flex-1 flex items-end'>
        <Button
          type='submit'
          className='font-bold w-full block'
          variant='secondary'
          disabled={form.formState.isSubmitting}
        >
          {tg('send')}
        </Button>
      </div>
    </form>
  );
};

const SuccessUi = ({
  onResend = () => {},
  countdown = 0,
  isPending = false,
}) => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex flex-col gap-10 items-center mdl:items-start'>
      <FormTitle
        heading={tg('reset_password_sent_heading')}
        subheading={tg('reset_password_sent_subheading')}
      />

      <CheckHeartIcon />

      <div className='text-base font-bold mdl:font-normal mdl:text-xl'>
        <span>{tg('resend_prompt')} </span>
        <button
          onClick={onResend}
          className='text-red transition hover:underline disabled:text-grayDark disabled:hover:no-underline disabled:cursor-not-allowed'
          disabled={countdown > 0 || isPending}
        >
          {countdown > 0 ? `${countdown}s` : tg('resend')}
        </button>
      </div>
    </div>
  );
};
