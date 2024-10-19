'use client';

import { useMemo, useState } from 'react';

import { FormTitle } from '../../_components/form-title';
import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';
import SelectInput from '@/components/inputs/select-input';
import { cn } from '@/lib/utils';
import AbsherIcon from '@/assets/icons/absher';
import Image from 'next/image';

export const FamForm = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const formHeading = useMemo(() => {
    switch (step) {
      case 1:
        return 'املأ البيانات التالية';
      case 2:
        return 'اضافة طفل';
      case 3:
        return 'اضافة طفل';
      default:
        return 'املأ البيانات التالية';
    }
  }, [step]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success)
    return (
      <SuccessUi
        setSuccess={setSuccess}
        setStep={setStep}
      />
    );
  else
    return (
      <form
        onSubmit={onSubmit}
        className='space-y-5 font-bold lg:max-w-xl'
      >
        <FormTitle
          currentStep={step}
          stepsCount={3}
          heading={formHeading}
        />

        <StepOne step={step} />

        <StepTwo step={step} />

        <StepThree step={step} />

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
        label='اسم ولي الامر بالكامل'
        placeholder='الاسم بالكامل'
        size='lg'
      />

      <SelectInput
        label='البلد'
        placeholder='اختر البلد'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='المدينة'
        placeholder='اختر المدينة'
        data={[]}
        size='lg'
      />
      <SelectInput
        label='الوظيفة'
        placeholder='اختر الوظيفة'
        data={[]}
        size='lg'
      />

      <TextInput
        label='رقم الهوية'
        placeholder='رقم الهوية'
        size='lg'
      />

      <TextInput
        label='كود الطبيب'
        placeholder='اكتب كود الاحالة من الطبيب'
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
        label='اسم الطفل'
        placeholder='الاسم بالكامل'
        size='lg'
      />

      <SelectInput
        label='النوع'
        placeholder='النوع'
        data={[]}
        size='lg'
      />

      <div className='grid grid-cols-3 gap-5 place-items-end'>
        <SelectInput
          label='تاريخ الميلاد'
          placeholder='سنة'
          data={[]}
          size='lg'
        />
        <SelectInput
          placeholder='يوم'
          data={[]}
          size='lg'
        />
        <SelectInput
          placeholder='شهر'
          data={[]}
          size='lg'
        />
      </div>

      <TextInput
        label='طول الطفل'
        placeholder='ادخل طول الطفل بالسنتيمتر'
        size='lg'
      />

      <TextInput
        label='وزن الطفل'
        placeholder='ادخل وزن الطفل بالكيلوجرام'
        size='lg'
      />
      <TextInput
        label='الرقم القومى للطفل'
        placeholder='ادخل الرقم القومى للطفل'
        size='lg'
      />

      <div>
        <div className='flex items-center space-x-2'>
          <span className='h-[1px] w-full bg-grayDark' />
          <span className='text-grayDark text-nowrap shrink-0 px-5 font-normal'>
            أو التسجيل عبر
          </span>
          <span className='h-[1px] w-full bg-grayDark' />
        </div>
      </div>

      <Button className='w-full gap-0'>
        <AbsherIcon className='h-10' />
        أبشر
      </Button>
    </div>
  );
};

const StepThree = ({ step = null }) => {
  return (
    <div
      className={cn('space-y-5', { hidden: step !== 3 })}
    >
      <TextInput
        label='اعراض على الطفل'
        placeholder=''
        size='lg'
      />

      <TextInput
        label='تاريخ ظهور الاعراض'
        placeholder=''
        size='lg'
      />

      <TextInput
        label='وراثة ام مكتسبة'
        placeholder=''
        size='lg'
      />

      <TextInput
        label='اعراض جسدية'
        placeholder=''
        size='lg'
      />

      <TextInput label='ملاحظات' placeholder='' size='lg' />
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
          type='button'
          onClick={(e) => {
            e.preventDefault();
            setStep(3);
          }}
          className='w-full'
        >
          التالي
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

  if (step === 3) {
    return (
      <div className='space-y-5 font-bold'>
        <Button
          variant='secondary'
          type='submit'
          className='w-full'
        >
          اضافة الطفل
        </Button>

        <Button
          type='button'
          className='w-full'
          onClick={(e) => {
            e.preventDefault();
            setStep(2);
          }}
        >
          السابق
        </Button>
      </div>
    );
  }
};

const SuccessUi = ({
  setSuccess = () => {},
  setStep = () => {},
}) => {
  return (
    <div className='h-[80vh] mdl:h-[68vh] flex flex-col justify-between gap-10 lg:max-w-xl'>
      <div className='flex flex-col gap-5 items-center mdl:items-start'>
        <div className='mdl:hidden'>
          <Image
            src={'/success-add-child-bg.png'}
            alt='success'
            width={335}
            height={298}
            className='w-auto h-auto object-contain'
          />
        </div>

        <FormTitle
          subheading='لقد تم اضافة جميع البيانات الخاصة بالطفل بنجاح'
          heading={'تم اضافة الطفل بنجاح'}
        />
      </div>

      <div className='space-y-5 font-bold'>
        <Button
          variant='secondary'
          type='button'
          className='w-full'
        >
          التالي
        </Button>

        <Button
          type='button'
          className='w-full'
          onClick={(e) => {
            e.preventDefault();
            setSuccess(false);
            setStep(2);
          }}
        >
          اضافة طفل اخر
        </Button>
      </div>
    </div>
  );
};
