import React from 'react';
import Button from '@/components/button';
import GoogleIcon from '@/assets/icons/google';
import AppleIcon from '@/assets/icons/apple';
import SignupModal from './signup-modal';
import { FormTitle } from '../_components/form-title';
import LoginForm from './_components/login-form';

const LoginPage = () => {
  return (
    <div className='space-y-10'>
      <FormTitle heading='أهلاً بعودتك' />

      <LoginForm />

      <div className='space-y-5'>
        <Button
          dir='ltr'
          className={
            'w-full border-greenMain whitespace-nowrap'
          }
        >
          <GoogleIcon />
          Sign in with Google
        </Button>
        <Button
          dir='ltr'
          className={
            'w-full border-greenMain whitespace-nowrap'
          }
        >
          <AppleIcon />
          Sign in with Apple
        </Button>
      </div>

      <SignupModal />
    </div>
  );
};

export default LoginPage;
