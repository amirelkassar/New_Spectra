'use client';

import { useLocale } from 'next-intl';
import { Rating } from '@mantine/core';

import { useImagePath } from '@/hooks/use-image-path';
import { DoctorContactsButton } from '@/dashboard/_components/ui/doctor-contacts-buttons';
import Avatar from '@/components/avatar';

export const DoctorMainInfo = ({
  prefix = '',
  firstName = '',
  lastName = '',
  userImage = '',
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  emailaddress = '',
  rating = 0,
  id = '',
  clientsCount = '0',
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
        className='size-28 mdl:size-56'
        radius='lg'
      />

      <div className='flex flex-col gap-1 justify-around shrink-0'>
        <h4 className='font-bold text-sm mdl:text-base capitalize'>
          {name}
        </h4>

        <p className='text-xs mdl:text-base'>{mainSpecialization}</p>

        <p className='text-xs mdl:text-base font-bold flex flex-col items-start'>
          <span className='text-xs font-normal'>كود الحجز</span>
          {id}
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
          defaultValue={rating / 2}
        />
        <div className='flex gap-5 items-center *:shrink-0 w-full justify-around'>
          <DoctorContactsButton type='chat' />
          <DoctorContactsButton type='email' />
          <DoctorContactsButton type='phone' />
        </div>
      </div>
    </div>
  );
};
