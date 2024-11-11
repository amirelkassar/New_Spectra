import Avatar from '@/components/avatar';
import Button from '@/components/button';
import BriefIcon from '@/assets/icons/brief';
import CalendarFill from '@/assets/icons/calendar-fill';
import HourglassIcon from '@/assets/icons/Hourglass';
import LicenseIcon from '@/assets/icons/License';
import QualificationsIcon from '@/assets/icons/qualifications';

import { getDate } from '@/lib/utils';
import { TeamCard } from '@/components/team';
import { Container } from '@/guest/_components/ui';
import CheckHeartIcon from '@/assets/icons/check-heart';

export const DoctorInfo = ({ doctor = {} }) => {
  return (
    <Container
      aria-label='Doctor Info'
      id='doctor-info'
      aria-labelledby='doctor-info'
      className='mt-20 flex flex-col mdl:mt-28 mdl:grid mdl:grid-cols-12 mdl:grid-rows-2 gap-5'
    >
      <AvatarAndName
        avatar={doctor?.avatar}
        name={doctor?.doctor}
        profession={doctor?.profession}
        rate={doctor?.rate}
      />

      <CareerDescription
        data={doctor?.career}
        specializations={doctor?.specializations}
      />

      <div className='mdl:col-span-3'>
        <Button
          variant='secondary'
          className='w-full py-4 rounded-lg'
        >
          حجز كشف
        </Button>
      </div>
    </Container>
  );
};

const AvatarAndName = ({
  avatar = '',
  name = '',
  profession = '',
  rate = 0,
}) => {
  return (
    <div className='flex items-center mdl:items-center mdl:flex-col gap-x-5 mdl:col-span-3'>
      <div>
        <div className='flex items-end'>
          <TeamCard.Rating className='px-2 py-1 mdl:py-2 mdl:px-7 relative text-xs mdl:text-base z-10 -ms-6 mdl:-ms-16 mb-3 mdl:mb-5'>
            {rate}
          </TeamCard.Rating>
          <Avatar
            src={avatar}
            name={name}
            className='size-24 mdl:size-48 rounded-full'
          />
        </div>
        <span className='text-xs px-7 font-medium'>
          281 تقييم
        </span>
      </div>
      <div className='mdl:w-48 mdl:mt-3'>
        <TeamCard.Name id='doctor-info'>
          {name}
        </TeamCard.Name>
        <TeamCard.Profession>
          {profession}
        </TeamCard.Profession>
      </div>
    </div>
  );
};

export const CareerDescription = ({
  data,
  specializations,
}) => {
  const { fullYear } = getDate(data?.joinDate);

  return (
    <div className='mdl:col-span-9 mdl:row-span-2 p-5 space-y-7'>
      <Info
        title='تاريخ الانضمام'
        value={fullYear}
        icon='joinDate'
      />

      <Info
        title='نبذة'
        icon='summary'
        value={data?.summary}
      />

      <Info
        title='المؤهلات والتراخيص'
        icon='qualifications'
        value={data?.qualifications}
      />

      <Info
        title='رقم الترخيص'
        icon='licenseNo'
        value={data?.licenseNo}
      />

      <Info
        title='سنوات الخبرة'
        icon='exp'
        value={data?.exp}
      />

      <Specializations
        title='التخصصات الدقيقة'
        icon='specializations'
        value={specializations}
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
  specializations: (
    <CheckHeartIcon className='size-5 mdl:size-7' />
  ),
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
}) => {
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
              key={item}
              variant='blueLight'
              className='font-medium cursor-default px-4 text-sm mdl:text-base'
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
