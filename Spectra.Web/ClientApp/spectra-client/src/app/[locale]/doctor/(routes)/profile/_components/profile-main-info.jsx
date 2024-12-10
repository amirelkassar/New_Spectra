'use client';

import { useLocale } from 'next-intl';

import { H1 } from '@/components/dashboard/ui/h1';
import { useImagePath } from '@/hooks/use-image-path';

import Card from '@/components/card';
import Avatar from '@/components/avatar';

import SessionIcon from '@/assets/icons/session';
import { useProfile } from '@/hooks/queries/user/profile';
import { Divider } from '@mantine/core';
import { usePathname } from '@/navigation';
import ROUTES from '@/routes';

export const ProfileMainInfo = () => {
  const pathname = usePathname();

  const { isPending, isError, data } = useProfile();

  if (isPending || isError || pathname === ROUTES.DOCTOR.PROFILE.EDIT)
    return null;

  const profileData = data?.data;

  return (
    <Card className='space-y-10'>
      <H1>ملفي</H1>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <DoctorInfo {...profileData} />

        {/* <Services services={data?.services} /> */}

        <Statistics licenseNumber={profileData?.licenseNumber} />
      </div>
    </Card>
  );
};

const DoctorInfo = ({
  prefix = '',
  firstName = '',
  lastName = '',
  userImage = '',
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  emailaddress = '',
  rate = '4.9',
  rateCount = '0',
}) => {
  const src = useImagePath(userImage);

  const locale = useLocale();

  const mainSpecialization =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  const name = prefix
    ? `${prefix}/ ${firstName} ${lastName || ''}`
    : `${firstName} ${lastName || ''}`;

  return (
    <div className='flex flex-wrap items-center gap-x-10 gap-y-5'>
      <Avatar
        src={src}
        name={emailaddress}
        className='size-20 mdl:size-28 rounded-full'
        radius='lg'
      />

      <div className='flex flex-col gap-1 justify-around shrink-0'>
        <h4 className='font-bold text-sm mdl:text-base'>{name}</h4>

        <p className='text-xs mdl:text-base'>{mainSpecialization}</p>

        <p className='text-xs mdl:text-base font-bold'>
          {emailaddress}
        </p>

        <span
          dir='ltr'
          className='bg-greenMain font-bold block text-white text-sm mdl:text-xl text-center rounded-xl w-fit py-1 px-5'
        >
          {rate} &#9733;
        </span>

        <p className='text-xs'>{rateCount} تقييم</p>
      </div>
    </div>
  );
};

const Services = ({ services = [] }) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  if (!services.length) return null;

  return (
    <div className='flex flex-col gap-5 justify-center border-t-2 lg:border-t-0 lg:border-s-2 border-grayLight lg:ps-5 pt-5 lg:pt-0'>
      {services.map((service) => (
        <div
          key={service?.id}
          className='lg:flex lg:justify-center grid grid-cols-2 place-items-center items-center gap-2'
        >
          <p className='lg:flex-1'>{service[key]}</p>
          <p className='text-greenMain font-bold'>
            {service?.price || 100} SAR
          </p>
        </div>
      ))}
    </div>
  );
};

const Statistics = ({ licenseNumber = '', sessionCount = 0 }) => {
  return (
    <div className='flex lg:flex-col items-center lg:items-stretch lg:border-s-2 border-grayLight lg:ps-5 border-t-2 lg:border-t-0 pt-5 lg:pt-0'>
      <div className='flex flex-col gap-1 items-center flex-1'>
        <p>رقم الترخيص</p>
        <p className='font-bold text-xl mdl:text-2xl'>
          {licenseNumber}
        </p>
      </div>

      <Divider
        className='border-grayLight shrink-0 hidden lg:block'
        my='md'
        size='sm'
      />

      <Divider
        className='border-grayLight shrink-0 lg:hidden'
        mx='md'
        size='sm'
        orientation='vertical'
      />

      <div className='flex flex-col gap-1 items-center pb-5 border-b-2 border-grayLight last:pb-0 last:border-b-transparent flex-1'>
        <div className=' size-8 mdl:size-10 rounded-full bg-blueLighter p-1 flex items-center justify-center'>
          <SessionIcon />
        </div>
        <p className='font-bold text-xl mdl:text-2xl'>
          {sessionCount?.toLocaleString()}
        </p>
        <p>جلسة</p>
      </div>
    </div>
  );
};
