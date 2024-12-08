'use client';

import { memo, useState } from 'react';

import Card from '@/components/card';
import TextInput from '@/components/inputs/text-input';
import GetErrorMsg from '@/components/getErrorMsg';
import MobileInput from '@/components/inputs/mobile-input';
import { CountrySelect } from '@/components/inputs/country-select';
import { StateSelect } from '@/components/inputs/state-select';

import BriefIcon from '@/assets/icons/brief';
import HourglassIcon from '@/assets/icons/Hourglass';
import LicenseIcon from '@/assets/icons/License';
import QualificationsIcon from '@/assets/icons/qualifications';
import CheckHeartIcon from '@/assets/icons/check-heart';
import { Textarea } from '@/components/inputs/textarea';
import { SectionTitle } from '@/components/dashboard/ui/section-title';
import { SpecializationMultiSelect } from '@/admin/_components/ui/specialization-multi-select';
import PasswordInput from '@/components/inputs/password-input';
import Button from '@/components/button';
import EditImgIcon from '@/assets/icons/editImg';
import CloseIcon from '@/assets/icons/close';
import Avatar from '@/components/avatar';
import { useImagePath } from '@/hooks/use-image-path';
import { SpecializationSingleSelect } from '@/app/[locale]/admin/_components/ui/specialization-single-select';
import { useUpdateMedicalProvider } from '../../_hooks/use-update-medical-provider';
import { AddButton } from '@/components/buttons/add-button';
import { Certificate } from '@/components/team/certificate';
import { AttachmentModal } from '@/components/modal/attachment-modal';
import { useAddAttachment } from '@/app/[locale]/admin/_hooks/attachments/use-add-attachment';
import { useAttachmentMenuActions } from '@/app/[locale]/admin/_hooks/attachments/use-attachment-menu-actions';
import Book from '@/assets/icons/book';
import { AcademicDegreeSelect } from '@/components/inputs/academic-degree-select';

export const UpdateMedicalProviderInfo = ({ initialValues }) => {
  const [form] = useUpdateMedicalProvider({ initialValues });

  return (
    <form onSubmit={form.onSubmit} className='flex-1 space-y-5'>
      <UpdatePesonalInfo form={form} />
      <UpdateCareerInfo form={form} />
      <Specializations form={form} />
      <UpdateCertifications initialValues={initialValues} />
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

const UpdatePesonalInfo = ({ form }) => {
  return (
    <Card title='تعديل البيانات' className='space-y-5'>
      <ImageUploader form={form} />

      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
        <TextInput
          size='sm'
          label='الاسم الاول'
          name='firstName'
          error={GetErrorMsg(form?.error, 'FirstName')}
          onChange={form.onChange}
          value={form?.data?.firstName || ''}
        />

        <TextInput
          size='sm'
          label='الاسم الاخير'
          name='lastName'
          error={GetErrorMsg(form?.error, 'LastName')}
          onChange={form.onChange}
          value={form?.data?.lastName || ''}
        />

        <TextInput
          size='sm'
          label='المسمي الوظيفي'
          name='prefix'
          error={GetErrorMsg(form?.error, 'Prefix')}
          onChange={form.onChange}
          value={form?.data?.prefix || ''}
        />

        <TextInput
          size='sm'
          label='الوظيفة'
          name='jobName'
          error={GetErrorMsg(form?.error, 'JobName')}
          onChange={form.onChange}
          value={form?.data?.jobName || ''}
        />

        <TextInput
          size='sm'
          label='البريد الالكتروني'
          name='emailaddress'
          error={GetErrorMsg(form?.error, 'EmailAddress')}
          onChange={form.onChange}
          value={form?.data?.emailaddress || ''}
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
        />

        <TextInput
          size='sm'
          label='رقم الهوية'
          name='nationalId'
          type='number'
          error={GetErrorMsg(form?.error, 'NationalId')}
          onChange={form.onChange}
          value={form?.data?.nationalId || ''}
        />

        <CountrySelect
          size='sm'
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
          value={
            `${form?.data?.countryCode}-${form?.data?.country}` || ''
          }
        />

        <StateSelect
          size='sm'
          countryCode={form?.data?.countryCode}
          label='المدينة'
          name='city'
          value={form?.data?.city || ''}
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

        <TextInput
          size='sm'
          label='الحي'
          name='state'
          error={GetErrorMsg(form?.error, 'State')}
          onChange={form?.onChange}
          value={form?.data?.state || ''}
        />

        <TextInput
          size='sm'
          label='اسم الشارع'
          name='streetName'
          error={GetErrorMsg(form?.error, 'StreetName')}
          onChange={form?.onChange}
          value={form?.data?.streetName || ''}
        />

        <TextInput
          size='sm'
          label='المبني'
          name='building'
          error={GetErrorMsg(form?.error, 'Building')}
          onChange={form?.onChange}
          value={form?.data?.building || ''}
        />

        <TextInput
          size='sm'
          label='الطابق'
          name='floor'
          type='number'
          error={GetErrorMsg(form?.error, 'Floor')}
          onChange={form?.onChange}
          value={form?.data?.floor || ''}
        />

        <TextInput
          size='sm'
          label='علامة مميزة للعنوان'
          name='commonMark'
          error={GetErrorMsg(form?.error, 'CommonMark')}
          onChange={form?.onChange}
          value={form?.data?.commonMark || ''}
        />

        <TextInput
          size='sm'
          label='رقم البريد'
          name='postalCode'
          error={GetErrorMsg(form?.error, 'PostalCode')}
          onChange={form?.onChange}
          value={form?.data?.postalCode || ''}
        />
      </div>
    </Card>
  );
};

const ICONS = {
  summary: <BriefIcon className='size-5 mdl:size-7' />,
  qualifications: (
    <QualificationsIcon className='size-5 mdl:size-7' />
  ),
  licenseNo: <LicenseIcon className='size-5 mdl:size-7' />,
  exp: <HourglassIcon className='size-5 mdl:size-7' />,
  acadmiceDegree: (
    <Book className='size-5 mdl:size-7 text-greenMain' />
  ),
};

const UpdateCareerInfo = ({ form }) => {
  return (
    <div className='space-y-5'>
      <SectionTitle>الوصف الوظيفي</SectionTitle>
      <Card className='space-y-5'>
        <div className='flex gap-5'>
          {ICONS.summary}
          <Textarea
            size='sm'
            label='نبذة'
            name='jobDescription'
            error={GetErrorMsg(form?.error, 'JobDescription')}
            onChange={form?.onChange}
            value={form?.data?.jobDescription || ''}
            autosize
            className='flex-1'
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.qualifications}
          <TextInput
            size='sm'
            label='المؤهلات'
            name='qualification'
            error={GetErrorMsg(form?.error, 'Qualification')}
            onChange={form.onChange}
            value={form?.data?.qualification || ''}
            className='flex-1'
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.licenseNo}
          <TextInput
            size='sm'
            label='رقم الترخيص'
            name='licenseNumber'
            error={GetErrorMsg(form?.error, 'LicenseNumber')}
            onChange={form.onChange}
            value={form?.data?.licenseNumber || ''}
            className='flex-1'
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.exp}
          <TextInput
            size='sm'
            label='سنوات الخبرة'
            name='experienceYears'
            error={GetErrorMsg(form?.error, 'ExperienceYears')}
            onChange={form?.onChange}
            value={form?.data?.experienceYears || ''}
            type='number'
            className='flex-1'
          />
        </div>

        <div className='flex gap-5'>
          {ICONS.acadmiceDegree}
          <AcademicDegreeSelect
            size='sm'
            label='الدرجة العلمية'
            name='academicDegree'
            error={GetErrorMsg(form?.error, 'AcademicDegree')}
            onChange={form?.onChange}
            value={form?.data?.academicDegree}
            className='flex-1'
          />
        </div>
      </Card>
    </div>
  );
};

