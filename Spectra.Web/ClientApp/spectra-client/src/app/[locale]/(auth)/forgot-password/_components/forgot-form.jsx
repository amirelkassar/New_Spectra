'use client';

import CheckHeartIcon from '@/assets/icons/check-heart';
import { FormTitle } from '../../_components/form-title';
import TextInput from '@/components/inputs/text-input';
import MobileInput from '@/components/inputs/mobile-input';
import Button from '@/components/button';
import { useState } from 'react';

export const ForgotForm = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success)
    return <SuccessUi onResend={() => setSuccess(false)} />;
  else
    return (
      <form
        onSubmit={onSubmit}
        className='flex flex-col lg:max-w-xl gap-5 h-[80vh] mdl:h-[68vh]'
      >
        <FormTitle
          heading={'اعادة تعيين كلمة المرور الخاصة بك'}
          subheading='أدخل عنوان بريدك الإلكتروني أدناه او رقم الواتساب وسنرسل لك رابطا يحتوي على التعليمات'
        />

        <TextInput
          label='البريد الالكترونى'
          placeholder='البريد الالكترونى'
          size='lg'
        />

        <span className='text-xl text-greenMain block'>
          أو
        </span>

        <MobileInput
          size='lg'
          label='رقم الواتساب'
          placeholder='رقم الهاتف'
        />

        <div className='flex-1 flex items-end'>
          <Button
            type='submit'
            className='font-bold w-full block'
            variant='secondary'
          >
            ارسال
          </Button>
        </div>
      </form>
    );
};

const SuccessUi = ({ onResend = () => {} }) => {
  return (
    <div className='flex flex-col gap-10 items-center mdl:items-start'>
      <FormTitle
        heading={'تم ارسال رابط اعادة التعيين'}
        subheading='قم بفتح الرابط اللي وصل الى بريدك الالكتروني'
      />

      <CheckHeartIcon />

      <div className='text-base font-bold mdl:font-normal mdl:text-xl'>
        <span>لم يصلك؟ ..</span>
        <button onClick={onResend} className='text-red'>
          اعادة ارسال
        </button>
      </div>
    </div>
  );
};
