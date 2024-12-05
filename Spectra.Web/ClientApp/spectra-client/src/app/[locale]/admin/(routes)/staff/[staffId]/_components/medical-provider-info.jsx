'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '@/navigation';
import { useSearchParams } from 'next/navigation';

import { useDate } from '@/hooks/use-date';
import { useGender } from '@/hooks/use-gender';
import { InfoData } from '../../_components/info-data';
import { EditButton } from '@/components/buttons/edit-button';
import { SectionTitle } from '@/components/dashboard/ui/section-title';
import { EmployeeCellActions } from '../../_components/employee-cell-actions';
import { UpdateMedicalProviderInfo } from './update-medical-provider-info';

import Card from '@/components/card';
import Button from '@/components/button';

import BriefIcon from '@/assets/icons/brief';
import CalendarFill from '@/assets/icons/calendar-fill';
import HourglassIcon from '@/assets/icons/Hourglass';
import LicenseIcon from '@/assets/icons/License';
import QualificationsIcon from '@/assets/icons/qualifications';
import CheckHeartIcon from '@/assets/icons/check-heart';
import Image from 'next/image';
import ADHD from '@/assets/icons/adhd';

export const MedicalProviderInfo = ({ data }) => {
  const isEdit = useSearchParams().get('edit') === 'true';

  const router = useRouter();

  if (isEdit)
    return <UpdateMedicalProviderInfo initialValues={data} />;

  return (
    <div className='flex-1 space-y-5'>
      <PesonalInfo data={data} />
      <CareerInfo data={data} />
      <Specializations data={data?.specializations} />
      {/* <Services data={data?.services} /> */}
      <Certifications />
      <EditButton
        onClick={() => router.replace('?edit=true')}
        className='bg-white border-2 border-black text-black w-full mdl:max-w-xs font-bold transition hover:border-greenMain'
      >
        تعديل
      </EditButton>
    </div>
  );
};

const PesonalInfo = ({ data }) => {
  const name = (() => {
    if (!data?.firstName || !data?.lastName) return '';
    return `${data?.firstName} ${data?.lastName}`;
  })();

  const gender = useGender(data?.humenGender);

  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between px-5 mdl:px-0'>
        <SectionTitle>البيانات الشخصية</SectionTitle>
        <EmployeeCellActions />
      </div>
      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-2'>
        <Card>
          <InfoData label='الاسم' value={name} direction='col' />
        </Card>
        <Card>
          <InfoData label='النوع' value={gender} direction='col' />
        </Card>

        <Card>
          <InfoData
            label='المسمي الوظيفي'
            value={data?.prefix}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='البريد الإلكتروني'
            value={data?.emailaddress}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='رقم الهاتف'
            value={data?.phoneNumber}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='رقم الهوية'
            value={data?.nationalId}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='البلد'
            value={data?.country}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='المدينة'
            value={data?.city}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='الحي'
            value={data?.state}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='اسم الشارع'
            value={data?.streetName}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='المبني'
            value={data?.building}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='الطابق'
            value={data?.floor}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='علامة مميزة للعنوان'
            value={data?.commonMark}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='رقم البريد'
            value={data?.postalCode}
            direction='col'
          />
        </Card>
      </div>
    </div>
  );
};

const ICONS = {
  joinDate: <CalendarFill className='size-5 mdl:size-7' />,
  summary: <BriefIcon className='size-5 mdl:size-7' />,
  qualifications: (
    <QualificationsIcon className='size-5 mdl:size-7' />
  ),
  licenseNo: <LicenseIcon className='size-5 mdl:size-7' />,
  exp: <HourglassIcon className='size-5 mdl:size-7' />,
};

const CareerInfo = ({ data }) => {
  const date = useDate(data?.created);
  return (
    <div className='space-y-5'>
      <SectionTitle>الوصف الوظيفي</SectionTitle>
      <Card className='space-y-5'>
        <div className='flex gap-5'>
          {ICONS.joinDate}
          <InfoData
            direction='col'
            weight='reverse'
            label='تاريخ الانضمام'
            value={date.fullYear}
          />
        </div>

        <div className='flex gap-5'>
          {ICONS.summary}
          <InfoData
            direction='col'
            weight='reverse'
            label='نبذة'
            value={data?.jobDescription}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.qualifications}
          <InfoData
            direction='col'
            weight='reverse'
            label='المؤهلات والتراخيص'
            value={data?.qualification}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.licenseNo}
          <InfoData
            direction='col'
            weight='reverse'
            label='رقم الترخيص'
            value={data?.licenseNumber}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.exp}
          <InfoData
            direction='col'
            weight='reverse'
            label='سنوات الخبرة'
            value={data?.experienceYears}
          />
        </div>
      </Card>
    </div>
  );
};

const Specializations = ({ data = [] }) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  return (
    <Card
      className='space-y-5'
      titleId='specializations'
      title={
        <div className='flex items-center gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          التخصصات الفرعية
        </div>
      }
    >
      {!!data.length ? (
        <div className='flex flex-wrap gap-3'>
          {data.map((item) => (
            <Button
              key={item?.id}
              variant='blueLight'
              className='font-medium cursor-default px-4'
            >
              {item[key]}
            </Button>
          ))}
        </div>
      ) : (
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          لا يوجد تخصصات
        </p>
      )}
    </Card>
  );
};

const Services = ({ data = [] }) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  return (
    <Card className='space-y-5' title='رسوم الخدمات'>
      {!!data?.length ? (
        data.map((service) => (
          <InfoData
            key={service?.id}
            label={service[key]}
            value={`${service?.price || 100} SAR`}
          />
        ))
      ) : (
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          لا يوجد خدمات
        </p>
      )}
    </Card>
  );
};

const Certifications = ({ data = [] }) => {
  if (!data?.length)
    return (
      <Card title='الشهادات' className='space-y-5'>
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          لا يوجد شهادات
        </p>
      </Card>
    );
  return (
    <div className='space-y-5'>
      <SectionTitle>الشهادات</SectionTitle>

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
    </div>
  );
};

const Certificate = ({ name = '', image = '', date = '' }) => {
  const { fullYear } = useDate(date);

  return (
    <Card className='flex-none !p-2 mdl:!p-3 space-y-3' size='sm'>
      <div className='relative rounded-lg overflow-hidden w-36 h-28 mdl:w-56 mdl:h-44'>
        <Image
          src={image}
          alt={name}
          priority={false}
          fill
          sizes='width: 230px; height: 180px;'
          className='w-full h-full object-center object-cover'
        />
      </div>

      <div className='max-w-36 mdl:max-w-56'>
        <h5 className='text-xs mdl:text-base font-bold inline-block me-2'>
          {name}
        </h5>
        <p className='text-xs mdl:text-base text-grayDark text-end'>
          {fullYear}
        </p>
      </div>
    </Card>
  );
};
