'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import TextInput from '@/components/inputs/text-input';
import PasswordInput from '@/components/inputs/password-input';
import Button from '@/components/button';
import ROUTES from '@/routes';
import { FormErrorMessage } from '@/components/form-error-message';
import { useLogin } from '../../../_hooks/use-login';
import GetErrorMsg from '@/components/getErrorMsg';

export const LoginForm = () => {
  const tg = useTranslations('general_obj');

  const {
    formData,
    login,
    onChange,
    validationError,
    isPending,
    error,
  } = useLogin();

  return (
    <form onSubmit={login} autoComplete='off' className='space-y-5'>
      <FormErrorMessage message={GetErrorMsg(error, 'general')} />

      <TextInput
        label={tg('email')}
        placeholder='john.doe@example.com'
        size='lg'
        id='userEmail'
        name='userEmail'
        autoComplete='off'
        styles={{
          input: {
            direction: 'ltr',
          },
        }}
        classNames={{
          input: 'text-left',
        }}
        value={formData.userEmail}
        onChange={onChange}
        error={
          validationError.userEmail ||
          GetErrorMsg(error, 'emailAddress')
        }
        disabled={isPending}
      />

      <PasswordInput
        label={tg('password')}
        placeholder='********'
        size='lg'
        id='password'
        name='password'
        autoComplete='off'
        value={formData.password}
        onChange={onChange}
        error={
          validationError.password || GetErrorMsg(error, 'password')
        }
        disabled={isPending}
      />

      <Link
        className='block w-fit text-xl transition-all hover:underline'
        href={ROUTES.AUTH.FORGOT_PASSWORD}
      >
        {tg('forgot_password')}
      </Link>

      <Button
        disabled={isPending}
        variant='secondary'
        className='w-full font-bold'
        type='submit'
      >
        {tg('login')}
      </Button>
    </form>
  );
};
