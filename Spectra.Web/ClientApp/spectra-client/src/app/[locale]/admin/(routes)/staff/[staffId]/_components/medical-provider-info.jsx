'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';

import { useDate } from '@/hooks/use-date';
import { useGender } from '@/hooks/use-gender';
import { InfoData } from '@/components/dashboard/ui/info-data';
import { EditButton } from '@/components/buttons/edit-button';
import { SectionTitle } from '@/components/dashboard/ui/section-title';
import { EmployeeCellActions } from '../../_components/employee-cell-actions';
import { UpdateMedicalProviderInfo } from './update-medical-provider-info';
import { Certificate } from '@/components/team/certificate';

import Card from '@/components/card';
import Button from '@/components/button';

import CheckHeartIcon from '@/assets/icons/check-heart';
import ADHD from '@/assets/icons/adhd';
import { ACADEMIC_DEGREE_OBJ } from '@/data/academic-degree';
import { CAREER_ICONS as ICONS } from '@/data/team';

export const MedicalProviderInfo = ({ data }) => {
  const isEdit = useSearchParams().get('edit') === 'true';

  const router = useRouter();

  if (isEdit)
    return <UpdateMedicalProviderInfo initialValues={data} />;

  return (
    <div className='flex-1 space-y-5'>
      <PesonalInfo data={data} />
      <CareerInfo data={data} />
      <Specializations {...data} />
      {/* <Services data={data?.services} /> */}
      <Certifications data={data?.attachments} />
      <EditButton
        onClick={() => router.push('?edit=true')}
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
    <div className='space-y-3'>
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
            label='الوظيفة'
            value={data?.jobName}
            direction='col'
          />
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

const CareerInfo = ({ data }) => {
  const date = useDate(data?.created);
  return (
    <div className='space-y-3'>
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
          {ICONS.approvedBy}
          <InfoData
            direction='col'
            weight='reverse'
            label='معتمد من'
            value={data?.approvedBy}
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

        <div className='flex gap-5'>
          {ICONS.acadmiceDegree}
          <InfoData
            direction='col'
            weight='reverse'
            label='الدرجة العلمية'
            value={ACADEMIC_DEGREE_OBJ[data?.academicDegree]}
          />
        </div>
      </Card>
    </div>
  );
};

const Specializations = ({
  specializations = [],
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  sectionArEnName = '',
  sectionEnName = '',
}) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  const mainSpecialization =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  const section = locale === 'ar' ? sectionArEnName : sectionEnName;

  return (
    <div className='space-y-3'>
      <SectionTitle>التخصصات الطبية</SectionTitle>

      <Card className='space-y-5'>
        <div className='flex items-start gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          <InfoData
            direction='col'
            weight='reverse'
            label='القسم'
            value={section}
          />
        </div>

        <div className='flex items-start gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          <InfoData
            direction='col'
            weight='reverse'
            label='التخصص الرئيسي'
            value={mainSpecialization}
          />
        </div>

        <div className='flex items-start gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          <h4 className='font-bold text-xs mdl:text-base'>
            التخصصات الفرعية
          </h4>
        </div>

        {!!specializations.length ? (
          <div className='flex flex-wrap gap-3'>
            {specializations.map((item) => (
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
    </div>
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
        {data?.map((item) => (
          <Certificate
            key={item?.id}
            name={item?.name}
            image={item?.path}
            date={item?.date}
          />
        ))}
      </div>
    </div>
  );
};
