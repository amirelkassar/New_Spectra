'use client';

import Avatar from '@/components/avatar';
import Button from '@/components/button';
import BriefIcon from '@/assets/icons/brief';
import CalendarFill from '@/assets/icons/calendar-fill';
import HourglassIcon from '@/assets/icons/Hourglass';
import LicenseIcon from '@/assets/icons/License';
import QualificationsIcon from '@/assets/icons/qualifications';

import { TeamCard } from '@/components/team';
import { Container } from '@/guest/_components/ui';
import CheckHeartIcon from '@/assets/icons/check-heart';
import { usePublicMedicalProvidersById } from '@/hooks/queries/public/medical-provider';
import { QueryWrapper } from '@/components/query-wrapper';
import { useLocale } from 'next-intl';
import { useImagePath } from '@/hooks/use-image-path';
import { useDate } from '@/hooks/use-date';

export const DoctorInfo = ({ id }) => {
  const query = usePublicMedicalProvidersById(id);
  return (
    <Container
      aria-label='Doctor Info'
      id='doctor-info'
      aria-labelledby='doctor-info'
      className='mt-20 mdl:mt-28'
    >
      <QueryWrapper query={query}>
        {({ data }) => (
          <div className='flex flex-col mdl:grid mdl:grid-cols-12 mdl:grid-rows-2 gap-5'>
            <AvatarAndName {...data} />

            <CareerDescription {...data} />

            <div className='mdl:col-span-3'>
              <Button
                variant='secondary'
                className='w-full py-4 rounded-lg'
              >
                حجز كشف
              </Button>
            </div>
          </div>
        )}
      </QueryWrapper>
    </Container>
  );
};

const AvatarAndName = ({
  prefix = '',
  userImage = '',
  firstName = '',
  lastName = '',
  mainSpecializationEnName = '',
  mainSpecializationArName = '',
  emailaddress = '',
  rating = 0,
  rateCount = 0,
}) => {
  const locale = useLocale();

  const path = useImagePath(userImage);

  const profession =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  const name = prefix
    ? `${prefix}/ ${firstName} ${lastName || ''}`
    : `${firstName} ${lastName || ''}`;
  return (
    <div className='flex items-center mdl:items-center mdl:flex-col gap-x-5 mdl:col-span-3'>
      <div>
        <div className='flex items-end'>
          <TeamCard.Rating className='px-2 py-1 mdl:py-2 mdl:px-7 relative text-xs mdl:text-base z-10 -ms-6 mdl:-ms-16 mb-3 mdl:mb-5'>
            {rating}
          </TeamCard.Rating>
          <Avatar
            src={path}
            name={emailaddress}
            className='size-24 mdl:size-48 rounded-full'
          />
        </div>
        <span className='text-xs px-7 font-medium'>
          {rateCount} تقييم
        </span>
      </div>
      <div className='mdl:w-48 mdl:mt-3'>
        <TeamCard.Name id='doctor-info'>{name}</TeamCard.Name>
        <TeamCard.Profession>{profession}</TeamCard.Profession>
      </div>
    </div>
  );
};

export const CareerDescription = ({
  created = '',
  qualification = '',
  licenseNumber = '',
  jobDescription = '',
  experienceYears = '',
  specializations = [],
}) => {
  const locale = useLocale();

  const { fullYear } = useDate(created);

  return (
    <div className='mdl:col-span-9 mdl:row-span-2 p-5 space-y-7'>
      <Info title='تاريخ الانضمام' value={fullYear} icon='joinDate' />

      <Info title='نبذة' icon='summary' value={jobDescription} />

      <Info
        title='المؤهلات والتراخيص'
        icon='qualifications'
        value={qualification}
      />

      <Info
        title='رقم الترخيص'
        icon='licenseNo'
        value={licenseNumber}
      />

      <Info title='سنوات الخبرة' icon='exp' value={experienceYears} />

      <Specializations
        title='التخصصات الدقيقة'
        icon='specializations'
        value={specializations}
        locale={locale}
      />
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
  specializations: <CheckHeartIcon className='size-5 mdl:size-7' />,
};

const Info = ({ title = '', value = '', icon = '' }) => {
  return (
    <div className='flex gap-5'>
      <span className='shrink-0'>{ICONS[icon]}</span>
      <div>
        <h4 className='text-xs mdl:text-base font-bold mb-1'>
          {title}
        </h4>
        <p className='text-sm mdl:text-xl'>{value}</p>
      </div>
    </div>
  );
};

export const Specializations = ({
  title = '',
  value = [],
  icon = '',
  locale = 'ar',
}) => {
  const key = locale === 'ar' ? 'arName' : 'enName';

  return (
    <div className='flex gap-5'>
      <span className='shrink-0'>{ICONS[icon]}</span>
      <div>
        <h4 className='text-xs mdl:text-base font-bold mb-3'>
          {title}
        </h4>
        <div className='flex flex-wrap gap-3'>
          {value?.map((item) => (
            <Button
              key={item.id}
              variant='blueLight'
              className='font-medium cursor-default px-4 text-sm mdl:text-base'
            >
              {item[key]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
