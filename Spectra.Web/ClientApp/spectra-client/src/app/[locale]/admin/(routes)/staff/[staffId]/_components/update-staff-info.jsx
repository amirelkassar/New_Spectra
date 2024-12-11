'use client';

import { useState } from 'react';

import { H1 } from '@/components/dashboard/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { useUpdateStaff } from '../../_hooks/use-update-staff';
import Card from '@/components/card';
import Avatar from '@/components/avatar';
import TextInput from '@/components/inputs/text-input';
import GetErrorMsg from '@/components/getErrorMsg';
import MobileInput from '@/components/inputs/mobile-input';
import EditImgIcon from '@/assets/icons/editImg';
import Button from '@/components/button';
import PasswordInput from '@/components/inputs/password-input';
import { useImagePath } from '@/hooks/use-image-path';
import { Textarea } from '@/components/inputs/textarea';
import { GenderSelect } from '@/components/inputs/gender-select';
import { CountrySelect } from '@/components/inputs/country-select';
import { StateSelect } from '@/components/inputs/state-select';
import CloseIcon from '@/assets/icons/close';

export const UpdateStaffInfo = ({ initialValues }) => {
  const [form] = useUpdateStaff({ initialValues });

  return (
    <form onSubmit={form.onSubmit} className='space-y-5'>
      <MainInfoForm form={form} />

      <OtherInfoForm form={form} />

      <PasswordForm form={form} />

      <Button
        disabled={form.isPending}
        type='submit'
        className='w-full mdl:max-w-xs !mt-10'
        variant='secondary'
      >
        حفظ
      </Button>
    </form>
  );
};

const MainInfoForm = ({ form }) => {
  return (
    <Card className='space-y-10'>
      {/* HEADER */}
      <div className='flex items-center gap-4'>
        <BackButton />
        <H1>تعديل الموظف</H1>
      </div>

      {/* Fields */}
      <div className='flex flex-col mdl:flex-row mdl:items-start gap-10'>
        <ImageUploader form={form} />
        <div className='flex flex-col gap-2 justify-around flex-1'>
          <TextInput
            size='sm'
            label='الاسم الاول'
            name='firstName'
            error={GetErrorMsg(form?.error, 'FirstName')}
            onChange={form.onChange}
            value={form?.data?.firstName || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full mdl:max-w-80',
            }}
          />

          <TextInput
            size='sm'
            label='الاسم الاخير'
            name='lastName'
            error={GetErrorMsg(form?.error, 'LastName')}
            onChange={form.onChange}
            value={form?.data?.lastName || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full mdl:max-w-80',
            }}
          />

          <MobileInput
            size='sm'
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
            value={form?.data?.phoneNumber || ''}
            className='flex items-center gap-5 space-y-0'
            containerClassName='flex-1 mdl:max-w-80'
            labelClassName='text-xs mdl:text-base font-medium !m-0 min-w-32'
            inputClassName='w-full'
          />

          <TextInput
            size='sm'
            label='البريد الالكتروني'
            name='emailaddress'
            error={GetErrorMsg(form?.error, 'EmailAddress')}
            onChange={form.onChange}
            value={form?.data?.emailaddress || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full mdl:max-w-80',
            }}
          />

          <TextInput
            size='sm'
            label='رقم الهوية'
            name='nationalId'
            error={GetErrorMsg(form?.error, 'NationalId')}
            onChange={form.onChange}
            value={form?.data?.nationalId || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full mdl:max-w-80',
            }}
          />
        </div>
      </div>
    </Card>
  );
};

