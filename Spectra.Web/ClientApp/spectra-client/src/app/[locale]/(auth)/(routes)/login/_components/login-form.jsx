'use client';

import { Link } from '@/navigation';

import TextInput from '@/components/inputs/text-input';
import PasswordInput from '@/components/inputs/password-input';
import Button from '@/components/button';
import ROUTES from '@/routes';
import { FormErrorMessage } from '@/components/form-error-message';

export const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className='space-y-5 '>
      <FormErrorMessage />

      <TextInput
        label={'اسم المستخدم'}
        placeholder={'ادخل اسمك بالكامل'}
        size='lg'
      />

      <PasswordInput
        label={'كلمة المرور'}
        placeholder={'ادخل كلمة المرور'}
        size='lg'
      />

      <Link
        className='block w-fit text-xl transition-all hover:underline'
        href={ROUTES.AUTH.FORGOT_PASSWORD}
      >
        نسيت كلمة السر؟
      </Link>

      <Button
        variant='secondary'
        className={'w-full font-bold'}
        type='submit'
      >
        تسجيل الدخول
      </Button>
    </form>
  );
};
