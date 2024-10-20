'use client';

import PasswordInput from '@/components/inputs/password-input';
import Button from '@/components/button';
import { FormTitle } from '../../_components/form-title';

export const ResetForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col lg:max-w-xl gap-5 h-[80vh] mdl:h-[68vh]'
    >
      <FormTitle
        heading={'اعادة تعيين كلمة المرور الخاصة بك'}
      />

      <PasswordInput
        label='كلمة المرور الجديدة'
        placeholder='ادخل كلمة المرور الجديدة'
        size='lg'
      />

      <PasswordInput
        label='تأكيد كلمة المرور الجديدة'
        placeholder='ادخل كلمة المرور الجديدة'
        size='lg'
      />

      <div className='flex flex-1 items-end'>
        <Button
          variant='secondary'
          type='submit'
          className='w-full font-bold'
        >
          تأكيد
        </Button>
      </div>
    </form>
  );
};