const OtherInfoForm = ({ form }) => {
  return (
    <Card className='space-y-10' title='بيانات اضافية'>
      <div className='flex flex-col mdl:flex-row gap-y-3 gap-x-10 *:flex-1'>
        <div className='space-y-3'>
          <TextInput
            size='sm'
            label='الوظيفة'
            name='jobName'
            error={GetErrorMsg(form?.error, 'JobName')}
            onChange={form.onChange}
            value={form?.data?.jobName || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <Textarea
            size='sm'
            label='وصف الوظيفة'
            name='jobDescription'
            error={GetErrorMsg(form?.error, 'JobDescription')}
            onChange={form?.onChange}
            value={form?.data?.jobDescription || ''}
            autosize
            classNames={{
              root: 'flex items-start gap-5',
              label: 'text-xs mdl:text-base mb-0 mt-1 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='المسمي الوظيفي'
            name='prefix'
            error={GetErrorMsg(form?.error, 'Prefix')}
            onChange={form.onChange}
            value={form?.data?.prefix || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='المؤهلات'
            name='qualification'
            error={GetErrorMsg(form?.error, 'Qualification')}
            onChange={form.onChange}
            value={form?.data?.qualification || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='سنوات الخبرة'
            name='experienceYears'
            error={GetErrorMsg(form?.error, 'ExperienceYears')}
            onChange={form?.onChange}
            value={form?.data?.experienceYears || ''}
            type='number'
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='ساعات العمل'
            name='workingHours'
            error={GetErrorMsg(form?.error, 'WorkingHours')}
            onChange={form?.onChange}
            value={form?.data?.workingHours || ''}
            type='number'
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <GenderSelect
            size='sm'
            label='النوع'
            name='humenGender'
            error={GetErrorMsg(form?.error, 'HumenGender')}
            onChange={form.onChange}
            value={form?.data?.humenGender || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />
        </div>

        <div className='space-y-3'>
          <CountrySelect
            size='sm'
            label='البلد'
            name='countryCode'
            error={GetErrorMsg(form?.error, 'CountryCode')}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
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
            value={
              `${form?.data?.countryCode}-${form?.data?.country}` ||
              ''
            }
          />

          <StateSelect
            size='sm'
            countryCode={form?.data?.countryCode}
            label='المدينة'
            name='city'
            value={form?.data?.city || ''}
            error={GetErrorMsg(form?.error, 'City')}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
            onChange={(value) => {
              form.onChange({
                target: {
                  name: 'city',
                  value,
                },
              });
            }}
          />

          <TextInput
            size='sm'
            label='الحي'
            name='state'
            error={GetErrorMsg(form?.error, 'State')}
            onChange={form?.onChange}
            value={form?.data?.state || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='اسم الشارع'
            name='streetName'
            error={GetErrorMsg(form?.error, 'StreetName')}
            onChange={form?.onChange}
            value={form?.data?.streetName || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='المبني'
            name='building'
            error={GetErrorMsg(form?.error, 'Building')}
            onChange={form?.onChange}
            value={form?.data?.building || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='الطابق'
            name='floor'
            type='number'
            error={GetErrorMsg(form?.error, 'Floor')}
            onChange={form?.onChange}
            value={form?.data?.floor || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='علامة مميزة للعنوان'
            name='commonMark'
            error={GetErrorMsg(form?.error, 'CommonMark')}
            onChange={form?.onChange}
            value={form?.data?.commonMark || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />

          <TextInput
            size='sm'
            label='رقم البريد'
            name='postalCode'
            error={GetErrorMsg(form?.error, 'PostalCode')}
            onChange={form?.onChange}
            value={form?.data?.postalCode || ''}
            classNames={{
              root: 'flex items-center gap-5',
              label: 'text-xs mdl:text-base !m-0 min-w-32',
              wrapper: 'w-full',
            }}
          />
        </div>
      </div>
    </Card>
  );
};

const PasswordForm = ({ form }) => {
  return (
    <Card className='space-y-10' title='تغيير كلمة المرور'>
      <div className='space-y-3'>
        <PasswordInput
          name='password'
          size='sm'
          label='كلمة المرور'
          error={GetErrorMsg(form?.error, 'Password')}
          onChange={form.onChange}
          value={form?.data?.password || ''}
          classNames={{
            root: 'flex items-center gap-5',
            label: 'text-xs mdl:text-base !m-0 min-w-32',
            wrapper: 'w-full mdl:max-w-[290px]',
          }}
        />

        <PasswordInput
          name='confirmPassword'
          size='sm'
          label='تأكيد كلمة المرور'
          error={
            GetErrorMsg(form?.error, 'ConfirmPassword') ||
            form?.validationErrors?.confirmPassword
          }
          onChange={form.onChange}
          value={form?.data?.confirmPassword || ''}
          classNames={{
            root: 'flex items-center gap-5',
            label: 'text-xs mdl:text-base !m-0 min-w-32',
            wrapper: 'w-full mdl:max-w-[290px]',
          }}
        />
      </div>
    </Card>
  );
};

const ImageUploader = ({ form }) => {
  const [image, setImage] = useState('');

  const src = useImagePath(form?.data?.userImage);

  return (
    <div className='relative w-fit mx-auto mdl:mx-0'>
      <Avatar
        src={image || src}
        name={form?.data?.emailaddress}
        className='size-28 mdl:size-56'
        radius='lg'
      />

      <label htmlFor='avatar'>
        <input
          className='hidden'
          type='file'
          accept='image/*'
          id='avatar'
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;
            const url = URL.createObjectURL(file);
            setImage(url);
            form?.onChange({
              target: {
                name: 'userImage',
                value: file,
              },
            });
          }}
        />

        {/* EDIT ICON */}
        <div
          role='button'
          className='absolute bottom-0 start-1/2 translate-x-1/2 ltr:-translate-x-1/2 translate-y-1/4 bg-greenMain rounded-full size-8 flex items-center justify-center'
        >
          <EditImgIcon className='size-4 text-white' />
        </div>
      </label>

      {/* DELETE ICON */}
      {(image || src) && (
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form?.onChange({
              target: {
                value: undefined,
                name: 'userImage',
              },
            });
            setImage('');
          }}
          role='button'
          className='absolute duration-200 hover:shadow-md top-1 start-1 bg-white rounded-full size-5 overflow-hidden'
        >
          <CloseIcon className='size-5' />
        </div>
      )}
    </div>
  );
};
