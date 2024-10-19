'use client';

import { useState } from 'react';

import { FormTitle } from '../../_components/form-title';
import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';
import SelectInput from '@/components/inputs/select-input';
import { cn } from '@/lib/utils';
import MobileInput from '@/components/inputs/mobile-input';
import FileInput from '@/components/inputs/file-input';

export const ProForm = () => {
  const [step, setStep] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className='space-y-5 font-bold lg:max-w-xl'
    >
      <FormTitle
        currentStep={step}
        heading={'املأ بيانات مقدم الخدمة'}
      />

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
        label='الاسم كامل'
        placeholder='ادخل الاسم كامل'
        size='lg'
      />

      <SelectInput
        label='اختر النوع'
        placeholder='اختر النوع'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='اختر البلد'
        placeholder='اختر البلد'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='اختر المدينة'
        placeholder='اختر المدينة'
        data={[]}
        size='lg'
      />

      <MobileInput size='lg' placeholder='رقم الهاتف' />

      <TextInput
        label='البريد الالكترونى'
        placeholder='ادخل البريد الالكترونى'
        size='lg'
      />

      <TextInput
        label='رقم الهوية'
        placeholder='ادخل رقم الهوية'
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
      <SelectInput
        label='طبيب / اخصائى'
        placeholder='اختر المهنة الخاصة بك'
        data={[]}
        size='lg'
      />

      <SelectInput
        label='التخصص'
        placeholder='ادخل تخصصك'
        data={[]}
        size='lg'
      />

      <TextInput
        label='رقم الترخيص/الاعتماد'
        placeholder='ادخل رقم الترخيص او الاعتماد'
        size='lg'
      />

      <TextInput
        label='مرخص / معتمد من'
        placeholder='ادخل جهة الترخيص او الاعتماد'
        size='lg'
      />

      <TextInput
        label='الدرجة العلمية'
        placeholder='ادخل الدرجة العلمية'
        size='lg'
      />

      <FileInput
        label='الشهادات'
        size='lg'
        placeholder='ادخل الشهادات الحاصل عليها'
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
