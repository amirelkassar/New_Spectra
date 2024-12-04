'use client';

import GetErrorMsg from '@/components/getErrorMsg';
import { GenderSelect } from '@/components/inputs/gender-select';
import { ProfessionSelect } from '@/components/inputs/profession-select';
import Button from '@/components/button';
import { CountrySelect } from '@/components/inputs/country-select';
import { StateSelect } from '@/components/inputs/state-select';
import TextInput from '@/components/inputs/text-input';
import MobileInput from '@/components/inputs/mobile-input';
import { Textarea } from '@/components/inputs/textarea';
import { AcademicDegreeSelect } from '@/components/inputs/academic-degree-select';
import { SpecializationSingleSelect } from '@/admin/_components/ui/specialization-single-select';
import { SpecializationMultiSelect } from '../../../_components/ui/specialization-multi-select';
import PasswordInput from '@/components/inputs/password-input';

export const EmployeeForm = ({ form = {} }) => {
  return (
    <form
      onSubmit={form.onSubmit}
      className='max-w-screen-lg space-y-4 mdl:space-y-6'
    >
      {form?.step === 1 && <MainFields form={form} />}

      {form?.step === 2 && <RenderNextField form={form} />}

      <div
        data-step={String(form?.step)}
        className='flex md:items-center flex-col md:flex-row *:flex-1 md:max-w-xs md:data-[step="2"]:max-w-lg gap-4 !mt-10'
      >
        {form?.step === 2 && (
          <Button
            disabled={form?.isPending}
            type='submit'
            variant='secondary'
          >
            حفظ
          </Button>
        )}

        {form?.step === 1 && (
          <Button
            disabled={!form?.data?.jobType}
            onClick={form?.onNext}
            type='button'
            variant='secondary'
          >
            التالي
          </Button>
        )}
        {form?.step === 2 && (
          <Button
            disabled={form?.isPending}
            onClick={form?.onBack}
            type='button'
          >
            السابق
          </Button>
        )}
      </div>
    </form>
  );
};

const MainFields = ({ form = {} }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mdl:gap-6'>
      <ProfessionSelect
        label='المهنة'
        name='jobType'
        error={GetErrorMsg(form?.error, 'JobType')}
        onChange={form.onChange}
        value={form?.data?.jobType}
        className='col-span-2'
      />

      <TextInput
        size='lg'
        label='الاسم الاول'
        name='firstName'
        error={GetErrorMsg(form?.error, 'FirstName')}
        onChange={form.onChange}
        value={form?.data?.firstName}
      />

      <TextInput
        size='lg'
        label='الاسم الاخير'
        name='lastName'
        error={GetErrorMsg(form?.error, 'LastName')}
        onChange={form.onChange}
        value={form?.data?.lastName}
      />

      <GenderSelect
        label='النوع'
        name='humenGender'
        error={GetErrorMsg(form?.error, 'HumenGender')}
        onChange={form.onChange}
        value={form?.data?.humenGender}
      />

      <TextInput
        size='lg'
        label='رقم الهوية'
        name='nationalId'
        type='number'
        error={GetErrorMsg(form?.error, 'NationalId')}
        onChange={form.onChange}
        value={form?.data?.nationalId}
      />

      <CountrySelect
        label='البلد'
        name='countryCode'
        error={GetErrorMsg(form?.error, 'CountryCode')}
        onChange={(value) => {
          const valueArr = value.split('-');
          const code = valueArr[0];
          const country = valueArr[1];
          form.onChange({
            target: {
              name: 'countryCode',
              value: code,
            },
          });
          form.onChange({
            target: {
              name: 'country',
              value: country,
            },
          });
        }}
        value={`${form?.data?.countryCode}-${form?.data?.country}`}
      />

      <StateSelect
        countryCode={form?.data?.countryCode}
        label='المدينة'
        name='city'
        value={form?.data?.city}
        error={GetErrorMsg(form?.error, 'City')}
        onChange={(value) => {
          form.onChange({
            target: {
              name: 'city',
              value,
            },
          });
        }}
      />

      <MobileInput
        size='lg'
        label='رقم الهاتف'
        name='phoneNumber'
        error={GetErrorMsg(form?.error, 'PhoneNumber')}
        onChange={(value) => {
          form.onChange({
            target: {
              name: 'phoneNumber',
              value,
            },
          });
        }}
        value={form?.data?.phoneNumber}
        className='col-span-2 mdl:col-span-1'
      />

      <TextInput
        size='lg'
        label='البريد الالكتروني'
        name='emailaddress'
        error={GetErrorMsg(form?.error, 'Emailaddress')}
        onChange={form.onChange}
        value={form?.data?.emailaddress}
        className='col-span-2 mdl:col-span-1'
      />

      <PasswordInput
        name='password'
        size='lg'
        label='كلمة المرور'
        error={GetErrorMsg(form?.error, 'Password')}
        onChange={form.onChange}
        value={form?.data?.password}
        className='col-span-2 mdl:col-span-1'
      />

      <PasswordInput
        name='confirmPassword'
        size='lg'
        label='تأكيد كلمة المرور'
        error={
          GetErrorMsg(form?.error, 'ConfirmPassword') ||
          form?.validationErrors?.confirmPassword
        }
        onChange={form.onChange}
        value={form?.data?.confirmPassword}
        className='col-span-2 mdl:col-span-1'
      />
    </div>
  );
};