const Specializations = ({ form }) => {
  return (
    <Card className='space-y-5'>
      <div className='flex gap-5'>
        <CheckHeartIcon className='size-5 mdl:size-7' />
        <SpecializationSingleSelect
          size='sm'
          label='التخصص الرئيسي'
          name='mainSpecializationId'
          error={GetErrorMsg(form?.error, 'MainSpecializationId')}
          onChange={form?.onChange}
          value={form?.data?.mainSpecializationId}
          classNames={{
            label: 'text-base mdl:text-xl mb-2 ps-1',
          }}
          className='flex-1'
        />
      </div>

      <div className='flex gap-5'>
        <CheckHeartIcon className='size-5 mdl:size-7' />
        <SpecializationMultiSelect
          size='sm'
          label='التخصصات الفرعية'
          name='specializations'
          error={GetErrorMsg(form?.error, 'Specializations')}
          onSelect={form?.onChange}
          defaultValue={form?.data?.specializations}
          classNames={{
            label: 'text-base mdl:text-xl mb-2 ps-1',
          }}
          className='flex-1'
        />
      </div>
    </Card>
  );
};

const PasswordForm = ({ form }) => {
  return (
    <Card className='space-y-5' title='تغيير كلمة المرور'>
      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
        <PasswordInput
          name='password'
          size='sm'
          label='كلمة المرور'
          error={GetErrorMsg(form?.error, 'Password')}
          onChange={form.onChange}
          value={form?.data?.password || ''}
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
        />
      </div>
    </Card>
  );
};

const ImageUploader = ({ form }) => {
  const [image, setImage] = useState('');

  const src = useImagePath(form?.data?.userImage);

  return (
    <div className='relative w-fit mx-auto !mb-10'>
      <Avatar
        src={image || src}
        name={form?.data?.emailaddress}
        className='size-28 mdl:size-36 rounded-full'
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

const UpdateCertifications = memo(({ initialValues }) => {
  const { isPending, onSubmit, isSuccess, error } = useAddAttachment({
    empId: initialValues?.id,
    type: '3', // for certifications
  });

  const actions = useAttachmentMenuActions({
    employeeId: initialValues?.id,
  });

  return (
    <Card className='space-y-5'>
      <div className='flex items-center gap-5'>
        <SectionTitle>الشهادات</SectionTitle>

        <AttachmentModal
          error={error}
          isPending={isPending}
          isSuccess={isSuccess}
          onSubmit={onSubmit}
          title='أضافة شهادة'
        >
          <AddButton>أضافة شهادة</AddButton>
        </AttachmentModal>
      </div>

      {/* <Certificate
        name={'شهادة طبية'}
        image={'/demo-certificate.png'}
        date={'2022-03-01'}
        id='123'
        isEdit
        actions={actions}
      /> */}

      {/* {!!data.length ?? (
        <div className='flex flex-wrap gap-5'>
          {data?.map((item, index) => (
            <Certificate
              key={index}
              name={item?.name}
              image={item?.image}
              date={item?.date}
            />
          ))}
        </div>
      )} */}
    </Card>
  );
});

UpdateCertifications.displayName = 'UpdateCertifications';
