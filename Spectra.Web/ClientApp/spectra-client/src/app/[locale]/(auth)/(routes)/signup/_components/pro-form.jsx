'use client';

import { memo, useState } from 'react';

import { FormTitle } from '../../../_components/form-title';
import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';
import SelectInput from '@/components/inputs/select-input';
import { cn } from '@/lib/utils';
import MobileInput from '@/components/inputs/mobile-input';
import FileInput from '@/components/inputs/file-input';
import { GenderSelect } from '@/components/inputs/gender-select';
import { CountrySelect } from '@/components/inputs/country-select';
import { StateSelect } from '@/components/inputs/state-select';
import { useMedicalProviderRegister } from '../../../_hooks/use-medical-provider-register';
import PasswordInput from '@/components/inputs/password-input';
import { SpecializationSingleSelect } from '@/app/[locale]/(auth)/_components/specialization-single-select';
import { SpecializationMultiSelect } from '../../../_components/specialization-multi-select';
import { AcademicDegreeSelect } from '@/components/inputs/academic-degree-select';

const MemowizedFormTitle = memo(FormTitle);

export const ProForm = () => {
  const [step, setStep] = useState(1);

  const { stepOneForm, stepTwoForm, onSubmit, isPending } =
    useMedicalProviderRegister();

  const onNext = () => setStep(2);

  return (
    <form className='space-y-5 lg:max-w-xl'>
      <MemowizedFormTitle
        currentStep={step}
        heading={'املأ بيانات مقدم الخدمة'}
      />

      <StepOne step={step} form={stepOneForm} />

      <StepTwo step={step} form={stepTwoForm} />

      <div className='py-5'>
        {step === 1 && (
          <Button
            type='button'
            variant='secondary'
            onClick={stepOneForm.handleSubmit(onNext)}
            className='w-full'
          >
            التالي
          </Button>
        )}

        {step === 2 && (
          <div className='space-y-5 font-bold'>
            <Button
              variant='secondary'
              type='button'
              className='w-full'
              onClick={stepTwoForm.handleSubmit(onSubmit)}
              disabled={isPending}
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
              disabled={isPending}
            >
              السابق
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

const StepOne = memo(({ step = null, form = {} }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={cn('space-y-5', { hidden: step !== 1 })}>
      <TextInput
        label='الاسم'
        placeholder='ادخل الاسم الاول'
        size='lg'
        error={errors?.name?.message}
        {...register('name')}
      />

      <GenderSelect
        label='اختر النوع'
        placeholder='اختر النوع'
        size='lg'
        error={errors?.gender?.message}
        value={form.watch('gender')}
        onChange={(e) => {
          form.clearErrors('gender');
          form.setValue('gender', e.target.value);
        }}
      />

      <CountrySelect
        label='اختر البلد'
        placeholder='اختر البلد'
        size='lg'
        error={errors?.country?.message}
        onChange={(value) => {
          form.clearErrors('country');
          const valueArr = value.split('-');
          const code = valueArr[0];
          const country = valueArr[1];
          form.setValue('countryCode', code);
          form.setValue('country', country);
        }}
        value={
          `${form.watch('countryCode')}-${form.watch('country')}` ||
          ''
        }
      />
      <StateSelect
        label='اختر المدينة'
        placeholder='اختر المدينة'
        size='lg'
        countryCode={form.watch('countryCode')}
        error={errors?.city?.message}
        onChange={(value) => {
          form.clearErrors('city');
          form.setValue('city', value);
        }}
        value={form.watch('city')}
      />

      <TextInput
        label='العنوان'
        placeholder='ادخل العنوان'
        size='lg'
        error={errors?.address?.message}
        {...register('address')}
      />

      <MobileInput
        size='lg'
        placeholder='رقم الهاتف'
        error={errors?.phone?.message}
        value={form.watch('phone')}
        onChange={(value) => {
          form.clearErrors('phone');
          form.setValue('phone', value);
        }}
      />

      <TextInput
        label='رقم الهوية'
        placeholder='ادخل رقم الهوية'
        size='lg'
        error={errors?.nationalId?.message}
        {...register('nationalId')}
      />

      <TextInput
        label='البريد الالكترونى'
        placeholder='ادخل البريد الالكترونى'
        size='lg'
        error={errors?.emailAddress?.message}
        {...register('emailAddress')}
      />

      <PasswordInput
        label='كلمة المرور'
        size='lg'
        placeholder='*********'
        error={errors?.password?.message}
        {...register('password')}
      />

      <PasswordInput
        label='تاكيد كلمة المرور'
        size='lg'
        placeholder='*********'
        error={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
    </div>
  );
});

StepOne.displayName = 'StepOne';

const StepTwo = memo(({ step = null, form = {} }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={cn('space-y-5', { hidden: step !== 2 })}>
      <SelectInput
        label='طبيب / اخصائى'
        placeholder='اختر المهنة الخاصة بك'
        data={[
          { label: 'Doctor', value: '1' },
          { label: 'Specialist', value: '2' },
        ]}
        size='lg'
        error={errors?.jobType?.message}
        value={form.watch('jobType')}
        onChange={(value) => {
          form.clearErrors('jobType');
          form.setValue('jobType', value);
        }}
      />

      <TextInput
        label='الوظيفة'
        placeholder='ادخل الوظيفة'
        size='lg'
        error={errors?.jobName?.message}
        {...register('jobName')}
      />

      <SpecializationSingleSelect
        label='التخصص الرئيسي'
        placeholder='اختر تخصصك'
        size='lg'
        error={errors?.mainSpecializationId?.message}
        value={form.watch('mainSpecializationId')}
        onChange={(e) => {
          form.clearErrors('mainSpecializationId');
          form.setValue('mainSpecializationId', e.target.value);
        }}
      />

      <SpecializationMultiSelect
        label='التخصصات الفرعية'
        placeholder='اختر التخصصات'
        size='lg'
        error={errors?.specializations?.message}
        defaultValue={form.watch('specializations')}
        onSelect={(e) => {
          form.clearErrors('specializations');
          form.setValue('specializations', e.target.value);
        }}
      />

      <TextInput
        label='رقم الترخيص/الاعتماد'
        placeholder='ادخل رقم الترخيص او الاعتماد'
        size='lg'
        error={errors?.licenseNumber?.message}
        {...register('licenseNumber')}
      />

      <TextInput
        label='مرخص / معتمد من'
        placeholder='ادخل جهة الترخيص او الاعتماد'
        size='lg'
        error={errors?.approvedBy?.message}
        {...register('approvedBy')}
      />

      <AcademicDegreeSelect
        label='الدرجة العلمية'
        placeholder='ادخل الدرجة العلمية'
        size='lg'
        error={errors?.academicDegree?.message}
        value={form.watch('academicDegree')}
        onChange={(e) => {
          form.clearErrors('academicDegree');
          form.setValue('academicDegree', e.target.value);
        }}
      />

      <FileInput
        label='الشهادات'
        size='lg'
        placeholder='ادخل الشهادات الحاصل عليها'
        multiple
        error={errors?.certifications?.message}
        value={form.watch('certifications')}
        onChange={(value) => {
          form.clearErrors('certifications');
          form.setValue('certifications', value);
        }}
      />
    </div>
  );
});

StepTwo.displayName = 'StepTwo';