const RenderNextField = ({ form = {} }) => {
  switch (String(form?.data?.jobType)) {
    case '1':
      return <DoctorAndSpecialistFields form={form} />;
    case '2':
      return <DoctorAndSpecialistFields form={form} />;
    case '3':
      return <OtherFields form={form} />;
    case '4':
      return <OtherFields form={form} />;
  }
};

const DoctorAndSpecialistFields = ({ form = {} }) => {
  return (
    <div className='space-y-4 mdl:space-y-6'>
      <SpecializationSingleSelect
        label='التخصص الرئيسي'
        name='mainSpecializationId'
        error={GetErrorMsg(form?.error, 'MainSpecializationId')}
        onChange={form?.onChange}
        value={form?.data?.mainSpecializationId}
      />

      <SpecializationMultiSelect
        label='التخصصات الفرعية'
        name='specializations'
        error={GetErrorMsg(form?.error, 'Specializations')}
        onSelect={form?.onChange}
        defaultValue={form?.data?.specializations}
      />

      <TextInput
        size='lg'
        label='رقم الترخيص / الاعتماد'
        name='licenseNumber'
        error={GetErrorMsg(form?.error, 'LicenseNumber')}
        onChange={form?.onChange}
        value={form?.data?.licenseNumber}
        type='number'
      />

      <TextInput
        size='lg'
        label='مرخص / معتمد من'
        name='approvedBy'
        error={GetErrorMsg(form?.error, 'ApprovedBy')}
        onChange={form?.onChange}
        value={form?.data?.approvedBy}
      />

      <AcademicDegreeSelect
        label='الدرجة العلمية'
        name='academicDegree'
        error={GetErrorMsg(form?.error, 'AcademicDegree')}
        onChange={form?.onChange}
        value={form?.data?.academicDegree}
      />
    </div>
  );
};

const OtherFields = ({ form = {} }) => {
  return (
    <div className='space-y-4 mdl:space-y-6'>
      <TextInput
        size='lg'
        label='المسمي الوظيفي'
        name='jobName'
        error={GetErrorMsg(form?.error, 'JobName')}
        onChange={form?.onChange}
        value={form?.data?.jobName}
      />

      <Textarea
        size='lg'
        label='وصف الوظيفة'
        name='jobDescription'
        error={GetErrorMsg(form?.error, 'JobDescription')}
        onChange={form?.onChange}
        value={form?.data?.jobDescription}
      />

      <TextInput
        size='lg'
        label='ساعات العمل'
        name='workingHours'
        error={GetErrorMsg(form?.error, 'WorkingHours')}
        onChange={form?.onChange}
        value={form?.data?.workingHours}
        type='number'
      />

      <TextInput
        size='lg'
        label='سنوات الخبرة'
        name='experienceYears'
        error={GetErrorMsg(form?.error, 'ExperienceYears')}
        onChange={form?.onChange}
        value={form?.data?.experienceYears}
        type='number'
      />

      {/* <TextInput
        size='lg'
        label='المنطقة'
        name='state'
        error={GetErrorMsg(form?.error, 'State')}
        onChange={form?.onChange}
        value={form?.data?.state}
      />

      <TextInput
        size='lg'
        label='اسم الشارع'
        name='streetName'
        error={GetErrorMsg(form?.error, 'StreetName')}
        onChange={form?.onChange}
        value={form?.data?.streetName}
      />

      <TextInput
        size='lg'
        label='المبني'
        name='building'
        error={GetErrorMsg(form?.error, 'Building')}
        onChange={form?.onChange}
        value={form?.data?.building}
      />

      <TextInput
        size='lg'
        label='رقم الدور'
        name='floor'
        type='number'
        error={GetErrorMsg(form?.error, 'Floor')}
        onChange={form?.onChange}
        value={form?.data?.floor}
      />

      <TextInput
        size='lg'
        label='علامة مميزة'
        name='commonMark'
        error={GetErrorMsg(form?.error, 'CommonMark')}
        onChange={form?.onChange}
        value={form?.data?.commonMark}
      />

      <TextInput
        size='lg'
        label='المؤهل'
        name='qualification'
        error={GetErrorMsg(form?.error, 'Qualification')}
        onChange={form?.onChange}
        value={form?.data?.qualification}
      /> */}
    </div>
  );
};
