'use client';

import { memo, useState } from 'react';
import { useTranslations } from 'next-intl';

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
import { SpecializationSingleSelect } from '@/components/inputs/specialization-single-select';
import { SpecializationMultiSelect } from '@/components/inputs/specialization-multi-select';
import { AcademicDegreeSelect } from '@/components/inputs/academic-degree-select';

const MemowizedFormTitle = memo(FormTitle);

export const ProForm = () => {
  const tg = useTranslations('general_obj');

  const [step, setStep] = useState(1);

  const { stepOneForm, stepTwoForm, onSubmit, isPending } =
    useMedicalProviderRegister();

  const onNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    setStep(2);
  };

  const onBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    setStep(1);
  };

  return (
    <form className='space-y-5 lg:max-w-xl'>
      <MemowizedFormTitle
        currentStep={step}
        heading={tg('enter_medical_provider_data')}
      />

      {step === 1 && <StepOne form={stepOneForm} />}

      {step === 2 && <StepTwo form={stepTwoForm} />}

      <div className='py-5'>
        {step === 1 && (
          <Button
            type='button'
            variant='secondary'
            onClick={stepOneForm.handleSubmit(onNext)}
            className='w-full'
          >
            {tg('next')}
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
              {tg('confirm')}
            </Button>

            <Button
              type='button'
              className='w-full'
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              disabled={isPending}
            >
              {tg('previous')}
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

const StepOne = memo(({ form = {} }) => {
  const tg = useTranslations('general_obj');

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={cn('space-y-5')}>
      <TextInput
        label={tg('first_name')}
        placeholder={`${tg('enter')} ${tg('first_name')}`}
        size='lg'
        error={errors?.name?.message}
        {...register('name')}
      />

      <GenderSelect
        label={tg('gender')}
        placeholder={`${tg('select')} ${'gender'}`}
        size='lg'
        error={errors?.gender?.message}
        value={form.watch('gender')}
        onChange={(e) => {
          form.clearErrors('gender');
          form.setValue('gender', e.target.value);
        }}
      />

      <CountrySelect
        label={tg('country')}
        placeholder={`${tg('select')} ${tg('country')}`}
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
        label={tg('city')}
        placeholder={`${tg('select')} ${tg('city')}`}
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
        label={tg('address')}
        placeholder={`${tg('enter')} ${tg('address')}`}
        size='lg'
        error={errors?.address?.message}
        {...register('address')}
      />

      <MobileInput
        size='lg'
        label={tg('phone_number')}
        placeholder={`${tg('enter')} ${tg('phone_number')}`}
        error={errors?.phone?.message}
        value={form.watch('phone')}
        onChange={(value) => {
          form.clearErrors('phone');
          form.setValue('phone', value);
        }}
      />

      <TextInput
        label={tg('national_id')}
        placeholder={`${tg('enter')} ${tg('national_id')}`}
        size='lg'
        error={errors?.nationalId?.message}
        {...register('nationalId')}
      />

      <TextInput
        label={tg('email')}
        placeholder={`${tg('enter')} ${tg('email')}`}
        size='lg'
        error={errors?.emailAddress?.message}
        {...register('emailAddress')}
      />

      <PasswordInput
        label={tg('password')}
        size='lg'
        placeholder='*********'
        error={errors?.password?.message}
        {...register('password')}
      />

      <PasswordInput
        label={tg('confirm_password')}
        size='lg'
        placeholder='*********'
        error={errors?.confirmPassword?.message}
        {...register('confirmPassword')}
      />
    </div>
  );
});

StepOne.displayName = 'StepOne';

const StepTwo = memo(({ form = {} }) => {
  const tg = useTranslations('general_obj');

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={cn('space-y-5')}>
      <SelectInput
        label={tg('doctor_or_specialist')}
        placeholder={`${tg('select')} ${tg('proffession')}`}
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
        label={tg('proffession')}
        placeholder={`${tg('enter')} ${tg('proffession')}`}
        size='lg'
        error={errors?.jobName?.message}
        {...register('jobName')}
      />

      <SpecializationSingleSelect
        label={tg('main_specialization')}
        placeholder={`${tg('select')} ${tg('main_specialization')}`}
        size='lg'
        error={errors?.mainSpecializationId?.message}
        value={form.watch('mainSpecializationId')}
        onChange={(e) => {
          form.clearErrors('mainSpecializationId');
          form.setValue('mainSpecializationId', e.target.value);
        }}
      />

      <SpecializationMultiSelect
        label={tg('other_specializations')}
        placeholder={`${tg('select')} ${tg('other_specializations')}`}
        size='lg'
        error={errors?.specializations?.message}
        defaultValue={form.watch('specializations')}
        onSelect={(e) => {
          form.clearErrors('specializations');
          form.setValue('specializations', e.target.value);
        }}
      />

      <AcademicDegreeSelect
        label={tg('medical_degree')}
        placeholder={`${tg('select')} ${tg('medical_degree')}`}
        size='lg'
        error={errors?.academicDegree?.message}
        value={form.watch('academicDegree')}
        onChange={(e) => {
          form.clearErrors('academicDegree');
          form.setValue('academicDegree', e.target.value);
        }}
      />

      <TextInput
        label={tg('exp_years')}
        placeholder={`${tg('enter')} ${tg('exp_years')}`}
        type='number'
        size='lg'
        error={errors?.experienceYears?.message}
        {...register('experienceYears')}
      />

      <TextInput
        label={tg('license_number')}
        placeholder={`${tg('enter')} ${tg('license_number')}`}
        size='lg'
        error={errors?.licenseNumber?.message}
        {...register('licenseNumber')}
      />

      <TextInput
        label={tg('approved_by')}
        placeholder={`${tg('enter')} ${tg('approved_by')}`}
        size='lg'
        error={errors?.approvedBy?.message}
        {...register('approvedBy')}
      />

      <FileInput
        label={tg('certificates')}
        size='lg'
        placeholder={`${tg('upload')} ${tg('certificates')}`}
        error={errors?.certification?.message}
        value={form.watch('certification')}
        onChange={(value) => {
          form.clearErrors('certification');
          form.setValue('certification', value);
        }}
      />
    </div>
  );
});

StepTwo.displayName = 'StepTwo';
