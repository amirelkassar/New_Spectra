'use client';

import Button from '@/components/button';
import PasswordInput from '@/components/inputs/password-input';
import TextInput from '@/components/inputs/text-input';

export const ChangePasswordForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      autoComplete='off'
      className='space-y-5 max-w-xl xl:max-w-3xl mx-auto'
    >
      <TextInput
        label='كلمة المرور الحالية'
        name='current-password'
        id='current-password'
        size='lg'
        autoComplete='off'
      />

      <PasswordInput
        label='كلمة المرور الجديدة'
        name='new-password'
        id='new-password'
        size='lg'
        autoComplete='off'
      />

      <PasswordInput
        label='تأكيد كلمة المرور الجديدة'
        name='confirm-password'
        id='confirm-password'
        size='lg'
        autoComplete='off'
      />

      <Button
        className='w-full sml:max-w-sm mx-auto !mt-10'
        variant='secondary'
        type='submit'
      >
        تغيير كلمة المرور
      </Button>
    </form>
  );
};
