'use client';

import { useMemo, useState } from 'react';

import { FormTitle } from '../../_components/form-title';
import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';
import SelectInput from '@/components/inputs/select-input';
import { cn } from '@/lib/utils';
import MobileInput from '@/components/inputs/mobile-input';

export const OrgForm = () => {
  const [step, setStep] = useState(1);

  const formHeading = useMemo(() => {
    switch (step) {
      case 1:
        return 'املأ بيانات المنظمة';
      case 2:
        return 'املأ بيانات مسؤول الـمنظمة';
      default:
        return 'املأ بيانات المنظمة';
    }
  }, [step]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className='space-y-5 font-bold lg:max-w-xl'
    >
      <FormTitle currentStep={step} heading={formHeading} />

      <StepOne step={step} />

      <StepTwo step={step} />

      <div className='py-5'>
        <StepButtons step={step} setStep={setStep} />
      </div>
    </form>
  );
};

const StepOne = ({ step = null }) => {
  return (
    <div
      className={cn('space-y-5', { hidden: step !== 1 })}
    >
      <TextInput
        label='اسم المنظمة'
        placeholder='اسم المنظمة'
        size='lg'
      />

      <TextInput
        label='عنوان المنظمة'
        placeholder='عنوان المنظمة'
        size='lg'
      />

      <SelectInput
        label='بلد المنظمة'
        placeholder='اختر بلد المنظمة'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='مدينة المنظمة'
        placeholder='اختر مدينة المنظمة'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='تخصص المنظمة'
        placeholder='اختر تخصص المنظمة'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='نوع المنظمة'
        placeholder='اختر نوع المنظمة'
        data={[]}
        size='lg'
      />

      <TextInput
        label='الموقع الالكترونى للمنظمة'
        placeholder='الموقع الالكترونى للمنظمة'
        size='lg'
      />
    </div>
  );
};

const StepTwo = ({ step = null }) => {
  return (
    <div
      className={cn('space-y-5', { hidden: step !== 2 })}
    >
      <TextInput
        label='الاسم بالكامل'
        placeholder='الاسم بالكامل'
        size='lg'
      />

      <TextInput
        label='المسمى الوظيفى'
        placeholder='المسمى الوظيفى'
        size='lg'
      />

      <MobileInput size='lg' placeholder='رقم الهاتف' />

      <TextInput
        label='البريد الالكترونى'
        placeholder='البريد الالكترونى'
        size='lg'
      />
    </div>
  );
};

const StepButtons = ({ step, setStep }) => {
  if (!step) return null;

  if (step === 1) {
    return (
      <Button
        type='button'
        variant='secondary'
        onClick={(e) => {
          e.preventDefault();
          setStep(2);
        }}
        className='w-full'
      >
        التالي
      </Button>
    );
  }

  if (step === 2) {
    return (
      <div className='space-y-5 font-bold'>
        <Button
          variant='secondary'
          type='submit'
          className='w-full'
        >
          تأكيد
        </Button>

        <Button
          type='button'
          className='w-full'
          onClick={(e) => {
            e.preventDefault();
            setStep(1);
          }}
        >
          السابق
        </Button>
      </div>
    );
  }
};
