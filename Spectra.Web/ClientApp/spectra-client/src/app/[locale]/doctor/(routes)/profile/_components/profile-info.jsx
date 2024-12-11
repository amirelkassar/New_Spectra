'use client';

import { Divider } from '@mantine/core';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';

import { useProfile } from '@/hooks/queries/user/profile';
import { useGender } from '@/hooks/use-gender';
import { useDate } from '@/hooks/use-date';
import { Toast } from '@/components/toast';
import { InfoData } from '@/components/dashboard/ui/info-data';
import { CopyButton } from '@/components/buttons/copy-button';
import { EditButton } from '@/components/buttons/edit-button';
import { QueryWrapper } from '@/components/query-wrapper';
import { SectionTitle } from '@/components/dashboard/ui/section-title';
import { ACADEMIC_DEGREE_OBJ } from '@/data/academic-degree';
import { CAREER_ICONS as ICONS } from '@/data/team';

import CheckHeartIcon from '@/assets/icons/check-heart';
import ADHD from '@/assets/icons/adhd';

import Button from '@/components/button';
import Card from '@/components/card';
import ROUTES from '@/routes';

export const ProfileInfo = () => {
  const router = useRouter();

  const query = useProfile();

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <div className='space-y-5'>
          <ReservationCode bookingCode={data?.id} />
          <Divider size='sm' className='border-grayLight lg:hidden' />
          <ReservationLink id={data?.id} />
          <PesonalInfo data={data} />
          <CareerInfo data={data} />
          <Specializations {...data} />

          <EditButton
            onClick={() => router.push(ROUTES.DOCTOR.PROFILE.EDIT)}
            className='bg-white border-2 border-black text-black w-full mdl:max-w-xs font-bold transition hover:border-greenMain'
          >
            تعديل
          </EditButton>
        </div>
      )}
    </QueryWrapper>
  );
};

const ReservationCode = ({ bookingCode = '' }) => {
  return (
    <Card className='flex items-center justify-between'>
      <div className='group flex flex-col gap-3 text-xs mdl:text-base'>
        <h4>كود الحجز</h4>
        <p className='font-bold underline'>{bookingCode}</p>
      </div>
      <CopyButton
        onClick={() => {
          navigator.clipboard.writeText(bookingCode);
          Toast.Success('تم نسخ كود الحجز');
        }}
      >
        نسخ
      </CopyButton>
    </Card>
  );
};

const ReservationLink = ({ id = '' }) => {
  const reservationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/ar${ROUTES.AUTH.SIGNUP_FAMILY}?doctorCode=${id}`;

  return (
    <Card className='flex items-center justify-between'>
      <div className='group flex flex-col gap-3 text-xs mdl:text-base'>
        <h4>رابط الحجز</h4>
        <a
          href={reservationLink}
          target='_blank'
          className='font-bold underline'
        >
          {reservationLink}
        </a>
      </div>
      <CopyButton
        onClick={() => {
          navigator.clipboard.writeText(reservationLink);
          Toast.Success('تم نسخ رابط الحجز');
        }}
      >
        نسخ
      </CopyButton>
    </Card>
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
      <SectionTitle>البيانات الشخصية</SectionTitle>

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
            valueClassName='capitalize'
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

        {!!specializations?.length ? (
          <div className='flex flex-wrap gap-3'>
            {specializations?.map((item) => (
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
