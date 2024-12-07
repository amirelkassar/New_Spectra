'use client';

import { useMemo } from 'react';
import { Rating } from '@mantine/core';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { H1 } from '@/components/dashboard/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { useImagePath } from '@/hooks/use-image-path';

import Card from '@/components/card';
import Avatar from '@/components/avatar';

import CallIcon from '@/assets/icons/call';
import EmailIcon from '@/assets/icons/email';
import SmsIcon from '@/assets/icons/sms';
import SessionIcon from '@/assets/icons/session';
import ROUTES from '@/routes';

export const MedicalProviderMainInfo = ({ data }) => {
  const isEdit = useSearchParams().get('edit') === 'true';

  const title = useMemo(
    () =>
      isEdit ? 'تعديل بيانات مقدم الخدمة' : 'بيانات مقدم الخدمة',
    [isEdit]
  );

  return (
    <Card className='space-y-10'>
      <div className='flex gap-5'>
        <BackButton href={ROUTES.ADMIN.STAFF.HOME} />
        <H1>{title}</H1>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <DoctorInfo {...data} />

        {/* <Services services={data?.services} /> */}

        <Statistics licenseNumber={data?.licenseNumber} />
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
  rate = '10',
  reservationCode = 'DR-AHMED-2024',
  clientsCount = '0',
}) => {
  const src = useImagePath(userImage);

  const locale = useLocale();

  const mainSpecialization =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  const name = prefix
    ? `${prefix}/ ${firstName} ${lastName}`
    : `${firstName} ${lastName}`;

  return (
    <div className='flex flex-wrap items-center gap-x-10 gap-y-5'>
      <Avatar
        src={src}
        name={emailaddress}
        className='size-28 mdl:size-56'
        radius='lg'
      />

      <div className='flex flex-col gap-1 justify-around shrink-0'>
        <h4 className='font-bold text-sm mdl:text-base'>{name}</h4>

        <p className='text-xs mdl:text-base'>{mainSpecialization}</p>

        <p className='text-xs mdl:text-base font-bold flex flex-col items-start'>
          <span className='text-xs font-normal'>كود الحجز</span>
          {reservationCode}
        </p>

        <p className='text-xs mdl:text-base font-bold'>
          {emailaddress}
        </p>

        <p className='text-xs mdl:text-base font-bold'>
          {clientsCount} مريض
        </p>

        <Rating
          dir='ltr'
          size={'md'}
          readOnly
          defaultValue={rate / 2}
        />
        <div className='flex gap-5 items-center *:shrink-0 w-full justify-around'>
          <ContactButton type='chat' />
          <ContactButton type='email' />
          <ContactButton type='phone' />
        </div>
      </div>
    </div>
  );
};

const ContactButton = ({ type = '', ...props }) => {
  if (!type) return null;
  return (
    <div
      {...props}
      role='button'
      className='bg-blueLighter rounded-full p-1 flex items-center justify-center size-9 transition-shadow hover:shadow-md'
    >
      {type === 'phone' && (
        <CallIcon className='text-greenMain size-5' />
      )}
      {type === 'email' && (
        <EmailIcon className='text-greenMain size-5' />
      )}
      {type === 'chat' && (
        <SmsIcon className='text-greenMain size-5' />
      )}
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
    <div className='hidden lg:flex mdl:flex-col gap-5 items-center justify-center border-s-2 border-grayLight ps-5'>
      <div className='flex flex-col gap-1 items-center pb-5 border-b-2 border-grayLight last:pb-0 last:border-b-transparent'>
        <p>رقم الترخيص</p>
        <p className='font-bold text-xl mdl:text-2xl'>
          {licenseNumber}
        </p>
      </div>

      <div className='flex flex-col gap-1 items-center pb-5 border-b-2 border-grayLight last:pb-0 last:border-b-transparent'>
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
