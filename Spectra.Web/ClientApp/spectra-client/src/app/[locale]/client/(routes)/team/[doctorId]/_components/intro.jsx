import { Rating } from '@mantine/core';

import {
  BackButton,
  H1,
  Section,
} from '@/client/_components/ui';
import Avatar from '@/components/avatar';
import Card from '@/components/card';
import Button from '@/components/button';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

export const Intro = ({ data }) => {
  return (
    <Section id='doctor-intro' className='pt-0'>
      <Card className='space-y-5'>
        <div className='flex gap-5'>
          <BackButton />
          <H1>الفريق</H1>
        </div>

        <div className='mdl:flex mdl:gap-5 mdl:items-end space-y-5 mdl:space-y-0'>
          <DoctorInfo
            name={data?.doctor}
            avatar={data?.avatar}
            profession={data?.profession}
            email={data?.email}
            rate={data?.rate}
          />

          <Link
            className='mdl:max-w-xs mdl:ms-auto block w-full'
            href={ROUTES.CLIENT.TEAM.BOOK_APPOINTMENT.replace(
              ':id',
              data?.id
            )}
          >
            <Button
              variant='secondary'
              className='w-full text-sm mdl:text-xl'
            >
              حجز ميعاد
            </Button>
          </Link>
        </div>
      </Card>
    </Section>
  );
};

const DoctorInfo = ({
  name = '',
  avatar = '',
  profession = '',
  email = '',
  rate = '',
}) => {
  return (
    <div className='flex gap-10'>
      <Avatar
        src={avatar}
        name={name}
        className='size-28 mdl:size-56'
        radius='lg'
      />

      <div className='flex flex-col justify-around'>
        <h4 className='font-bold text-sm mdl:text-base'>
          {name}
        </h4>

        <p className='text-xs mdl:text-base'>
          {profession}
        </p>

        <p className='text-xs mdl:text-base font-bold'>
          {email}
        </p>

        <Rating
          dir='ltr'
          size={'md'}
          readOnly
          defaultValue={rate / 2}
        />
      </div>
    </div>
  );
};
