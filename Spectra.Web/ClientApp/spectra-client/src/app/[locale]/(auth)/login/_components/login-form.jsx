'use client';

import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';
import PasswordInput from '@/components/inputs/password-input';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

import { useState } from 'react';

const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className='space-y-5 '>
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
      <div className='me-auto  w-fit'>
        <Link href={ROUTES.AUTH.FORGOT_PASSWORD}>
          نسيت كلمة السر؟
        </Link>
      </div>
      <Button
        variant='secondary'
        className={'w-full '}
        type='submit'
      >
        التالي
      </Button>
    </form>
  );
};

export default LoginForm;
