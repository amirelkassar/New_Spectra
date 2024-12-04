'use client';

import { useRouter } from '@/navigation';
import { useSearchParams } from 'next/navigation';

import { H1 } from '@/components/dashboard/ui/h1';
import { useDate } from '@/hooks/use-date';
import { useGender } from '@/hooks/use-gender';
import { InfoData } from '../../_components/info-data';
import { BackButton } from '@/components/buttons/back-button';
import { useImagePath } from '@/hooks/use-image-path';
import { EmployeeCellActions } from '../../_components/employee-cell-actions';
import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { EditButton } from '@/components/buttons/edit-button';
import { UpdateStaffInfo } from './update-staff-info';

export const StaffInfo = ({ data }) => {
  const isEdit = useSearchParams().get('edit') === 'true';

  const router = useRouter();

  if (isEdit) return <UpdateStaffInfo initialValues={data} />;
  return (
    <div className='space-y-5'>
      <MainInfo {...data} />
      <OtherInfo {...data} />
      <EditButton
        onClick={() => router.replace('?edit=true')}
        className='bg-white border-2 border-black text-black w-full mdl:max-w-xs font-bold transition hover:border-greenMain'
      >
        تعديل
      </EditButton>
    </div>
  );
};

const MainInfo = ({
  firstName = '',
  lastName = '',
  phoneNumber = '',
  emailaddress = '',
  nationalId = '',
  userImage = '',
}) => {
  const src = useImagePath(userImage);

  return (
    <Card className='space-y-10'>
      {/* HEADER */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>تفاصيل الموظف</H1>
        </div>

        <EmployeeCellActions />
      </div>

      {/* INFO */}
      <div className='flex flex-col mdl:flex-row mdl:items-start gap-10'>
        <Avatar
          src={src}
          name={emailaddress}
          className='size-28 mdl:size-56 mx-auto mdl:mx-0'
          radius='lg'
        />

        <div className='flex flex-col gap-3 justify-around'>
          <InfoData label='الاسم' value={firstName + ' ' + lastName} />
          <InfoData label='رقم الهاتف' value={phoneNumber} />
          <InfoData label='البريد الإلكتروني' value={emailaddress} />
          <InfoData label='رقم الهوية' value={nationalId} />
        </div>
      </div>
    </Card>
  );
};

const OtherInfo = ({
  jobName = '',
  jobDescription = '',
  created = '',
  workingHours = '',
  qualification = '',
  experienceYears = '',
  country = '',
  city = '',
  state = '',
  streetName = '',
  commonMark = '',
  building = '',
  floor = '',
  postalCode = '',
  humenGender = '',
  prefix = '',
}) => {
  const joinData = useDate(created);

  const gender = useGender(humenGender);

  return (
    <Card className='space-y-10' title='بيانات اخري'>
      <div className='flex flex-col mdl:flex-row gap-y-5 gap-x-10 *:flex-1'>
        <div className='space-y-5'>
          <InfoData label='الوظيفة' value={jobName} />
          <InfoData label='وصف الوظيفة' value={jobDescription} />
          <InfoData label='المسمي الوظيفي' value={prefix} />
          <InfoData label='المؤهلات' value={qualification} />
          <InfoData label='سنوات الخبرة' value={experienceYears} />
          <InfoData label='ساعات العمل' value={workingHours} />
          <InfoData label='النوع' value={gender} />
          <InfoData label='تاريخ الانضمام' value={joinData.fullYear} />
        </div>

        <div className='space-y-5'>
          <InfoData label='البلد' value={country} />
          <InfoData label='المدينة' value={city} />
          <InfoData label='الحي' value={state} />
          <InfoData label='اسم الشارع' value={streetName} />
          <InfoData label='المبني' value={building} />
          <InfoData label='الطابق' value={floor} />
          <InfoData label='علامة مميزة للعنوان' value={commonMark} />
          <InfoData label='رقم البريد' value={postalCode} />
        </div>
      </div>
    </Card>
  );
};
