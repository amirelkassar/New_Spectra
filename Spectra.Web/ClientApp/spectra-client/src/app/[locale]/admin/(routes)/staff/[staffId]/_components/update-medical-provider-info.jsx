'use client';

import Card from '@/components/card';
import { useUpdateStaff } from '../../_hooks/use-update-staff';
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

export const UpdateMedicalProviderInfo = ({ initialValues }) => {
  const [form] = useUpdateStaff({ initialValues });

  return (
    <form onSubmit={form.onSubmit} className='flex-1 space-y-5'>
      <UpdatePesonalInfo form={form} />
      <UpdateCareerInfo form={form} />
      {/* <Specializations form={form} /> */}
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
      </Card>
    </div>
  );
};

// const Specializations = ({ form }) => {
//   return (
//     <Card
//       className='space-y-5'
//       titleId='specializations'
//       title={
//         <div className='flex items-center gap-3'>
//           <CheckHeartIcon className='size-5 mdl:size-7' />
//           التخصصات الفرعية
//         </div>
//       }
//     >
//       <SpecializationMultiSelect
//         name='specializations'
//         error={GetErrorMsg(form?.error, 'Specializations')}
//         onSelect={form?.onChange}
//         defaultValue={form?.data?.specializations}
//       />
//     </Card>
//   );
// };

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
