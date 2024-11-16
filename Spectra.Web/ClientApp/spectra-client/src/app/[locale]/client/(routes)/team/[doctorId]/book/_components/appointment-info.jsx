import Avatar from '@/components/avatar';
import Card from '@/components/card';
import {
  BackButton,
  H1,
  Section,
} from '@/client/_components/ui';
import { AppointmentDate } from './appointment-date';

export const AppointmentInfo = ({ data = {} }) => {
  return (
    <Section id='appointment-info' className='pt-0'>
      <Card className='space-y-7'>
        <div className='flex items-center gap-5'>
          <BackButton />
          <H1 id='appointment-info'>اختيار الميعاد</H1>
        </div>

        <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
          <Doctor
            avatar={data?.avatar}
            name={data?.doctor}
            profession={data?.profession}
          />

          <AppointmentDate />
        </div>
      </Card>
    </Section>
  );
};

const Doctor = ({
  avatar = '',
  name = '',
  profession = '',
}) => {
  return (
    <div className='flex gap-5'>
      <Avatar
        src={avatar}
        name={name}
        className='size-20'
        radius='md'
      />
      <div className='text-xs mdl:text-base space-y-1'>
        <h5 className='font-bold'>{name}</h5>
        <p>{profession}</p>
      </div>
    </div>
  );
};
